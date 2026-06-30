from __future__ import annotations

import csv
from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / "assets" / "wix-originals"
PROJECTS = ROOT / "public" / "images" / "projects"
MANIFEST = ORIGINALS / "wix-assets-manifest.csv"

ROUTE_TO_SLUG = {
    "cavern": "cavern",
    "projectamazon": "project-amazon",
    "diceadventure": "dice-adventure",
    "roblearnx": "roblearnx",
    "cyberland2021": "cyberland-2021",
    "soulferry": "soul-ferry",
    "rememberme": "remember-me",
    "bellum": "bellum",
    "droppingsound3d": "sound-drop",
    "virta": "virta",
    "wristx": "wristx",
    "roominate": "roominate",
    "drydock": "in-city-short-distance-ferry-terminal",
    "affix": "affix",
    "botto": "botto",
    "internprojects": "product-design-intern",
    "softgood": "soft-goods-project",
    "photography": "photography",
    "wood": "woodcrafts",
    "metal": "metalcrafts",
}

MAX_IMAGES = 4
MIN_WIDTH = 900
MIN_HEIGHT = 500


def route_matches(row: dict[str, str], route: str) -> bool:
    return f"taogames.online/{route}" in row.get("SourcePages", "")


def image_info(path: Path) -> tuple[int, int] | None:
    try:
        with Image.open(path) as image:
            return image.size
    except Exception:
        return None


def score(width: int, height: int, file_size: int) -> int:
    aspect = width / max(height, 1)
    aspect_bonus = 2_000_000 if 0.75 <= aspect <= 2.4 else 0
    return width * height + aspect_bonus + min(file_size, 3_000_000)


def save_gallery_image(source: Path, output: Path) -> None:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        if getattr(image, "is_animated", False):
            image.seek(0)
        image = image.convert("RGB")
        image.thumbnail((1800, 1400))
        output.parent.mkdir(parents=True, exist_ok=True)
        image.save(output, "WEBP", quality=82, method=6)


def main() -> None:
    with MANIFEST.open("r", encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.DictReader(handle))

    for route, slug in ROUTE_TO_SLUG.items():
        candidates = []
        cover = PROJECTS / slug / "cover.webp"
        for row in rows:
            if row.get("Status") == "failed" or not route_matches(row, route):
                continue
            source = ORIGINALS / row["FileName"]
            if not source.exists():
                continue
            info = image_info(source)
            if not info:
                continue
            width, height = info
            if width < MIN_WIDTH or height < MIN_HEIGHT:
                continue
            candidates.append((score(width, height, source.stat().st_size), source))

        selected = []
        seen_names = set()
        for _, source in sorted(candidates, reverse=True):
            if source.name in seen_names:
                continue
            selected.append(source)
            seen_names.add(source.name)
            if len(selected) >= MAX_IMAGES:
                break

        for index, source in enumerate(selected, start=1):
            out = PROJECTS / slug / f"gallery-{index:02d}.webp"
            save_gallery_image(source, out)

        print(f"{slug}: {len(selected)} gallery images" + (" + cover" if cover.exists() else ""))


if __name__ == "__main__":
    main()
