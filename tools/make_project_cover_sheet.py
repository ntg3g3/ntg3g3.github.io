from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ROOT / "public" / "images" / "projects"
OUT = ROOT / "docs" / "project-cover-contact-sheet.jpg"


def main() -> None:
    files = sorted(PROJECTS.glob("*/cover.webp"))
    tile_w, tile_h = 260, 190
    cols = 4
    rows = (len(files) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * tile_w, rows * tile_h), "#f7f4ef")
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.load_default()

    for index, path in enumerate(files):
        with Image.open(path) as image:
            image = image.convert("RGB")
            image.thumbnail((240, 140))
        x = (index % cols) * tile_w
        y = (index // cols) * tile_h
        sheet.paste(image, (x + 10, y + 10))
        draw.text((x + 10, y + 154), path.parent.name[:32], fill="#111111", font=font)

    sheet.save(OUT, quality=88)
    print(f"Wrote {OUT}")


if __name__ == "__main__":
    main()
