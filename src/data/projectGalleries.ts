const slugs = [
  "affix",
  "bellum",
  "botto",
  "cavern",
  "cyberland-2021",
  "dice-adventure",
  "in-city-short-distance-ferry-terminal",
  "metalcrafts",
  "photography",
  "product-design-intern",
  "project-amazon",
  "remember-me",
  "roblearnx",
  "roominate",
  "soft-goods-project",
  "soul-ferry",
  "sound-drop",
  "virta",
  "woodcrafts",
  "wristx"
];

export const projectGalleries: Record<string, string[]> = Object.fromEntries(
  slugs.map((slug) => [
    slug,
    [1, 2, 3, 4].map((index) => `/images/projects/${slug}/gallery-${String(index).padStart(2, "0")}.webp`)
  ])
);
