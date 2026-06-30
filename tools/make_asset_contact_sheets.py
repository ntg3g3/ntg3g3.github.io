from __future__ import annotations

import csv
import math
from pathlib import Path
from urllib.parse import urlparse

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / "assets" / "wix-originals"
OUT_DIR = ROOT / "docs" / "asset-contact-sheets"
MANIFEST = ORIGINALS / "wix-assets-manifest.csv"


def route_name(page_url: str) -> str:
    path = urlparse(page_url).path.strip("/")
    return path or "home"


def safe_slug(value: str) -> str:
    return "".join(ch if ch.isalnum() or ch in "-_" else "-" for ch in value).strip("-").lower()


def load_rows() -> list[dict[str, str]]:
    with MANIFEST.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle))


def image_size(path: Path) -> tuple[int, int] | None:
    try:
        with Image.open(path) as image:
            return image.size
    except Exception:
        return None


def make_sheet(route: str, rows: list[dict[str, str]]) -> None:
    tile_w, tile_h = 260, 230
    thumb_w, thumb_h = 240, 165
    cols = 4
    rows_count = math.ceil(len(rows) / cols)
    sheet = Image.new("RGB", (cols * tile_w, rows_count * tile_h), "#f7f4ef")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for index, row in enumerate(rows):
        file_name = row["FileName"]
        path = ORIGINALS / file_name
        x = (index % cols) * tile_w
        y = (index // cols) * tile_h
        draw.rectangle((x + 8, y + 8, x + tile_w - 8, y + tile_h - 8), outline="#d7d0c4", width=1)

        try:
            with Image.open(path) as image:
                image = ImageOps.exif_transpose(image)
                image.thumbnail((thumb_w, thumb_h))
                thumb = Image.new("RGB", (thumb_w, thumb_h), "#e7e0d7")
                paste_x = (thumb_w - image.width) // 2
                paste_y = (thumb_h - image.height) // 2
                if image.mode in ("RGBA", "LA"):
                    thumb.paste(image.convert("RGBA"), (paste_x, paste_y), image.convert("RGBA"))
                else:
                    thumb.paste(image.convert("RGB"), (paste_x, paste_y))
        except Exception:
            thumb = Image.new("RGB", (thumb_w, thumb_h), "#222222")
            d = ImageDraw.Draw(thumb)
            d.text((12, 70), "preview unavailable", fill="#ffffff", font=font)

        sheet.paste(thumb, (x + 10, y + 10))
        label = f"{index + 1}. {file_name}"
        size = image_size(path)
        if size:
            label += f" ({size[0]}x{size[1]})"
        draw.text((x + 12, y + 182), label[:42], fill="#111111", font=font)
        draw.text((x + 12, y + 202), label[42:84], fill="#555555", font=font)

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    sheet.save(OUT_DIR / f"{safe_slug(route)}.jpg", quality=88)


def main() -> None:
    rows = [row for row in load_rows() if row.get("FileName") and row.get("Status") != "failed"]
    grouped: dict[str, list[dict[str, str]]] = {}
    for row in rows:
        for page in row.get("SourcePages", "").split(" | "):
            page = page.strip()
            if not page:
                continue
            grouped.setdefault(route_name(page), []).append(row)

    index_rows = []
    for route, route_rows in sorted(grouped.items()):
        unique = {}
        for row in route_rows:
            unique[row["FileName"]] = row
        route_rows = sorted(unique.values(), key=lambda row: row["FileName"])
        make_sheet(route, route_rows)
        index_rows.append((route, len(route_rows), f"docs/asset-contact-sheets/{safe_slug(route)}.jpg"))

    with (OUT_DIR / "INDEX.md").open("w", encoding="utf-8") as handle:
        handle.write("# Asset Contact Sheets\n\n")
        for route, count, path in index_rows:
            handle.write(f"- `{route}`: {count} assets - `{path}`\n")

    print(f"Wrote {len(index_rows)} contact sheets to {OUT_DIR}")


if __name__ == "__main__":
    main()
