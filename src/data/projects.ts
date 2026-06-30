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
      "A turn-based asymmetric co-op game for Human-Machine Teaming research, where players coordinate through partial information, pins, and character-specific dice.",
    description: [
      "In Summer 2022, I was hired as a game designer by the ARL STRONG lab at CMU to design and develop an asymmetric co-op game for Human-Machine Teaming studies.",
      "Dice Adventure turns that research need into a controllable dungeon system: three characters move through the same space with different vision ranges, dice affordances, and information access.",
      "The prototype creates observable collaboration moments through movement choices, non-verbal pings, dice checks, tutorial levels, and team planning around hidden information."
    ],
    deliverables: "A multiplayer asymmetric co-op game designed for human-machine teaming studies.",
    timeSpan: "6/21/2022 - present",
    team: ["Yutao Huang", "Pheobe Wang", "Jingyuan Fang"],
    impacts: [
      "Researched existing co-op games and board games, then proposed several game concepts to the team.",
      "Communicated with the collaborating research team to understand research needs and transform them into in-game features.",
      "Worked closely with the artist and programmer while helping manage project progress.",
      "Finished the level designs and tutorial stages.",
      "Arranged playtests, collected feedback, and listed existing bugs."
    ],
    caseStudySections: [
      {
        id: "research",
        label: "Research",
        eyebrow: "Research Constraint",
        title: "Designing for observable cooperation",
        body: [
          "The project was built for Human-Machine Teaming studies, so the design could not rely only on fun dungeon encounters. It needed to make uncertainty, communication, and coordination visible enough for researchers to observe.",
          "That pushed the game toward partial information, non-verbal communication, turn-based planning, and mechanics that create clear decision points without forcing players to speak aloud."
        ],
        callout: "Research need: create a playable co-op game where collaboration, uncertainty, and information sharing can be observed through player actions."
      },
      {
        id: "system",
        label: "System",
        eyebrow: "System Design",
        title: "Turning research constraints into mechanics",
        body: [
          "The core system uses three asymmetric characters: dwarf, human, and giant. Each character sees and acts differently, so players need to coordinate based on incomplete but complementary information.",
          "Dice checks convert obstacles into compact strategic problems. Rocks, monsters, and traps each ask for different roll conditions, which lets the same interaction language teach different kinds of risk and planning."
        ],
        variant: "grid",
        media: [
          {
            src: "/images/projects/dice-adventure/gallery-02.webp",
            alt: "Dice Adventure movement state diagram showing move, confirm, cancel, and possible destination states.",
            caption: "Movement UX specification: previewing possible destinations before committing an action."
          },
          {
            src: "/images/projects/dice-adventure/gallery-03.webp",
            alt: "Dice Adventure combat prompt asking the player to roll matching numbers to kill monsters.",
            caption: "Combat rule: matching target numbers turns a monster encounter into a readable dice check."
          },
          {
            src: "/images/projects/dice-adventure/gallery-04.webp",
            alt: "Dice Adventure trap prompt asking the player to roll smaller than 3 to break the trap.",
            caption: "Trap rule: inverted thresholds vary the decision pattern while keeping the UI language consistent."
          }
        ]
      },
      {
        id: "levels",
        label: "Levels",
        eyebrow: "Level and Tutorial Design",
        title: "Teaching cooperation through level progression",
        body: [
          "My level work focused on introducing mechanics gradually: movement, obstacles, monsters, altars, gates, and the collaboration patterns needed to solve them together.",
          "The grid layouts helped the team reason about character starts, visibility, route choices, and encounter pacing before those decisions entered the digital prototype."
        ],
        variant: "wide",
        media: [
          {
            src: "/images/projects/dice-adventure/gallery-01.webp",
            alt: "Dice Adventure level and tutorial layout diagrams with grid maps, character starts, obstacles, and targets.",
            caption: "Level and tutorial planning maps used to stage encounters, routes, and mechanic introduction."
          }
        ]
      },
      {
        id: "prototype",
        label: "Prototype",
        eyebrow: "Prototype Evolution",
        title: "From paper systems to a digital research prototype",
        body: [
          "The design process moved from precedent research and physical board-game thinking into a digital dungeon prototype. That path kept the mechanics concrete: tokens, tiles, dice, roles, and turn states all had to become playable rules.",
          "As the prototype matured, the work shifted toward interaction clarity: showing whose turn it is, how many actions remain, what can be reached, and which dice condition applies to the next obstacle."
        ],
        variant: "split",
        media: [
          {
            src: "/images/projects/dice-adventure/cover.webp",
            alt: "Dice Adventure digital prototype showing the rock dice rule prompt, characters, action icons, hearts, and dungeon grid.",
            caption: "Final prototype UI: turn state, team status, map context, and an in-world dice rule presented at the moment of action."
          }
        ]
      },
      {
        id: "reflection",
        label: "Reflection",
        eyebrow: "Research Fit",
        title: "A game system built to reveal collaboration",
        body: [
          "Dice Adventure does not claim final study results on this page. Its design value is in the structure it creates: players must make plans with partial information, signal intent, manage risk, and adapt to what the team discovers.",
          "For a research prototype, those moments matter. They give collaborators a playable environment where human-human and human-AI teaming questions can be explored through concrete game decisions."
        ],
        callout: "Designed to make communication and uncertainty visible without turning the experience into a survey."
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
