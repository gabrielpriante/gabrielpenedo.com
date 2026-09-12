export const currentResearchIntro =
  "I am currently working with Dr. Kala Fleming and Dr. Elizabeth Ondula on three interrelated research projects spanning environmental computer vision, field-grounded machine learning, and geospatial decision systems.";

// Phrases inside currentResearchIntro that render as links.
export const currentResearchLinks = [
  {
    match: "Dr. Kala Fleming",
    href: "https://www.linkedin.com/in/kalafleming/",
  },
  {
    match: "Dr. Elizabeth Ondula",
    href: "https://www.linkedin.com/in/elizabeth-ondula/",
  },
];

// `href` stays undefined until individual project pages exist.
// `figures`, `comparison` and `link` are shown on the Research page only.
export const projects = [
  {
    id: "field-grounded-environmental-ai",
    title: "Field-Grounded Environmental AI",
    summary:
      "A field study exploring whether structured human observations, physical interventions, drone imagery, and high-confidence annotations can improve environmental computer vision systems.",
    detail:
      "This work examines how field teams can interact with the physical environment and the data-generation process to reduce ambiguity, improve annotation quality, and create more reliable inputs for machine learning systems.",
    href: undefined,
    figures: [
      {
        src: "/images/wilkinsburg-aerial.jpg",
        alt: "Original DJI Mini 5 Pro aerial image of Wilkinsburg, Pennsylvania.",
        caption:
          "Original aerial RGB image. Wilkinsburg, Pennsylvania. Captured with a DJI Mini 5 Pro.",
        width: 1600,
        height: 1200,
      },
    ],
    comparison: [
      {
        label: "SAM2 ONE-SHOT",
        src: "/images/wilkinsburg-sam2-one-shot.jpg",
        alt: "One-shot SAM2 segmentation overlay on aerial imagery from Wilkinsburg, Pennsylvania.",
        caption:
          "SAM2 one-shot output. Automatic segmentation applied directly to the Wilkinsburg aerial image.",
        width: 1600,
        height: 1200,
      },
      {
        label: "SAM2 + CNN",
        src: "/images/wilkinsburg-sam2-cnn.jpg",
        alt: "SAM2 segmentation guided by CNN detections on aerial imagery from Wilkinsburg, Pennsylvania.",
        caption:
          "SAM2 + CNN model output. CNN detections guide SAM2 segmentation on the same Wilkinsburg aerial image.",
        width: 1600,
        height: 1200,
      },
    ],
    link: {
      label: "View reproducible pipeline on GitHub \u2192",
      href: "https://github.com/gabrielpriante/urban-tree-vision-baselines",
    },
  },

  {
    id: "sliding-window-instability",
    title: "Sliding-Window Instability in Environmental Object Detection",
    summary:
      "Experimental research examining how an unreported inference parameter changes individual tree-crown detections despite stable aggregate counts.",
    detail:
      "The study treats the origin of a sliding-window inference grid as an experimental variable and investigates how apparently minor implementation choices can affect the reproducibility and identity of detections produced by environmental computer-vision systems.",
    href: undefined,
    comparisonFirst: true,
    comparison: [
      {
        label: "ORIGINAL IMAGE",
        src: "/images/canopy-tile.jpg",
        alt: "Nadir aerial image of a Northern California closed conifer canopy collected by Open Forest Observatory.",
        caption:
          "Original aerial imagery. Northern California closed conifer canopy. Collected by Open Forest Observatory.",
        width: 950,
        height: 950,
      },
      {
        label: "EXAMPLE DETECTION OUTPUT",
        src: "/images/sliding-window-detections.jpg",
        alt: "DeepForest object detections shown as red bounding boxes over a Northern California forest canopy image.",
        caption:
          "Example DeepForest detection output on the Open Forest Observatory canopy image.",
        width: 1000,
        height: 1000,
      },
    ],
    figures: [
      {
        label: "PRELIMINARY RESULTS",
        src: "/images/sliding-window-results.jpg",
        alt: "Preliminary visualization comparing tree detections across sixteen sliding-window grid origins on the same aerial photograph.",
        caption:
          "Preliminary visualization of sixteen sliding-window origins applied to the same aerial image. Aggregate counts remain similar while the identity of individual detections changes across runs.",
        width: 1600,
        height: 2360,
      },
    ],
  },
  {
    id: "geospatial-decision-systems",
    title: "Geospatial Decision Systems for Green Infrastructure",
    summary:
      "Applied GIS research integrating environmental, infrastructural, and community datasets to support green stormwater infrastructure planning.",
    detail:
      "This work investigates how heterogeneous spatial datasets can be organized and combined into decision-support systems that help practitioners evaluate environmental constraints, opportunities, and community conditions.",
    href: undefined,
    figures: [
      {
        src: "/images/riverfront-oblique.jpg",
        alt: "Oblique aerial view of a riverfront neighborhood, showing a river, bridges, rail lines, industrial buildings, houses, and wooded hillsides.",
        caption:
          "Original drone imagery. Surroundings of Braddock Lot. DJI Mini 5 Pro.",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/built-environment-nadir.jpg",
        alt: "Nadir drone image of a multi-story building flanked by a row of greenhouses on one side and a parking lot on the other.",
        caption:
          "Original drone imagery. Bidwell Training Center. DJI Mini 5 Pro.",
        width: 1600,
        height: 1200,
      },
    ],
  },
];

export const interests = [
  {
    title: "Reliable Environmental AI",
    body: "How seemingly minor modeling, preprocessing, inference, or sensing choices affect the reproducibility and reliability of environmental machine-learning systems.",
  },
  {
    title: "Field-Grounded Machine Learning",
    body: "How field observations, human expertise, structured annotation, physical interventions, and remote sensing can be combined to produce better data and more reliable computational models.",
  },
  {
    title: "Computational Environmental Decision-Making",
    body: "How spatial data, economic reasoning, machine learning, and environmental information can support decisions involving infrastructure, sustainability, risk, and resource allocation.",
  },
];