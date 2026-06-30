from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ORIGINALS = ROOT / "assets" / "wix-originals"
PROJECTS = ROOT / "public" / "images" / "projects"

COVERS = {
    "skyweaver": "a04444_de91c2a4d77d4968948f05413e6d4482~mv2.jpg",
    "cavern": "a04444_f1fd333cce2d4ad8a3a50e158ed7276e~mv2.jpg",
    "project-amazon": "a04444_ad821794e0684c959455590ddf14aae4~mv2.png",
    "dice-adventure": "a04444_18aa107ef07a4a47a90f5541ccd68b62~mv2.png",
    "roblearnx": "a04444_79ee364a70dc49cd980157ce22c3d2eb~mv2.png",
    "cyberland-2021": "a04444_d8e6e1fe0988464580ea44034cfc55bb~mv2.png",
    "soul-ferry": "a04444_eb0f69badd1445ce990b294bc48e7c39~mv2.png",
    "remember-me": "a04444_c3def77826ca477fa307f9d924fb62a5~mv2.jpg",
    "bellum": "a04444_d18dfb0991c64881998f7460c7f0e14a~mv2.png",
    "sound-drop": "a04444_eae8fba3411b42e3be042c500151f802~mv2.png",
    "virta": "a04444_0a5ab4b2271d44ccacc364f9b6b7cfdb~mv2.png",
    "wristx": "a04444_09f5d8c3386447769f24cabb740d5229~mv2.png",
    "roominate": "a04444_de83650cec3842e08072600568ce3ce4~mv2.png",
    "in-city-short-distance-ferry-terminal": "a04444_a0f0a2aa49794b6f8fe8f94d1d787aaa~mv2.jpg",
    "affix": "a04444_c39f60da14de48359de3eb8c7cdaa61a~mv2.png",
    "botto": "a04444_9277465d8e2048a4b9136264dc9e3db6~mv2.png",
    "product-design-intern": "a04444_bca7ff7a2a904729864a619379a5e60c~mv2.png",
    "soft-goods-project": "a04444_841a3d65ee474a6f8532ccd227144667~mv2.png",
    "photography": "a04444_e3787158f98240dda85474826e276822~mv2.jpg",
    "woodcrafts": "a04444_1154c15a7d024acc83c5bafc7659ba87~mv2_d_4032_2268_s_2.jpg",
    "metalcrafts": "a04444_0cf06105f6214476b3aeae07f823cea9~mv2_d_4032_2268_s_2.jpg",
}


def make_cover(slug: str, source_name: str) -> None:
    source = ORIGINALS / source_name
    if not source.exists():
        print(f"missing: {slug} <- {source_name}")
        return

    out_dir = PROJECTS / slug
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / "cover.webp"

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        if getattr(image, "is_animated", False):
            image.seek(0)
        image = image.convert("RGB")
        image.thumbnail((1800, 1200))
        image.save(out_path, "WEBP", quality=82, method=6)

    print(f"wrote {out_path.relative_to(ROOT)}")


def main() -> None:
    for slug, source_name in COVERS.items():
        make_cover(slug, source_name)


if __name__ == "__main__":
    main()
