export type ProjectCategory = "game" | "experience" | "archive";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  legacyPath: string;
  role: string;
  summary: string;
  subtitle?: string;
  description?: string[];
  deliverables?: string;
  timeSpan?: string;
  team?: string[];
  impacts?: string[];
  sections?: { title: string; body: string[] }[];
  caseStudySections?: {
    id: string;
    label: string;
    eyebrow?: string;
    title: string;
    body: string[];
    callout?: string;
    variant?: "split" | "wide" | "grid" | "text";
    media?: {
      src: string;
      alt: string;
      caption: string;
    }[];
  }[];
  mediaHint?: string;
  externalLinks?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Skyweaver",
    slug: "skyweaver",
    category: "game",
    legacyPath: "https://www.skyweaver.net/",
    role: "Junior Game Designer / Strategy TCG / PC browser, iOS, Android",
    summary:
      "Contributed to Draft Mode documentation, card pool learning curves, event-system redesign, QA, quest proposals, and cross-discipline feedback for Skyweaver.",
    mediaHint: "WeChat Image_20211210115553.jpg; ss2.jpg",
    externalLinks: [
      { label: "Skyweaver", href: "https://www.skyweaver.net/" },
      { label: "Draft Mode Deep Dive", href: "https://www.skyweaver.net/news/draft-mode-deep-dive" }
    ],
    featured: true
  },
  {
    title: "CAVERN",
    slug: "cavern",
    category: "game",
    legacyPath: "/cavern",
    role: "LBE / Game Design / Level Design",
    subtitle: "Semester Project | Spring 2023",
    summary:
      "An experience designed for a 270-degree CAVE projection system featuring ODS to showcase the system's potential.",
    description: [
      "Project CAVERN is a semester-long ETC project for Steve Audia's C.A.V.E.R.N. system, an immersive projection environment with a 270-degree circular screen and a 20-foot-wide play area.",
      "Our deliverable was a cooperative multiplayer experience that uses the projection system and omnidirectional stereoscopy to create a short, high-impact showcase for local multiplayer interaction, environment design, audio, and user tracking."
    ],
    deliverables: "A co-op multiplayer experience in the CAVERN projection system, along with documentation for hand-off.",
    timeSpan: "1/16/2023 - present",
    team: ["Yutao Huang", "Yancan Wang", "Yigang Wen", "Patrick Cheng", "Pearson Zhu", "Zixuan Zhu"],
    impacts: [
      "Researched location-based games and immersive experiences, then proposed multiple gameplay concepts to the client and team.",
      "Designed and tuned core mechanics, encounters, and level beats for the experience.",
      "Designed on-site playtests and surveys, collected feedback, documented player behavior, and adjusted the design accordingly.",
      "Composed dev logs, presentations, and supported team task tracking."
    ],
    sections: [
      {
        title: "Dev Logs and Trailer",
        body: [
          "The original project page linked weekly development logs and a first-level trailer. This static rebuild keeps the project structure ready for those links and media once final public URLs are confirmed."
        ]
      },
      {
        title: "One-Page Game Design Document",
        body: [
          "The CAVERN page includes design documentation and visual handoff material. The gallery below preserves the first-pass visual assets pulled from the Wix version."
        ]
      }
    ],
    mediaHint: "IMG_8237.jpg",
    featured: true
  },
  {
    title: "Project Amazon",
    slug: "project-amazon",
    category: "game",
    legacyPath: "/projectamazon",
    role: "Semester Project / Game Design / Experience Design",
    summary:
      "A transformational education experience combining projection and VR.",
    mediaHint: "Home Page.png",
    featured: true
  },
  {
    title: "Dice Adventure",
    slug: "dice-adventure",
    category: "game",
    legacyPath: "/diceadventure",
    role: "Game Design / Level Design / Asymmetric Co-op",
    subtitle: "HCII Research | Summer 2022",
    summary:
      "A turn-based asymmetric co-op game for Human-Machine Teaming research.",
    description: [
      "Designed for CMU HCII / ARL STRONG lab research on Human-Machine Teaming.",
      "Players coordinate through partial information, pings, character-specific dice, and tutorial levels."
    ],
    deliverables: "Playable asymmetric co-op research prototype.",
    timeSpan: "6/21/2022 - present",
    team: ["Yutao Huang", "Pheobe Wang", "Jingyuan Fang"],
    impacts: [
      "Translated research needs into playable co-op mechanics.",
      "Designed asymmetric roles, dice checks, and ping communication.",
      "Built level and tutorial structures for staged learning.",
      "Coordinated with artist, programmer, and research collaborators.",
      "Ran playtests, collected feedback, and tracked bugs."
    ],
    caseStudySections: [
      {
        id: "research",
        label: "Research",
        eyebrow: "Research Constraint",
        title: "Research-shaped co-op",
        body: [
          "The game needed to make uncertainty, communication, and planning visible through player actions."
        ],
        callout: "Design prompt: make cooperation observable.",
        variant: "grid",
        media: [
          {
            src: "/images/projects/dice-adventure/research-board.webp",
            alt: "Research board grouping real-time co-op games, information exchange games, resource exchange games, discovery games, and board-game references.",
            caption: "Early research board: sorting co-op game references by collaboration pattern."
          },
          {
            src: "/images/projects/dice-adventure/board-game-research-burgle.webp",
            alt: "Board game research slide for Burgle Bros with notes about cooperation, roles, and shared planning.",
            caption: "Board-game research focused on controllable co-op rules."
          },
          {
            src: "/images/projects/dice-adventure/paper-prototype.webp",
            alt: "Physical paper prototype of Dice Adventure on a table with printed tiles, cards, and markers.",
            caption: "Paper prototype before the digital build."
          }
        ]
      },
      {
        id: "system",
        label: "System",
        eyebrow: "System Design",
        title: "Mechanics as evidence",
        body: [
          "Different roles, visibility, pings, and dice rules create small but readable collaboration moments."
        ],
        variant: "grid",
        media: [
          {
            src: "/images/projects/dice-adventure/final-system-rules.webp",
            alt: "Final concept rule sheet showing character dice, vision ranges, encounters, and obstacle rules for Dice Adventure.",
            caption: "Final concept: characters, dice, vision, and encounter rules."
          },
          {
            src: "/images/projects/dice-adventure/character-vision.webp",
            alt: "Character vision diagram showing dwarf, human, and giant with different visible map ranges.",
            caption: "Character height changes how far players can see."
          },
          {
            src: "/images/projects/dice-adventure/pinning-system.webp",
            alt: "Pinning system diagram with danger, on my way, assist me, and unknown signals.",
            caption: "Non-verbal pins for planning without voice."
          },
          {
            src: "/images/projects/dice-adventure/gallery-02.webp",
            alt: "Dice Adventure movement state diagram showing move, confirm, cancel, and possible destination states.",
            caption: "Movement preview and confirmation states."
          },
          {
            src: "/images/projects/dice-adventure/gallery-03.webp",
            alt: "Dice Adventure combat prompt asking the player to roll matching numbers to kill monsters.",
            caption: "Combat asks for matching dice values."
          },
          {
            src: "/images/projects/dice-adventure/gallery-04.webp",
            alt: "Dice Adventure trap prompt asking the player to roll smaller than 3 to break the trap.",
            caption: "Trap interaction changes the dice condition."
          }
        ]
      },
      {
        id: "levels",
        label: "Levels",
        eyebrow: "Level and Tutorial Design",
        title: "Levels teach the rules",
        body: [
          "Grid maps staged movement, obstacles, altars, gates, and teamwork in a controlled progression."
        ],
        variant: "wide",
        media: [
          {
            src: "/images/projects/dice-adventure/level-progression.webp",
            alt: "Level progression board with tutorial maps and playtest layouts for Dice Adventure.",
            caption: "Tutorial progression and playtest maps."
          },
          {
            src: "/images/projects/dice-adventure/gallery-01.webp",
            alt: "Dice Adventure level and tutorial layout diagrams with grid maps, character starts, obstacles, and targets.",
            caption: "Tutorial and level planning maps."
          }
        ]
      },
      {
        id: "prototype",
        label: "Prototype",
        eyebrow: "Prototype Evolution",
        title: "Prototype direction",
        body: [
          "The digital build kept the board-game clarity: turn state, team status, reachable spaces, and dice prompts."
        ],
        variant: "split",
        media: [
          {
            src: "/images/projects/dice-adventure/movement-spec.webp",
            alt: "Movement specification sheet showing moving, confirming, canceling, and possible destination states.",
            caption: "Interaction spec for movement decisions."
          },
          {
            src: "/images/projects/dice-adventure/cover.webp",
            alt: "Dice Adventure digital prototype showing the rock dice rule prompt, characters, action icons, hearts, and dungeon grid.",
            caption: "Final prototype UI with turn state, team status, and dice prompt."
          }
        ]
      },
      {
        id: "reflection",
        label: "Reflection",
        eyebrow: "Research Fit",
        title: "Research fit",
        body: [
          "The design creates moments where players plan, signal intent, manage risk, and adapt to hidden information."
        ],
        callout: "Playable first, research-readable second."
      }
    ],
    mediaHint: "Background.png"
  },
  {
    title: "RoblearnX",
    slug: "roblearnx",
    category: "game",
    legacyPath: "/roblearnx",
    role: "Educational Game Design / Research Project",
    summary:
      "Research on educational games in Roblox and learning assessment.",
    mediaHint: "image 38.png"
  },
  {
    title: "Cyberland 2021",
    slug: "cyberland-2021",
    category: "game",
    legacyPath: "/cyberland2021",
    role: "Game Design / Level Design / Body Tracking",
    summary:
      "A co-op asymmetric platform game using body tracking to push players into playful poses.",
    mediaHint: "Cover.png"
  },
  {
    title: "Soul Ferry",
    slug: "soul-ferry",
    category: "game",
    legacyPath: "/soulferry",
    role: "Game Design / Experience Design / Virtual Reality",
    summary:
      "A VR experience about the Netherland, using indirect control to guide the player's experience.",
    mediaHint: "Screenshot 2021-10-18 141733.png"
  },
  {
    title: "Remember Me",
    slug: "remember-me",
    category: "game",
    legacyPath: "/rememberme",
    role: "Game Design / Augmented Reality",
    summary:
      "A story-based AR experience about Alzheimer and memory loss.",
    mediaHint: "Remember Me_Poster.jpg"
  },
  {
    title: "Bellum",
    slug: "bellum",
    category: "game",
    legacyPath: "/bellum",
    role: "Game Design",
    summary:
      "A story-based strategy and puzzle game about fake news, misinformation, and polarization.",
    mediaHint: "WeChat Screenshot_20201229235442.png"
  },
  {
    title: "Sound Drop",
    slug: "sound-drop",
    category: "experience",
    legacyPath: "/droppingsound3d",
    role: "Research Project / Experience Design / Hand Tracking",
    summary:
      "An immersive space for editing sound in a more interactive and intuitive way.",
    mediaHint: "WeChat Screenshot_20201108141031_edited.jpg"
  },
  {
    title: "VirtA",
    slug: "virta",
    category: "experience",
    legacyPath: "/virta",
    role: "Individual Project / Experience Design / Eye Tracking",
    summary:
      "An interactive program to visualize interaction and attention in online conferences.",
    mediaHint: "WeChat Screenshot_20201226202834_edited.jpg"
  },
  {
    title: "WristX",
    slug: "wristx",
    category: "experience",
    legacyPath: "/wristx",
    role: "Individual Project / System Design / 3D Modeling",
    summary:
      "A system and product concept assisting rehabilitation for people with Carpel-tunnel Syndrome.",
    mediaHint: "11112131_edited.jpg"
  },
  {
    title: "Roominate",
    slug: "roominate",
    category: "experience",
    legacyPath: "/roominate",
    role: "Experience Design / System Design / Internet of Things",
    summary:
      "A co-living system for tracking chores and managing shared space more efficiently."
  },
  {
    title: "In-City Short-distance Ferry Terminal",
    slug: "in-city-short-distance-ferry-terminal",
    category: "archive",
    legacyPath: "/drydock",
    role: "Architecture / Team Project",
    summary:
      "A three-person architecture project for abandoned dry dock No.4 in south Boston, designed as a self-sufficient, eco-friendly, educational site.",
    mediaHint: "22.jpg"
  },
  {
    title: "AFFIX",
    slug: "affix",
    category: "archive",
    legacyPath: "/affix",
    role: "System Design / Furniture",
    summary:
      "A two-person system design project creating a new approach to easy-to-assemble furniture.",
    mediaHint: "_edited.png"
  },
  {
    title: "BOTTO",
    slug: "botto",
    category: "archive",
    legacyPath: "/botto",
    role: "Product Design",
    summary:
      "An independent product for a better outdoor workout experience.",
    mediaHint: "pieces_71.png"
  },
  {
    title: "Product Design Intern",
    slug: "product-design-intern",
    category: "archive",
    legacyPath: "/internprojects",
    role: "Industrial Design Internship",
    summary:
      "Renderings and product designs from a Huidu Design internship in Summer 2019.",
    mediaHint: "%E5%9C%BA%E6%99%AF.jpg"
  },
  {
    title: "Soft Goods Project",
    slug: "soft-goods-project",
    category: "archive",
    legacyPath: "/softgood",
    role: "Soft Goods Design",
    summary:
      "A vest transformable into a tote bag.",
    mediaHint: "IMG_4694.jpg"
  },
  {
    title: "Photography",
    slug: "photography",
    category: "archive",
    legacyPath: "/photography",
    role: "Photography",
    summary:
      "A collection of photos from the original portfolio archive.",
    mediaHint: "IMG_2618_polarr.jpg"
  },
  {
    title: "Woodcrafts",
    slug: "woodcrafts",
    category: "archive",
    legacyPath: "/wood",
    role: "Craft",
    summary: "A collection of wood works.",
    mediaHint: "_edited.jpg"
  },
  {
    title: "Metalcrafts",
    slug: "metalcrafts",
    category: "archive",
    legacyPath: "/metal",
    role: "Craft",
    summary: "A collection of metal works.",
    mediaHint: "IMG_3730.jpg"
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
