from __future__ import annotations

import csv
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / "assets" / "wix-originals"
MANIFEST = ORIGINALS / "wix-assets-manifest.csv"

ROUTES = [
    "home",
    "cavern",
    "projectamazon",
    "diceadventure",
    "roblearnx",
    "cyberland2021",
    "soulferry",
    "rememberme",
    "bellum",
    "droppingsound3d",
    "virta",
    "wristx",
    "roominate",
    "drydock",
    "affix",
    "botto",
    "internprojects",
    "softgood",
    "photography",
    "wood",
    "metal",
]


def row_matches_route(row: dict[str, str], route: str) -> bool:
    pages = row.get("SourcePages", "")
    if route == "home":
        return pages.strip() == "https://www.taogames.online/"
    return f"taogames.online/{route}" in pages


def main() -> None:
    with MANIFEST.open("r", encoding="utf-8-sig", newline="") as handle:
        rows = list(csv.DictReader(handle))

    for route in ROUTES:
        items = []
        for row in rows:
            if row.get("Status") == "failed" or not row_matches_route(row, route):
                continue
            path = ORIGINALS / row["FileName"]
            if not path.exists():
                continue
            try:
                with Image.open(path) as image:
                    width, height = image.size
            except Exception:
                continue
            items.append((width * height, width, height, path.stat().st_size, row["FileName"]))

        print(f"--- {route}")
        for _, width, height, size, name in sorted(items, reverse=True)[:10]:
            print(f"{name} {width}x{height} {size // 1024}KB")


if __name__ == "__main__":
    main()
