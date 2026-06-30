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
  visualSections?: {
    id: string;
    label: string;
    title: string;
    body?: string;
    media: {
      src: string;
      alt: string;
      caption?: string;
      span?: "wide" | "tall";
    }[];
  }[];
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
    visualSections: [
      {
        id: "space",
        label: "Space",
        title: "CAVE projection experience",
        body: "A short co-op experience built around the 270-degree projection room and on-site play.",
        media: [
          {
            src: "/images/projects/cavern/cave-playtest.webp",
            alt: "Players standing inside the CAVERN projection environment.",
            caption: "CAVERN playtest space.",
            span: "wide"
          }
        ]
      },
      {
        id: "design",
        label: "Design",
        title: "One-page design handoff",
        body: "The old Wix page included a one-page design document and handoff material for the location-based experience.",
        media: [
          {
            src: "/images/projects/cavern/design-document.webp",
            alt: "CAVERN design document board with gameplay and system notes.",
            caption: "Design document.",
            span: "wide"
          },
          {
            src: "/images/projects/cavern/cover.webp",
            alt: "CAVERN project cover image.",
            caption: "Project cover."
          }
        ]
      },
      {
        id: "trailer",
        label: "Trailer",
        title: "Trailer and dev-log slot",
        body: "The original page referenced weekly dev logs and a first-level trailer. No confirmed public URL was recovered from the Wix scan, so this section is kept as the place to reconnect those links if they are available.",
        media: [
          {
            src: "/images/projects/cavern/cave-playtest.webp",
            alt: "Players standing inside the CAVERN projection environment.",
            caption: "Public trailer/dev-log link not yet confirmed.",
            span: "wide"
          }
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
    visualSections: [
      {
        id: "framing",
        label: "Framing",
        title: "Transformational travel learning",
        body: "Project Amazon combined projection, VR, and cultural storytelling into an education experience.",
        media: [
          {
            src: "/images/projects/project-amazon/title-screen.webp",
            alt: "Project Amazon title screen from the original Wix page.",
            caption: "Original title screen.",
            span: "wide"
          },
          {
            src: "/images/projects/project-amazon/theme-summary.webp",
            alt: "Project Amazon theme summary board with travel and study abroad references.",
            caption: "Theme summary."
          },
          {
            src: "/images/projects/project-amazon/river-context.webp",
            alt: "River landscape context image for Project Amazon.",
            caption: "River context."
          }
        ]
      },
      {
        id: "experience",
        label: "Experience",
        title: "Projection and VR setup",
        body: "The old page used boards and diagrams to explain the spatial setup and player-facing experience.",
        media: [
          {
            src: "/images/projects/project-amazon/projection-concept.webp",
            alt: "Projection and VR concept diagram for Project Amazon.",
            caption: "Projection concept."
          },
          {
            src: "/images/projects/project-amazon/layout-board.webp",
            alt: "Project Amazon layout board with interface, projection, and screen references.",
            caption: "Layout board.",
            span: "wide"
          },
          {
            src: "/images/projects/project-amazon/screen-flow.webp",
            alt: "Project Amazon screen flow and interface storyboard.",
            caption: "Screen flow."
          }
        ]
      },
      {
        id: "route",
        label: "Route",
        title: "Map and path",
        media: [
          {
            src: "/images/projects/project-amazon/route-map.webp",
            alt: "Route map from Project Amazon.",
            caption: "Route map."
          },
          {
            src: "/images/projects/project-amazon/tree-route-sketch.webp",
            alt: "Tree route sketch and map diagram for Project Amazon.",
            caption: "Path sketch."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "research",
        label: "Research",
        title: "Research and references",
        body: "Turn-based and board-game references helped turn cooperation, uncertainty, and role asymmetry into readable mechanics.",
        media: [
          {
            src: "/images/projects/dice-adventure/research-board.webp",
            alt: "Research board grouping real-time co-op games, information exchange games, resource exchange games, discovery games, and board-game references.",
            caption: "Reference map by collaboration pattern.",
            span: "wide"
          },
          {
            src: "/images/projects/dice-adventure/board-game-research-burgle.webp",
            alt: "Board game research slide for Burgle Bros with notes about cooperation, roles, and shared planning.",
            caption: "Board-game research notes."
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
        title: "Rules and communication",
        body: "Character-specific dice, different vision ranges, and pins created a small language for planning without full information.",
        media: [
          {
            src: "/images/projects/dice-adventure/final-system-rules.webp",
            alt: "Final concept rule sheet showing character dice, vision ranges, encounters, and obstacle rules for Dice Adventure.",
            caption: "Final concept sheet.",
            span: "wide"
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
        title: "Level progression",
        body: "Tutorial maps staged movement, obstacles, altars, gates, and teamwork in a controlled progression.",
        media: [
          {
            src: "/images/projects/dice-adventure/level-progression.webp",
            alt: "Level progression board with tutorial maps and playtest layouts for Dice Adventure.",
            caption: "Tutorial progression and playtest maps.",
            span: "wide"
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
        title: "Digital prototype",
        body: "The build kept the board-game clarity: turn state, team status, reachable spaces, and dice prompts.",
        media: [
          {
            src: "/images/projects/dice-adventure/movement-spec.webp",
            alt: "Movement specification sheet showing moving, confirming, canceling, and possible destination states.",
            caption: "Interaction spec for movement decisions."
          },
          {
            src: "/images/projects/dice-adventure/cover.webp",
            alt: "Dice Adventure digital prototype showing the rock dice rule prompt, characters, action icons, hearts, and dungeon grid.",
            caption: "Prototype UI with dice prompt.",
            span: "wide"
          },
          {
            src: "/images/projects/dice-adventure/gallery-02.webp",
            alt: "Dice Adventure movement state diagram showing move, confirm, cancel, and possible destination states.",
            caption: "Movement preview states."
          },
          {
            src: "/images/projects/dice-adventure/gallery-03.webp",
            alt: "Dice Adventure combat prompt asking the player to roll matching numbers to kill monsters.",
            caption: "Combat dice prompt."
          },
          {
            src: "/images/projects/dice-adventure/gallery-04.webp",
            alt: "Dice Adventure trap prompt asking the player to roll smaller than 3 to break the trap.",
            caption: "Trap dice prompt."
          }
        ]
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
    visualSections: [
      {
        id: "prototype",
        label: "Prototype",
        title: "Roblox learning assessment",
        body: "A compact research page around educational gameplay and assessment inside Roblox.",
        media: [
          {
            src: "/images/projects/roblearnx/roblox-assessment.webp",
            alt: "RoblearnX Roblox assessment prototype screenshots.",
            caption: "Roblox assessment prototype.",
            span: "wide"
          },
          {
            src: "/images/projects/roblearnx/cover.webp",
            alt: "RoblearnX cover image.",
            caption: "Project cover."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "concept",
        label: "Concept",
        title: "Body-tracking platform play",
        body: "Cyberland 2021 turns full-body poses into co-op platforming actions on a projected stage.",
        media: [
          {
            src: "/images/projects/cyberland-2021/title-screen.webp",
            alt: "Cyberland 2021 title screen from the original project page.",
            caption: "Original title screen.",
            span: "wide"
          },
          {
            src: "/images/projects/cyberland-2021/gameplay-sideview.webp",
            alt: "Cyberland 2021 side-view gameplay screen with characters and obstacles.",
            caption: "Side-view platform stage."
          },
          {
            src: "/images/projects/cyberland-2021/playtest-stage-01.webp",
            alt: "Player using body tracking in front of the Cyberland projection.",
            caption: "Projection playtest."
          }
        ]
      },
      {
        id: "body",
        label: "Body",
        title: "Pose as controller",
        body: "The page used diagrams to explain how player posture becomes level traversal.",
        media: [
          {
            src: "/images/projects/cyberland-2021/body-tracking-diagram.webp",
            alt: "Cyberland body tracking control diagram.",
            caption: "Body tracking control."
          },
          {
            src: "/images/projects/cyberland-2021/gesture-level-diagram.webp",
            alt: "Cyberland gesture and level interaction diagram.",
            caption: "Gesture interaction."
          },
          {
            src: "/images/projects/cyberland-2021/pose-obstacle-diagram.webp",
            alt: "Cyberland pose and obstacle diagram.",
            caption: "Pose obstacle."
          },
          {
            src: "/images/projects/cyberland-2021/interaction-diagram.webp",
            alt: "Cyberland body interaction diagram.",
            caption: "Interaction beat."
          }
        ]
      },
      {
        id: "stage",
        label: "Stage",
        title: "Level and playtest",
        media: [
          {
            src: "/images/projects/cyberland-2021/level-design-diagram.webp",
            alt: "Cyberland level design diagram.",
            caption: "Level design diagram.",
            span: "wide"
          },
          {
            src: "/images/projects/cyberland-2021/playtest-stage-02.webp",
            alt: "Cyberland 2021 playtest in a dark projection room.",
            caption: "Projection-room playtest."
          },
          {
            src: "/images/projects/cyberland-2021/playtest-stage-03.webp",
            alt: "Cyberland player silhouette interacting with the projection.",
            caption: "Player silhouette."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "concept",
        label: "Concept",
        title: "A ferry through the underworld",
        body: "The old page framed the experience through mood paintings, a boat journey, lanterns, and spirit-like wayfinding.",
        media: [
          {
            src: "/images/projects/soul-ferry/final-title.webp",
            alt: "Soul Ferry final title image.",
            caption: "Final title.",
            span: "wide"
          },
          {
            src: "/images/projects/soul-ferry/concept-character.webp",
            alt: "Soul Ferry concept art with a character sitting in a boat.",
            caption: "Character mood."
          },
          {
            src: "/images/projects/soul-ferry/blue-lotus-concept.webp",
            alt: "Soul Ferry blue lotus concept art.",
            caption: "Spirit visual."
          },
          {
            src: "/images/projects/soul-ferry/environment-concept.webp",
            alt: "Soul Ferry dark river environment concept.",
            caption: "Environment mood."
          }
        ]
      },
      {
        id: "interaction",
        label: "Interaction",
        title: "Indirect rowing control",
        body: "The interaction diagrams show how the player steers the ferry through motion and attention rather than direct menu input.",
        media: [
          {
            src: "/images/projects/soul-ferry/row-interaction-01.webp",
            alt: "Soul Ferry rowing interaction diagram.",
            caption: "Rowing control.",
            span: "wide"
          },
          {
            src: "/images/projects/soul-ferry/row-interaction-02.webp",
            alt: "Soul Ferry two-step rowing interaction diagram.",
            caption: "Interaction steps."
          },
          {
            src: "/images/projects/soul-ferry/boat-model.webp",
            alt: "Soul Ferry boat model.",
            caption: "Boat model."
          },
          {
            src: "/images/projects/soul-ferry/lantern-model.webp",
            alt: "Soul Ferry lantern model.",
            caption: "Lantern prop."
          }
        ]
      },
      {
        id: "system",
        label: "System",
        title: "Route and encounter structure",
        body: "Level maps and node diagrams kept the atmospheric VR piece organized as a navigable journey.",
        media: [
          {
            src: "/images/projects/soul-ferry/level-diagram.webp",
            alt: "Soul Ferry level layout diagram.",
            caption: "Level layout."
          },
          {
            src: "/images/projects/soul-ferry/node-map-01.webp",
            alt: "Soul Ferry node map in the editor.",
            caption: "Node map.",
            span: "wide"
          },
          {
            src: "/images/projects/soul-ferry/node-map-02.webp",
            alt: "Soul Ferry refined node map.",
            caption: "Flow refinement."
          }
        ]
      },
      {
        id: "final-video",
        label: "Final Video",
        title: "Recovered VR motion",
        body: "The recovered GIF preserves the moving demo area from the original Wix page; no separate public video URL was found in the live scan.",
        media: [
          {
            src: "/images/projects/soul-ferry/vr-loop.webp",
            alt: "Animated Soul Ferry VR interaction loop from the original Wix page.",
            caption: "Original page motion capture.",
            span: "wide"
          },
          {
            src: "/images/projects/soul-ferry/final-scene.webp",
            alt: "Soul Ferry final dark river scene.",
            caption: "Final scene."
          },
          {
            src: "/images/projects/soul-ferry/opening-boat.webp",
            alt: "Soul Ferry opening boat view.",
            caption: "Opening view."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "brainstorming",
        label: "Brainstorming",
        title: "Story objects and memory cues",
        body: "The old page began with sketches and props that framed memory loss through everyday objects.",
        media: [
          {
            src: "/images/projects/remember-me/brainstorming-sketch.webp",
            alt: "Remember Me brainstorming sketch with a character and memory props.",
            caption: "Early story sketch.",
            span: "wide"
          },
          {
            src: "/images/projects/remember-me/poster-book.webp",
            alt: "Remember Me notebook image with a yellow note.",
            caption: "Memory notebook."
          },
          {
            src: "/images/projects/remember-me/sketch-memory-01.webp",
            alt: "Remember Me hand-drawn memory scene.",
            caption: "Scene note."
          }
        ]
      },
      {
        id: "mechanics",
        label: "Mechanics",
        title: "AR interaction pieces",
        body: "The interaction was built around tangible objects that could trigger or frame memory fragments.",
        media: [
          {
            src: "/images/projects/remember-me/workshop-scene.webp",
            alt: "Remember Me workshop scene with props on a table.",
            caption: "Workshop scene.",
            span: "wide"
          },
          {
            src: "/images/projects/remember-me/remote-model.webp",
            alt: "Remember Me remote control 3D prop model.",
            caption: "Remote prop."
          },
          {
            src: "/images/projects/remember-me/popsicle-model.webp",
            alt: "Remember Me popsicle prop 3D model.",
            caption: "Object prop."
          }
        ]
      },
      {
        id: "models",
        label: "Models",
        title: "Characters and AR scenes",
        body: "The Wix page moved through model tests and character staging before the final AR loop.",
        media: [
          {
            src: "/images/projects/remember-me/character-screen-01.webp",
            alt: "Remember Me character model placed between sketch boards.",
            caption: "Character model."
          },
          {
            src: "/images/projects/remember-me/storyboard-01.webp",
            alt: "Remember Me storyboard sketch sheet.",
            caption: "Storyboard."
          },
          {
            src: "/images/projects/remember-me/character-screen-02.webp",
            alt: "Remember Me character model near sketch references.",
            caption: "Model refinement."
          }
        ]
      },
      {
        id: "final-video",
        label: "Final Video",
        title: "Final AR loop",
        body: "The recovered GIF preserves the motion slot from the original page; no separate public video URL has been confirmed yet.",
        media: [
          {
            src: "/images/projects/remember-me/ar-loop.webp",
            alt: "Animated Remember Me AR interaction loop from the original Wix page.",
            caption: "Recovered AR motion asset.",
            span: "wide"
          },
          {
            src: "/images/projects/remember-me/final-title.webp",
            alt: "Remember Me final title image.",
            caption: "Final title."
          },
          {
            src: "/images/projects/remember-me/cover.webp",
            alt: "Remember Me cover image.",
            caption: "Project cover."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "premise",
        label: "Premise",
        title: "Misinformation as strategy",
        body: "Bellum framed fake news and polarization as a playable system of influence, posts, places, and consequences.",
        media: [
          {
            src: "/images/projects/bellum/system-overview.webp",
            alt: "Bellum overview board showing multiple UI and map screens.",
            caption: "Original system overview.",
            span: "wide"
          },
          {
            src: "/images/projects/bellum/dialogue-scene.webp",
            alt: "Bellum dialogue scene with two characters.",
            caption: "Dialogue scene."
          },
          {
            src: "/images/projects/bellum/rally-scene.webp",
            alt: "Bellum rally scene with speaker and crowd.",
            caption: "Public rally scene."
          }
        ]
      },
      {
        id: "system",
        label: "System",
        title: "Posts, places, influence",
        body: "Screens from the old page show the game moving between social media, map choices, and street locations.",
        media: [
          {
            src: "/images/projects/bellum/social-feed.webp",
            alt: "Bellum social feed interface.",
            caption: "Social feed interface."
          },
          {
            src: "/images/projects/bellum/strategy-map.webp",
            alt: "Bellum strategy map with colored nodes and UI panels.",
            caption: "Strategy map."
          },
          {
            src: "/images/projects/bellum/street-scene.webp",
            alt: "Bellum street scene with storefront and crowd.",
            caption: "Street location."
          },
          {
            src: "/images/projects/bellum/shop-scene.webp",
            alt: "Bellum gun shop scene from the original page.",
            caption: "Location scene."
          }
        ]
      },
      {
        id: "feedback",
        label: "Feedback",
        title: "Action feedback",
        media: [
          {
            src: "/images/projects/bellum/plant-success.webp",
            alt: "Bellum plant successful feedback screen.",
            caption: "Successful action."
          },
          {
            src: "/images/projects/bellum/plant-failure.webp",
            alt: "Bellum plant unsuccessful feedback screen.",
            caption: "Unsuccessful action."
          },
          {
            src: "/images/projects/bellum/character-01.webp",
            alt: "Bellum pixel portrait character.",
            caption: "Character portrait."
          },
          {
            src: "/images/projects/bellum/character-02.webp",
            alt: "Bellum pixel portrait character.",
            caption: "Character portrait."
          },
          {
            src: "/images/projects/bellum/character-03.webp",
            alt: "Bellum pixel portrait character.",
            caption: "Character portrait."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "prototype",
        label: "Prototype",
        title: "Spatial sound editing",
        body: "Sound Drop explores hand-tracking interaction for editing sound in an immersive space.",
        media: [
          {
            src: "/images/projects/sound-drop/hero-interface.webp",
            alt: "Sound Drop immersive interface hero image.",
            caption: "Interactive sound space.",
            span: "wide"
          },
          {
            src: "/images/projects/sound-drop/process-board.webp",
            alt: "Sound Drop process and interface board.",
            caption: "Process board."
          },
          {
            src: "/images/projects/sound-drop/concept-board.webp",
            alt: "Sound Drop concept board.",
            caption: "Concept board."
          }
        ]
      },
      {
        id: "research",
        label: "Research",
        title: "Experiment and analysis",
        media: [
          {
            src: "/images/projects/sound-drop/system-sketch.webp",
            alt: "Sound Drop system sketch.",
            caption: "System sketch."
          },
          {
            src: "/images/projects/sound-drop/annotation-grid.webp",
            alt: "Sound Drop annotation image grid.",
            caption: "Annotation grid."
          },
          {
            src: "/images/projects/sound-drop/cluster-comparison.webp",
            alt: "Sound Drop cluster comparison board.",
            caption: "Cluster comparison.",
            span: "wide"
          },
          {
            src: "/images/projects/sound-drop/accuracy-chart.webp",
            alt: "Sound Drop accuracy chart.",
            caption: "Accuracy chart."
          },
          {
            src: "/images/projects/sound-drop/accuracy-over-time.webp",
            alt: "Sound Drop accuracy over time chart.",
            caption: "Accuracy over time."
          },
          {
            src: "/images/projects/sound-drop/user-test.webp",
            alt: "User testing Sound Drop at a computer.",
            caption: "User test."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "context",
        label: "Context",
        title: "Attention in online meetings",
        body: "VirtA visualizes interaction and attention patterns in remote conference settings.",
        media: [
          {
            src: "/images/projects/virta/meeting-context.webp",
            alt: "VirtA meeting context board.",
            caption: "Meeting context.",
            span: "wide"
          },
          {
            src: "/images/projects/virta/global-context.webp",
            alt: "VirtA global online meeting context map.",
            caption: "Remote context."
          },
          {
            src: "/images/projects/virta/zoom-data.webp",
            alt: "VirtA Zoom daily downloads data chart.",
            caption: "Zoom context data."
          }
        ]
      },
      {
        id: "prototype",
        label: "Prototype",
        title: "Attention visualization",
        media: [
          {
            src: "/images/projects/virta/attention-points-01.webp",
            alt: "VirtA attention point visualization.",
            caption: "Attention points."
          },
          {
            src: "/images/projects/virta/attention-points-02.webp",
            alt: "VirtA clustered attention visualization.",
            caption: "Clustered view.",
            span: "wide"
          },
          {
            src: "/images/projects/virta/system-diagram.webp",
            alt: "VirtA system diagram.",
            caption: "System diagram."
          },
          {
            src: "/images/projects/virta/ui-components.webp",
            alt: "VirtA interface components.",
            caption: "UI components."
          }
        ]
      },
      {
        id: "process",
        label: "Process",
        title: "Sketches and implementation",
        media: [
          {
            src: "/images/projects/virta/sketch-board.webp",
            alt: "VirtA sketch board.",
            caption: "Sketch board."
          },
          {
            src: "/images/projects/virta/prototype-code-view.webp",
            alt: "VirtA prototype code and preview view.",
            caption: "Prototype view."
          },
          {
            src: "/images/projects/virta/storyboard.webp",
            alt: "VirtA storyboard.",
            caption: "Storyboard."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "system",
        label: "System",
        title: "Wrist rehabilitation system",
        body: "WristX combines a wearable device, app interface, and rehabilitation exercise flow.",
        media: [
          {
            src: "/images/projects/wristx/hero-system.webp",
            alt: "WristX system hero board with app and hand device.",
            caption: "System overview.",
            span: "wide"
          },
          {
            src: "/images/projects/wristx/final-design-board.webp",
            alt: "WristX final design board.",
            caption: "Final design."
          },
          {
            src: "/images/projects/wristx/device-render.webp",
            alt: "WristX device render.",
            caption: "Device render."
          }
        ]
      },
      {
        id: "research",
        label: "Research",
        title: "Physical rehabilitation",
        media: [
          {
            src: "/images/projects/wristx/physical-rehabilitation.webp",
            alt: "WristX physical rehabilitation exercise board.",
            caption: "Exercise set."
          },
          {
            src: "/images/projects/wristx/rehab-analysis.webp",
            alt: "WristX rehabilitation analysis board.",
            caption: "Rehab analysis."
          },
          {
            src: "/images/projects/wristx/user-research.webp",
            alt: "WristX user research board.",
            caption: "User research.",
            span: "wide"
          }
        ]
      },
      {
        id: "process",
        label: "Process",
        title: "Flow and form",
        media: [
          {
            src: "/images/projects/wristx/user-flow.webp",
            alt: "WristX app user flow board.",
            caption: "User flow."
          },
          {
            src: "/images/projects/wristx/sketch-board.webp",
            alt: "WristX sketch board.",
            caption: "Sketch board."
          },
          {
            src: "/images/projects/wristx/final-spec.webp",
            alt: "WristX final specification board.",
            caption: "Final spec."
          }
        ]
      }
    ],
    mediaHint: "11112131_edited.jpg"
  },
  {
    title: "Roominate",
    slug: "roominate",
    category: "experience",
    legacyPath: "/roominate",
    role: "Experience Design / System Design / Internet of Things",
    summary:
      "A co-living system for tracking chores and managing shared space more efficiently.",
    visualSections: [
      {
        id: "research",
        label: "Research",
        title: "Shared-home research",
        body: "The original page opened with research notes, stakeholders, and observed friction in shared living.",
        media: [
          {
            src: "/images/projects/roominate/research-notes.webp",
            alt: "Roominate research notes photographed on paper.",
            caption: "Research notes."
          },
          {
            src: "/images/projects/roominate/stakeholder-map.webp",
            alt: "Roominate stakeholder map for shared-home coordination.",
            caption: "Stakeholder map.",
            span: "wide"
          },
          {
            src: "/images/projects/roominate/post-it-synthesis.webp",
            alt: "Roominate post-it synthesis board.",
            caption: "Synthesis board."
          }
        ]
      },
      {
        id: "system",
        label: "System",
        title: "Service and device system",
        body: "Roominate connects chores, shared-space awareness, and lightweight household coordination.",
        media: [
          {
            src: "/images/projects/roominate/concept-scenario.webp",
            alt: "Roominate concept scenario showing a shared room and system annotations.",
            caption: "Scenario sketch.",
            span: "wide"
          },
          {
            src: "/images/projects/roominate/user-flow.webp",
            alt: "Roominate mobile user-flow board.",
            caption: "User flow."
          },
          {
            src: "/images/projects/roominate/data-chart.webp",
            alt: "Roominate data comparison chart.",
            caption: "Data comparison."
          },
          {
            src: "/images/projects/roominate/system-map.webp",
            alt: "Roominate system map.",
            caption: "System map."
          }
        ]
      },
      {
        id: "interface",
        label: "Interface",
        title: "App screens and physical cue",
        body: "The service moved between a phone interface and a small room object that could mark shared-space status.",
        media: [
          {
            src: "/images/projects/roominate/mobile-screen-01.webp",
            alt: "Roominate mobile app screen.",
            caption: "Mobile screen."
          },
          {
            src: "/images/projects/roominate/mobile-screen-02.webp",
            alt: "Roominate mobile navigation screen.",
            caption: "Navigation screen."
          },
          {
            src: "/images/projects/roominate/hardware-render-01.webp",
            alt: "Roominate triangular hardware render.",
            caption: "Hardware form."
          },
          {
            src: "/images/projects/roominate/hardware-use.webp",
            alt: "Roominate hardware use gesture.",
            caption: "Physical interaction.",
            span: "wide"
          }
        ]
      },
      {
        id: "motion",
        label: "Motion",
        title: "Interaction loops",
        body: "The original Wix page used short loops to explain how the system behaves over time.",
        media: [
          {
            src: "/images/projects/roominate/interaction-01.webp",
            alt: "Animated Roominate interface or interaction from the original Wix page.",
            caption: "Original interaction loop."
          },
          {
            src: "/images/projects/roominate/interaction-02.webp",
            alt: "Animated Roominate interaction state from the original Wix page.",
            caption: "Interaction state."
          },
          {
            src: "/images/projects/roominate/interaction-03.webp",
            alt: "Animated Roominate interaction flow.",
            caption: "Flow detail."
          },
          {
            src: "/images/projects/roominate/interaction-04.webp",
            alt: "Animated Roominate system state.",
            caption: "System state."
          },
          {
            src: "/images/projects/roominate/interaction-05.webp",
            alt: "Animated Roominate interface detail.",
            caption: "Interface detail."
          },
          {
            src: "/images/projects/roominate/interaction-06.webp",
            alt: "Animated Roominate interface behavior.",
            caption: "Interface behavior."
          }
        ]
      },
      {
        id: "final-video",
        label: "Final Video",
        title: "Prototype test and final concept",
        body: "The old page ends around the final video/test area; the stills and recovered GIFs keep that motion-led section visible.",
        media: [
          {
            src: "/images/projects/roominate/user-test-01.webp",
            alt: "Roominate user testing photo.",
            caption: "User testing.",
            span: "wide"
          },
          {
            src: "/images/projects/roominate/user-test-02.webp",
            alt: "Roominate group testing or presentation photo.",
            caption: "Group test."
          },
          {
            src: "/images/projects/roominate/scenario-wall.webp",
            alt: "Roominate wall-scale scenario presentation.",
            caption: "Scenario presentation."
          },
          {
            src: "/images/projects/roominate/cover.webp",
            alt: "Roominate cover image.",
            caption: "Project cover."
          }
        ]
      }
    ]
  },
  {
    title: "In-City Short-distance Ferry Terminal",
    slug: "in-city-short-distance-ferry-terminal",
    category: "archive",
    legacyPath: "/drydock",
    role: "Architecture / Team Project",
    summary:
      "A three-person architecture project for abandoned dry dock No.4 in south Boston, designed as a self-sufficient, eco-friendly, educational site.",
    visualSections: [
      {
        id: "site",
        label: "Site",
        title: "Dry dock as public site",
        body: "The old page reads like a portfolio board: site analysis, ferry access, ecological systems, and a sculptural terminal form.",
        media: [
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/site-map.webp",
            alt: "Site map for the in-city short-distance ferry terminal project.",
            caption: "Site map.",
            span: "wide"
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/site-analysis.webp",
            alt: "Site analysis map with routes and context notes.",
            caption: "Context analysis."
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/program-exploded.webp",
            alt: "Exploded program diagram for the ferry terminal.",
            caption: "Program diagram."
          }
        ]
      },
      {
        id: "form",
        label: "Form",
        title: "Model and form studies",
        media: [
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/physical-model-01.webp",
            alt: "Physical model of the ferry terminal roof form.",
            caption: "Physical model.",
            span: "wide"
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/physical-model-02.webp",
            alt: "Physical model close view of the ferry terminal.",
            caption: "Model angle."
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/model-detail.webp",
            alt: "Close detail of ferry terminal model material.",
            caption: "Material detail."
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/final-model.webp",
            alt: "Final physical model of the ferry terminal.",
            caption: "Final model."
          }
        ]
      },
      {
        id: "system",
        label: "System",
        title: "Structure and material",
        media: [
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/structure-diagram.webp",
            alt: "Structural diagram for the ferry terminal roof.",
            caption: "Structural diagram."
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/material-board.webp",
            alt: "Material and precedent board for the ferry terminal.",
            caption: "Material board."
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/site-render-01.webp",
            alt: "Rendering of the ferry terminal in the dry dock site.",
            caption: "Site rendering."
          },
          {
            src: "/images/projects/in-city-short-distance-ferry-terminal/site-render-02.webp",
            alt: "Exterior rendering of the ferry terminal structure.",
            caption: "Exterior rendering.",
            span: "wide"
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "system",
        label: "System",
        title: "Easy-to-assemble furniture",
        body: "AFFIX presents a furniture connection system through assembly diagrams, connectors, and final renders.",
        media: [
          {
            src: "/images/projects/affix/final-render.webp",
            alt: "AFFIX final furniture render.",
            caption: "Final render.",
            span: "wide"
          },
          {
            src: "/images/projects/affix/concept-sketch.webp",
            alt: "AFFIX concept sketch.",
            caption: "Concept sketch."
          },
          {
            src: "/images/projects/affix/assembly-diagram.webp",
            alt: "AFFIX assembly diagram.",
            caption: "Assembly diagram."
          }
        ]
      },
      {
        id: "details",
        label: "Details",
        title: "Connector details",
        media: [
          {
            src: "/images/projects/affix/system-diagram.webp",
            alt: "AFFIX system diagram.",
            caption: "System diagram.",
            span: "wide"
          },
          {
            src: "/images/projects/affix/connector-detail-01.webp",
            alt: "AFFIX connector detail.",
            caption: "Connector detail."
          },
          {
            src: "/images/projects/affix/connector-detail-02.webp",
            alt: "AFFIX connector detail render.",
            caption: "Connector render."
          },
          {
            src: "/images/projects/affix/connector-spec.webp",
            alt: "AFFIX connector specification drawing.",
            caption: "Connector spec."
          },
          {
            src: "/images/projects/affix/technical-board.webp",
            alt: "AFFIX technical drawing board.",
            caption: "Technical board."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "research",
        label: "Research",
        title: "Outdoor workout context",
        body: "The old page started from outdoor exercise research, site observations, and use patterns around public fitness space.",
        media: [
          {
            src: "/images/projects/botto/research-board.webp",
            alt: "BOTTO research board with outdoor exercise references and charts.",
            caption: "Research board.",
            span: "wide"
          },
          {
            src: "/images/projects/botto/data-board.webp",
            alt: "BOTTO data board with outdoor workout charts.",
            caption: "Data board."
          },
          {
            src: "/images/projects/botto/site-photo.webp",
            alt: "Outdoor workout equipment site photo used in BOTTO research.",
            caption: "Site observation."
          },
          {
            src: "/images/projects/botto/runner-context.webp",
            alt: "Runner context image for BOTTO.",
            caption: "Runner context."
          }
        ]
      },
      {
        id: "ideation",
        label: "Ideation",
        title: "From site problem to product form",
        body: "Sketches and site mapping connected the public setting to a portable workout product direction.",
        media: [
          {
            src: "/images/projects/botto/ideation-board.webp",
            alt: "BOTTO ideation board with product sketches.",
            caption: "Ideation board.",
            span: "wide"
          },
          {
            src: "/images/projects/botto/map-board.webp",
            alt: "BOTTO site map board.",
            caption: "Site map."
          },
          {
            src: "/images/projects/botto/site-equipment.webp",
            alt: "Outdoor exercise equipment photo used for BOTTO.",
            caption: "Existing equipment."
          }
        ]
      },
      {
        id: "form",
        label: "Form",
        title: "Product and parts",
        body: "The product is explained through renders, parts, and placement in a bench-side workout scenario.",
        media: [
          {
            src: "/images/projects/botto/product-render-front.webp",
            alt: "BOTTO front product render.",
            caption: "Product render."
          },
          {
            src: "/images/projects/botto/product-detail-render.webp",
            alt: "BOTTO detailed product render.",
            caption: "Detail render."
          },
          {
            src: "/images/projects/botto/parts-render.webp",
            alt: "BOTTO parts render.",
            caption: "Parts and accessories.",
            span: "wide"
          },
          {
            src: "/images/projects/botto/bench-scenario.webp",
            alt: "BOTTO product placed on an outdoor bench.",
            caption: "Use scenario."
          }
        ]
      },
      {
        id: "final-video",
        label: "Final Video",
        title: "Prototype motion and identity",
        body: "The recovered GIF keeps the original motion slot, paired with the final logo and presentation renders.",
        media: [
          {
            src: "/images/projects/botto/prototype-loop.webp",
            alt: "Animated BOTTO product prototype loop from the original Wix page.",
            caption: "Recovered prototype motion asset.",
            span: "wide"
          },
          {
            src: "/images/projects/botto/product-render-alt.webp",
            alt: "BOTTO alternate product render.",
            caption: "Alternate render."
          },
          {
            src: "/images/projects/botto/brand-logo.webp",
            alt: "BOTTO brand logo.",
            caption: "Brand mark."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "renderings",
        label: "Renderings",
        title: "Selected internship renderings",
        body: "A compact archive of product rendering and form exploration from the internship period.",
        media: [
          {
            src: "/images/projects/product-design-intern/appliance-render-01.webp",
            alt: "Appliance rendering with dimensions from the internship project.",
            caption: "Appliance rendering.",
            span: "wide"
          },
          {
            src: "/images/projects/product-design-intern/round-device-render.webp",
            alt: "Round device rendering.",
            caption: "Round device."
          },
          {
            src: "/images/projects/product-design-intern/round-device-scene.webp",
            alt: "Round device scene rendering.",
            caption: "Scene rendering."
          },
          {
            src: "/images/projects/product-design-intern/blue-device-render.webp",
            alt: "Blue product rendering.",
            caption: "Product rendering."
          }
        ]
      },
      {
        id: "charger",
        label: "Charger",
        title: "Compact charger series",
        media: [
          {
            src: "/images/projects/product-design-intern/charger-render-01.webp",
            alt: "Compact charger rendering.",
            caption: "Charger render."
          },
          {
            src: "/images/projects/product-design-intern/charger-render-02.webp",
            alt: "Standing compact charger rendering.",
            caption: "Standing render."
          },
          {
            src: "/images/projects/product-design-intern/charger-colorways.webp",
            alt: "Charger colorways rendering.",
            caption: "Colorways.",
            span: "wide"
          },
          {
            src: "/images/projects/product-design-intern/charger-exploded.webp",
            alt: "Charger parts layout rendering.",
            caption: "Parts layout."
          },
          {
            src: "/images/projects/product-design-intern/charger-scene-01.webp",
            alt: "Charger usage scene rendering.",
            caption: "Usage scene."
          },
          {
            src: "/images/projects/product-design-intern/charger-scene-02.webp",
            alt: "Charger on desk rendering.",
            caption: "Desk scene."
          }
        ]
      },
      {
        id: "dimensions",
        label: "Details",
        title: "Dimension views",
        media: [
          {
            src: "/images/projects/product-design-intern/dimension-render-01.webp",
            alt: "Product dimension rendering.",
            caption: "Dimension view."
          },
          {
            src: "/images/projects/product-design-intern/dimension-render-02.webp",
            alt: "Product dimension rendering with measurements.",
            caption: "Measurement view."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "concept",
        label: "Concept",
        title: "Vest to tote",
        body: "A soft-goods project exploring how a wearable vest can transform into a tote bag.",
        media: [
          {
            src: "/images/projects/soft-goods-project/technical-cover.webp",
            alt: "Technical cover drawing for the soft goods project.",
            caption: "Technical cover.",
            span: "wide"
          },
          {
            src: "/images/projects/soft-goods-project/mood-board.webp",
            alt: "Mood board for the soft goods project.",
            caption: "Mood board."
          },
          {
            src: "/images/projects/soft-goods-project/concept-sketch.webp",
            alt: "Concept sketch of vest and tote form.",
            caption: "Concept sketch."
          },
          {
            src: "/images/projects/soft-goods-project/transform-diagram.webp",
            alt: "Diagram showing transformation from vest to tote bag.",
            caption: "Transform diagram."
          }
        ]
      },
      {
        id: "pattern",
        label: "Pattern",
        title: "Pattern and construction",
        media: [
          {
            src: "/images/projects/soft-goods-project/pattern-layout.webp",
            alt: "Pattern layout for soft goods project.",
            caption: "Pattern layout.",
            span: "wide"
          },
          {
            src: "/images/projects/soft-goods-project/exploded-view.webp",
            alt: "Exploded view of soft goods construction.",
            caption: "Exploded view."
          },
          {
            src: "/images/projects/soft-goods-project/flat-final.webp",
            alt: "Flat final prototype of the vest bag.",
            caption: "Flat prototype."
          }
        ]
      },
      {
        id: "prototype",
        label: "Prototype",
        title: "Final prototype",
        media: [
          {
            src: "/images/projects/soft-goods-project/tote-final.webp",
            alt: "Final tote form of the soft goods project.",
            caption: "Tote form."
          },
          {
            src: "/images/projects/soft-goods-project/vest-final.webp",
            alt: "Final vest form of the soft goods project.",
            caption: "Vest form."
          },
          {
            src: "/images/projects/soft-goods-project/worn-use-01.webp",
            alt: "Soft goods prototype worn by a person.",
            caption: "Worn prototype."
          },
          {
            src: "/images/projects/soft-goods-project/worn-use-02.webp",
            alt: "Soft goods prototype used as a bag.",
            caption: "Use detail."
          },
          {
            src: "/images/projects/soft-goods-project/pocket-use.webp",
            alt: "Pocket detail of the soft goods prototype.",
            caption: "Pocket detail."
          }
        ]
      }
    ],
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
    visualSections: [
      {
        id: "photos",
        label: "Photos",
        title: "Selected photography",
        media: [
          {
            src: "/images/projects/photography/photo-01.webp",
            alt: "Selected photography image.",
            caption: "Photo 01."
          },
          {
            src: "/images/projects/photography/photo-02.webp",
            alt: "Selected photography image.",
            caption: "Photo 02."
          },
          {
            src: "/images/projects/photography/photo-03.webp",
            alt: "Selected photography image.",
            caption: "Photo 03."
          },
          {
            src: "/images/projects/photography/photo-04.webp",
            alt: "Selected photography image.",
            caption: "Photo 04."
          },
          {
            src: "/images/projects/photography/photo-05.webp",
            alt: "Selected photography image.",
            caption: "Photo 05."
          },
          {
            src: "/images/projects/photography/photo-06.webp",
            alt: "Selected photography image.",
            caption: "Photo 06."
          },
          {
            src: "/images/projects/photography/photo-07.webp",
            alt: "Selected photography image.",
            caption: "Photo 07."
          }
        ]
      }
    ],
    mediaHint: "IMG_2618_polarr.jpg"
  },
  {
    title: "Woodcrafts",
    slug: "woodcrafts",
    category: "archive",
    legacyPath: "/wood",
    role: "Craft",
    summary: "A collection of wood works.",
    visualSections: [
      {
        id: "folded",
        label: "Object",
        title: "Folded form study",
        body: "The old page presented craft pieces as object studies: form, material, detail, and use.",
        media: [
          {
            src: "/images/projects/woodcrafts/folded-form-01.webp",
            alt: "Folded craft form on white background.",
            caption: "Folded form.",
            span: "wide"
          },
          {
            src: "/images/projects/woodcrafts/folded-form-detail.webp",
            alt: "Close detail of folded craft form.",
            caption: "Detail view."
          },
          {
            src: "/images/projects/woodcrafts/folded-form-02.webp",
            alt: "Folded craft form from another angle.",
            caption: "Alternate angle."
          },
          {
            src: "/images/projects/woodcrafts/folded-form-row.webp",
            alt: "Row view of folded craft form.",
            caption: "Side profile."
          }
        ]
      },
      {
        id: "toy",
        label: "Toy",
        title: "Wood toy mechanism",
        media: [
          {
            src: "/images/projects/woodcrafts/wood-toy-01.webp",
            alt: "Wood toy mechanism with red ball.",
            caption: "Toy mechanism."
          },
          {
            src: "/images/projects/woodcrafts/wood-toy-detail.webp",
            alt: "Detail of wood toy mechanism.",
            caption: "Mechanism detail."
          },
          {
            src: "/images/projects/woodcrafts/wood-toy-setup.webp",
            alt: "Overhead view of wood toy setup.",
            caption: "Setup."
          },
          {
            src: "/images/projects/woodcrafts/wood-toy-overhead.webp",
            alt: "Overhead wood toy mechanism.",
            caption: "Overhead view."
          }
        ]
      },
      {
        id: "board",
        label: "Board",
        title: "Game board object",
        media: [
          {
            src: "/images/projects/woodcrafts/game-board-01.webp",
            alt: "Wood game board object.",
            caption: "Game board.",
            span: "wide"
          },
          {
            src: "/images/projects/woodcrafts/game-board-02.webp",
            alt: "Wood game board from another angle.",
            caption: "Board angle."
          },
          {
            src: "/images/projects/woodcrafts/game-board-detail.webp",
            alt: "Detail of wood game board with balls.",
            caption: "Board detail."
          },
          {
            src: "/images/projects/woodcrafts/game-board-use.webp",
            alt: "Hand interacting with wood game board.",
            caption: "Interaction detail."
          }
        ]
      }
    ],
    mediaHint: "_edited.jpg"
  },
  {
    title: "Metalcrafts",
    slug: "metalcrafts",
    category: "archive",
    legacyPath: "/metal",
    role: "Craft",
    summary: "A collection of metal works.",
    visualSections: [
      {
        id: "forms",
        label: "Forms",
        title: "Folded metal studies",
        body: "A small archive of folded metal forms, profiles, and detail shots from the original page.",
        media: [
          {
            src: "/images/projects/metalcrafts/metal-form-01.webp",
            alt: "Folded metal form.",
            caption: "Folded metal form.",
            span: "wide"
          },
          {
            src: "/images/projects/metalcrafts/metal-detail-01.webp",
            alt: "Folded metal detail.",
            caption: "Detail view."
          },
          {
            src: "/images/projects/metalcrafts/metal-profile.webp",
            alt: "Folded metal profile.",
            caption: "Profile."
          },
          {
            src: "/images/projects/metalcrafts/metal-form-02.webp",
            alt: "Folded metal form from another angle.",
            caption: "Form angle."
          },
          {
            src: "/images/projects/metalcrafts/metal-form-03.webp",
            alt: "Folded metal object.",
            caption: "Object view."
          },
          {
            src: "/images/projects/metalcrafts/metal-row.webp",
            alt: "Folded metal row view.",
            caption: "Row view."
          },
          {
            src: "/images/projects/metalcrafts/metal-closeup.webp",
            alt: "Folded metal closeup.",
            caption: "Closeup."
          },
          {
            src: "/images/projects/metalcrafts/metal-final.webp",
            alt: "Final folded metal form.",
            caption: "Final form."
          }
        ]
      }
    ],
    mediaHint: "IMG_3730.jpg"
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
