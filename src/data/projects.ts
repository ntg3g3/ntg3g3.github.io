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
  heroImage?: string;
  impacts?: string[];
  sections?: { title: string; body: string[] }[];
  visualSections?: {
    id: string;
    label: string;
    variant?: "split" | "wide" | "gallery" | "pair" | "text";
    title: string;
    body?: string;
    points?: {
      title: string;
      body: string;
    }[];
    media: {
      type?: "image" | "youtube" | "vimeo";
      src: string;
      alt: string;
      caption?: string;
      span?: "wide" | "tall" | "compact";
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
      "A 3-5 player underwater co-op experience designed for a 270-degree CAVE projection system.",
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
          "Public dev logs and Level 1 video are restored in the rebuilt page."
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
        id: "video",
        label: "Video",
        variant: "wide",
        title: "Level 1 prototype footage",
        body: "The room was the design material: group presence, a curved projection surface, tracked input, and readable pacing shaped the experience in motion.",
        media: [
          {
            type: "youtube",
            src: "https://youtu.be/TGdCYzSnRDs",
            alt: "CAVERN Level 1 video.",
            caption: "Level 1 video: cavern Lv1.",
            span: "wide"
          }
        ]
      },
      {
        id: "design",
        label: "Design",
        variant: "wide",
        title: "Platform constraints became gameplay",
        body: "The one-page design handoff keeps the important constraints visible: player count, input limits, aiming risk, guided movement, stage goals, and fallback plans.",
        media: [
          {
            src: "/images/projects/cavern/design-document.webp",
            alt: "CAVERN design document board with gameplay and system notes.",
            caption: "System and gameplay design document.",
            span: "wide"
          }
        ]
      },
      {
        id: "stages",
        label: "Stages",
        variant: "text",
        title: "Discovery, protection, and finale",
        body: "The level structure moved from underwater discovery to ship protection, then into a darker finale with flashlight pressure.",
        media: []
      },
      {
        id: "devlog",
        label: "Dev Log",
        variant: "text",
        title: "Weekly development record",
        body: "The public ETC dev log documents the team's weekly process, from early concepts and storyboards to prototype and final presentation work.",
        media: []
      }
    ],
    externalLinks: [
      { label: "Dev Log", href: "https://projects.etc.cmu.edu/cavern/blog/" }
    ],
    mediaHint: "IMG_8237.jpg",
    featured: true
  },
  {
    title: "Project Amazon",
    slug: "project-amazon",
    category: "game",
    legacyPath: "/projectamazon",
    role: "Experience Design / System Design / Game Design",
    summary:
      "A playable VR/projection learning prototype built around Amazon-region themes and route-based exploration.",
    heroImage: "/images/projects/project-amazon/title-screen.webp",
    visualSections: [
      {
        id: "framing",
        label: "Framing",
        variant: "wide",
        title: "A mixed-reality learning journey",
        body: "Project Amazon turns cultural, environmental, and travel-safety themes into an embodied route through projection and VR.",
        media: [
          {
            src: "/images/projects/project-amazon/river-context.webp",
            alt: "River landscape context image for Project Amazon.",
            caption: "River context for the journey.",
            span: "wide"
          }
        ]
      },
      {
        id: "themes",
        label: "Themes",
        variant: "gallery",
        title: "Learning themes",
        body: "The original concept framed the journey through river culture, study-abroad safety, folk tale, and architecture.",
        media: [
          {
            src: "/images/projects/project-amazon/theme-summary.webp",
            alt: "Project Amazon summary slide listing river, study abroad safety, folk tale, and architecture as project themes.",
            caption: "Theme summary: river, study abroad safety, folk tale, and architecture."
          },
          {
            src: "/images/projects/project-amazon/gallery-03.webp",
            alt: "Architecture reference image from the Project Amazon research deck.",
            caption: "Architecture reference from the learning-theme research."
          },
          {
            src: "/images/projects/project-amazon/gallery-04.webp",
            alt: "River slide describing rivers as places where cultures and civilizations develop.",
            caption: "River research slide connecting geography, civilization, and culture."
          }
        ]
      },
      {
        id: "experience",
        label: "Experience",
        variant: "wide",
        title: "Projection and VR setup",
        body: "Projection gives shared context while VR gives an embodied viewpoint inside the learning route.",
        media: [
          {
            src: "/images/projects/project-amazon/projection-concept.webp",
            alt: "Projection and VR concept diagram for Project Amazon.",
            caption: "Projection concept."
          },
          {
            src: "/images/projects/project-amazon/layout-board.webp",
            alt: "Project Amazon layout board with interface, projection, and screen references.",
            caption: "System board: visual UI, pop-up windows, video transmission, map, and VR player location.",
            span: "wide"
          }
        ]
      },
      {
        id: "route",
        label: "Route",
        variant: "pair",
        title: "Route and progression",
        body: "The learning content is organized as a path rather than a static slideshow.",
        media: [
          {
            src: "/images/projects/project-amazon/route-map.webp",
            alt: "Route map from Project Amazon.",
            caption: "Mapped route through the experience."
          },
          {
            src: "/images/projects/project-amazon/tree-route-sketch.webp",
            alt: "Tree route sketch and map diagram for Project Amazon.",
            caption: "Early route sketch."
          },
          {
            src: "/images/projects/project-amazon/screen-flow.webp",
            alt: "Project Amazon screen flow and interface storyboard.",
            caption: "Screen and interaction flow.",
            span: "wide"
          }
        ]
      },
      {
        id: "result",
        label: "Result",
        variant: "wide",
        title: "A playable river journey",
        body: "The prototype used boat movement and base-return feedback to make the route feel like an embodied trip rather than a static learning board.",
        media: [
          {
            src: "/images/projects/project-amazon/return-to-base.png",
            alt: "Project Amazon gameplay screen showing a boat returning to base on a river.",
            caption: "Playable prototype: returning to base after traveling through the river route.",
            span: "wide"
          }
        ]
      },
      {
        id: "videos",
        label: "Videos",
        variant: "wide",
        title: "Trailer and playthrough",
        body: "The videos come after the system boards so the demo is easier to read as a playable VR/projection prototype.",
        media: [
          {
            type: "youtube",
            src: "https://youtu.be/3DMoqmmHwn4?si=Q7fIxKuM16rhXk2o",
            alt: "Project Amazon trailer video.",
            caption: "Trailer.",
            span: "wide"
          },
          {
            type: "youtube",
            src: "https://youtu.be/dXYntPw7LGI?si=WFt8_gQqMJ1WR2Wi",
            alt: "Project Amazon boat movement video.",
            caption: "Boat movement.",
            span: "wide"
          },
          {
            type: "vimeo",
            src: "https://vimeo.com/699960398?fl=pl&fe=cm",
            alt: "Project Amazon full playthrough video on Vimeo.",
            caption: "Full playthrough.",
            span: "wide"
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
      "A turn-based asymmetric co-op game where players coordinate through partial information, pins, and character-specific dice.",
    description: [
      "Designed for CMU HCII / ARL STRONG lab research on Human-Machine Teaming.",
      "Players coordinate through partial information, pings, character-specific dice, and tutorial levels."
    ],
    deliverables: "A multiplayer asymmetric co-op game designed for human-machine teaming studies",
    timeSpan: "6/21/2022 - present",
    team: ["Yutao Huang", "Phoebe Wang", "Jingyuan Fang"],
    impacts: [
      "Researched existing co-op games and board games, then proposed several game concepts to the team.",
      "Communicated with the collaborating research team to understand their research needs and transform them into in-game features.",
      "Worked closely with the artist and programmer in the team, while helping manage project progress.",
      "Finished the level designs and tutorial stages.",
      "Arranged playtests, collected feedback, and listed existing bugs."
    ],
    visualSections: [
      {
        id: "overview",
        label: "Overview",
        variant: "wide",
        title: "Research needs became a co-op game system",
        body: "Summer 2022 I was hired as a game designer by the ARL STRONG lab at CMU to design and develop an asymmetric co-op game for Human-Machine Teaming studies. Dice Adventure is the final outcome we developed: a turn-based game involving three characters, a dwarf, a human and a giant. They each have their own range of vision and their own set of dice. Players communicate through a pinning system, share partial information, and use their dice wisely to unlock altars and reach the final gate.",
        media: []
      },
      {
        id: "constraints",
        label: "Constraints",
        variant: "wide",
        title: "Research constraints",
        body: "During the research phase, we met the collaborating research team and collected their needs and thoughts.",
        points: [
          {
            title: "In-game Communication",
            body: "Since audio communication can be hard for AI players, the game needed a built-in communication system that does not require audio input."
          },
          {
            title: "In-game Learning",
            body: "The system needed different learning patterns that allow AI players to learn in real time, with breaks where players can communicate and reflect."
          },
          {
            title: "Strategy and Decision Making",
            body: "The game should be heavily based on strategy and decision making instead of something like reflex and aim."
          },
          {
            title: "Asymmetry in Information",
            body: "The asymmetry should come from how players gather information, pushing the team to communicate more with each other."
          }
        ],
        media: []
      },
      {
        id: "research",
        label: "Research",
        variant: "gallery",
        title: "Turn-based references",
        body: "With the feedback and ideas of the team, we found turn-based games fit the requirement the most. Board-game systems were useful references because their mechanisms are normally more manageable for AI research.",
        media: [
          {
            src: "/images/projects/dice-adventure/research-board.webp",
            alt: "Research board grouping real-time co-op games, information exchange games, resource exchange games, discovery games, and board-game references.",
            caption: "Reference map by collaboration pattern. These images are references, not project output.",
            span: "wide"
          }
        ]
      },
      {
        id: "board-game-references",
        label: "Process",
        variant: "gallery",
        title: "Early maps and prototype boards",
        body: "After the reference study, the design moved into grid sketches, paper-like maps, and prototype boards for testing movement, roles, and map logic.",
        media: [
          {
            src: "/images/projects/dice-adventure/early-grid-sketches.png",
            alt: "Early Dice Adventure grid sketches with character markers and route lines.",
            caption: "Early grid sketches for route and goal placement."
          },
          {
            src: "/images/projects/dice-adventure/low-poly-board-prototype.png",
            alt: "Low-poly Dice Adventure board prototype with characters, rocks, trees, altars, and gate.",
            caption: "Board-like prototype space for testing layout and interaction."
          },
          {
            src: "/images/projects/dice-adventure/level-iteration-board.png",
            alt: "Dice Adventure level iteration board with many grid-map variations.",
            caption: "Level iteration board."
          },
          {
            src: "/images/projects/dice-adventure/ui-state-board.png",
            alt: "Dice Adventure UI state board with multiple interface and gameplay-state thumbnails.",
            caption: "UI and state exploration.",
            span: "wide"
          }
        ]
      },
      {
        id: "concept",
        label: "Final Concept",
        variant: "wide",
        title: "Characters, dice, encounters, goals",
        body: "The final concept combined three asymmetric characters, character-specific dice, obstacle rules, matching altars, and a final gate.",
        media: [
          {
            src: "/images/projects/dice-adventure/final-system-rules.webp",
            alt: "Final concept rule sheet showing character dice, vision ranges, encounters, and obstacle rules for Dice Adventure.",
            caption: "Condensed system reference sheet used for movement, characters, altars, final gate, and obstacles.",
            span: "wide"
          },
          {
            src: "/images/projects/dice-adventure/dice-matrix.png",
            alt: "Dice Adventure dice matrix showing character-specific dice distributions.",
            caption: "Character-specific dice sets.",
            span: "compact"
          },
          {
            src: "/images/projects/dice-adventure/obstacle-rules-table.png",
            alt: "Dice Adventure obstacle rules table for rocks, monsters, and traps.",
            caption: "Obstacle rule table: rock, monster, and trap conditions.",
            span: "compact"
          },
          {
            src: "/images/projects/dice-adventure/goal-map-pair.png",
            alt: "Dice Adventure goal map pair showing altar and final gate route logic.",
            caption: "Goal and altar route logic.",
            span: "compact"
          }
        ]
      },
      {
        id: "pinning",
        label: "Pinning",
        variant: "pair",
        title: "Pinning as the core interaction",
        body: "The pinning system gave players a compact way to express danger, intent, uncertainty, and requests without sharing full information.",
        media: [
          {
            src: "/images/projects/dice-adventure/pinning-system-red.png",
            alt: "Dice Adventure pinning system diagram with the danger pin highlighted in red.",
            caption: "Pinning state with danger highlighted."
          },
          {
            src: "/images/projects/dice-adventure/pinning-system-gray.png",
            alt: "Dice Adventure pinning system diagram showing danger, on my way, assist me, and unknown.",
            caption: "Pinning menu: danger, on my way, assist me, and unknown."
          }
        ]
      },
      {
        id: "levels",
        label: "Levels",
        variant: "wide",
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
          },
          {
            src: "/images/projects/dice-adventure/stage-thumbnail-strip.png",
            alt: "Dice Adventure stage thumbnail strip showing multiple level states.",
            caption: "Stage thumbnail strip from level iteration."
          }
        ]
      },
      {
        id: "movement",
        label: "Plan and Move",
        variant: "wide",
        title: "Plan and move",
        body: "The movement system was designed to support a clearer learning process: preview a route, confirm it, cancel it, and understand reachable destinations before committing.",
        media: [
          {
            src: "/images/projects/dice-adventure/movement-spec.webp",
            alt: "Dice Adventure movement specification sheet showing moving, confirming, canceling, and possible destination states.",
            caption: "Movement specification from the original Wix assets.",
            span: "wide"
          }
        ]
      },
      {
        id: "assets-and-states",
        label: "States",
        variant: "gallery",
        title: "Prototype states and assets",
        body: "The prototype also needed readable active-player feedback, obstacle assets, and compact visual tokens so the research game could be understood quickly during playtests.",
        media: [
          {
            src: "/images/projects/dice-adventure/active-player-screen.png",
            alt: "Dice Adventure active player screen showing the current character and game UI.",
            caption: "Active-player feedback."
          },
          {
            src: "/images/projects/dice-adventure/obstacle-asset-sheet.png",
            alt: "Dice Adventure obstacle asset sheet with monster, rock, and trap objects.",
            caption: "Obstacle assets: monster, rock, and trap."
          },
          {
            src: "/images/projects/dice-adventure/pixel-icons-sheet.png",
            alt: "Dice Adventure pixel icon sheet for objects, obstacles, and map tokens.",
            caption: "Small map/object icon explorations.",
            span: "wide"
          }
        ]
      },
      {
        id: "prototype",
        label: "Prototype",
        variant: "pair",
        title: "Digital prototype",
        body: "The digital prototype translated the designed rules into clear turn state, team status, reachable spaces, and dice prompts.",
        media: [
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
        title: "Selected internship renderings",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
        title: "Vest to tote",
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
        variant: "gallery",
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
        variant: "gallery",
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
    summary: "",
    visualSections: [
      {
        id: "photos",
        label: "Photos",
        variant: "gallery",
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
        variant: "gallery",
        title: "Folded form study",
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
        variant: "gallery",
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
        variant: "gallery",
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
        variant: "gallery",
        title: "Folded metal studies",
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
