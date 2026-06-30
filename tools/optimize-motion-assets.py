from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageSequence


ROOT = Path(__file__).resolve().parents[1]

MOTION_ASSETS = {
    "public/images/projects/botto/prototype-loop.gif": "public/images/projects/botto/prototype-loop.webp",
    "public/images/projects/remember-me/ar-loop.gif": "public/images/projects/remember-me/ar-loop.webp",
    "public/images/projects/roominate/interaction-01.gif": "public/images/projects/roominate/interaction-01.webp",
    "public/images/projects/roominate/interaction-02.gif": "public/images/projects/roominate/interaction-02.webp",
    "public/images/projects/roominate/interaction-03.gif": "public/images/projects/roominate/interaction-03.webp",
    "public/images/projects/roominate/interaction-04.gif": "public/images/projects/roominate/interaction-04.webp",
    "public/images/projects/roominate/interaction-05.gif": "public/images/projects/roominate/interaction-05.webp",
    "public/images/projects/roominate/interaction-06.gif": "public/images/projects/roominate/interaction-06.webp",
    "public/images/projects/soul-ferry/vr-loop.gif": "public/images/projects/soul-ferry/vr-loop.webp",
}


def convert_gif_to_webp(source: Path, output: Path) -> tuple[int, int, int]:
    with Image.open(source) as image:
        frames = []
        durations = []
        for frame in ImageSequence.Iterator(image):
            frames.append(frame.convert("RGBA"))
            durations.append(frame.info.get("duration", image.info.get("duration", 80)))

        output.parent.mkdir(parents=True, exist_ok=True)
        frames[0].save(
            output,
            save_all=True,
            append_images=frames[1:],
            duration=durations,
            loop=0,
            format="WEBP",
            quality=72,
            method=4,
        )

    return source.stat().st_size, output.stat().st_size, len(frames)


def main() -> None:
    total_before = 0
    total_after = 0
    for source_name, output_name in MOTION_ASSETS.items():
        source = ROOT / source_name
        output = ROOT / output_name
        if not source.exists():
            raise FileNotFoundError(source)

        before, after, frames = convert_gif_to_webp(source, output)
        total_before += before
        total_after += after
        print(f"{output_name}: {before} -> {after} bytes, {frames} frames")

    saved = total_before - total_after
    print(f"total: {total_before} -> {total_after} bytes, saved {saved} bytes")


if __name__ == "__main__":
    main()
