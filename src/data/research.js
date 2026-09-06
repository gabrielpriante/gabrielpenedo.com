export const currentResearchIntro =
  "I am currently working with Dr. Kala Fleming and Dr. Elizabeth Ondula on three interrelated research projects spanning environmental computer vision, field-grounded machine learning, and geospatial decision systems.";

// `href` stays undefined until individual project pages exist.
// `figures` are shown on the Research page only.
export const projects = [
  {
    id: "sliding-window-instability",
    title: "Sliding-Window Instability in Environmental Object Detection",
    summary:
      "Experimental research examining how an unreported inference parameter changes individual tree-crown detections despite stable aggregate counts.",
    detail:
      "The study treats the origin of a sliding-window inference grid as an experimental variable and investigates how apparently minor implementation choices can affect the reproducibility and identity of detections produced by environmental computer-vision systems.",
    href: undefined,
    figures: [
      {
        src: "/images/canopy-tile.jpg",
        alt: "Nadir aerial image of a mixed forest canopy, with individual tree crowns visible against shadowed gaps between them.",
        caption: "Image collected by Open Forest Observatory.",
        width: 950,
        height: 950,
      },
    ],
  },
  {
    id: "field-grounded-environmental-ai",
    title: "Field-Grounded Environmental AI",
    summary:
      "A field study exploring whether structured human observations, physical interventions, drone imagery, and high-confidence annotations can improve environmental computer-vision systems.",
    detail:
      "This work examines how field teams can interact with the physical environment and the data-generation process to reduce ambiguity, improve annotation quality, and create more reliable inputs for machine-learning systems.",
    href: undefined,
    figures: [
      {
        src: "/images/field-site-nadir.jpg",
        alt: "Nadir drone image of a street intersection with a grass lot, a canopy tent, parked vehicles, and a long low building.",
        width: 1600,
        height: 1200,
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
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/built-environment-nadir.jpg",
        alt: "Nadir drone image of a multi-story building flanked by a row of greenhouses on one side and a parking lot on the other.",
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
