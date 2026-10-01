export const workIntro =
  "My professional work sits at the intersection of applied AI, data science, geospatial technology, field operations, and workforce systems. This page focuses on the organizations, technical systems, and teams I have helped build and support. Research projects and scientific results are described separately on the Research page.";

export const organizations = [
  {
    id: "frontline-gig",
    org: "Frontline Gig / Frontline Labs",
    titles: [
      "Applied Data Scientist & Project Lead, Frontline Gig",
      "Founding Applied Scientist & Lab Lead, Frontline Labs",
    ],
    description: [
      "I lead applied data science and research initiatives spanning human-centered AI, computer vision, geospatial systems, workforce analytics, drone sensing, and field-generated data. My work combines technical development with research leadership, field operations, and collaboration with community organizations.",
    ],
    bullets: [
      "Lead Frontline Labs research activities, including project development, experimental design, technical implementation, and coordination across applied research initiatives.",
      "Supervise and mentor master's-level research interns working on independent technical projects, including internal research and work with publication potential.",
      "Develop computer vision and machine learning workflows for environmental monitoring, including drone-based imagery, tree detection, segmentation, and field-grounded model evaluation.",
      "Design workflows that combine AI outputs with human observation, field verification, and expert judgment to evaluate how computational systems perform in real-world settings.",
      "Lead drone-based data collection and field experimentation in partnership with community organizations as an FAA Part 107 Remote Pilot.",
      "Build geospatial pipelines for environmental inventories, inspection data, canopy analysis, site assessment, and stakeholder-facing decision support.",
      "Conduct internal applied research involving workforce data, operational systems, and the use of computational tools to strengthen organizational capacity.",
      "Translate technical research into usable workflows, documentation, visualizations, and analytical products for nontechnical collaborators and decision-makers.",
      "Develop and maintain collaborations spanning academia, community organizations, environmental organizations, and industry.",
    ],
  },
  {
    id: "upstreampgh",
    org: "UpstreamPGH",
    titles: ["GIS Analyst / Applied Geospatial Work"],
    description: [
      "My work with UpstreamPGH focuses on using geospatial data, field observations, and community-generated information to support neighborhood-scale environmental planning and decision-making.",
    ],
    bullets: [
      "Build and maintain a multi-layer geospatial decision-support system integrating environmental constraints, opportunities, infrastructure, public datasets, and community information.",
      "Prepare, clean, geocode, clip, and organize spatial datasets from numerous public and organizational sources for analysis and ArcGIS integration.",
      "Support field data collection and community-based environmental assessment, including survey design, geocoding workflows, and spatial analysis.",
      "Develop reproducible GIS workflows that transform heterogeneous environmental datasets into usable neighborhood-level information.",
      "Work with stormwater, green infrastructure, flooding, and related environmental data to support planning and community decision-making.",
      "Apply privacy-conscious workflows when working with household-level and respondent-generated geographic data.",
    ],
  },
  {
    id: "amazon",
    org: "Amazon",
    titles: ["Area Manager"],
    description: [
      "I worked in operations at an Amazon fulfillment center, managing more than 50 frontline employees on the night shift in a highly automated and metrics-driven environment.",
      "My responsibilities included team leadership, operational metric oversight, inventory monitoring, process improvement, audits, compliance, performance reporting, demand coordination, data analysis, and real-time operational problem solving.",
    ],
    reflection: [
      "The experience became an important influence on my later research interests. I saw firsthand how workers interact with automated systems, performance metrics, operational software, and organizational processes at scale. It made me increasingly interested in the relationship between technology and the people expected to work through it.",
      "That experience ultimately contributed to my decision to return to graduate school and now informs my interest in human-AI collaboration, sociotechnical systems, workforce development, and technologies designed to augment rather than constrain human capability.",
    ],
  },
  {
    id: "pitt-shrs",
    org: "University of Pittsburgh School of Health and Rehabilitation Sciences",
    titles: ["Data Consultant, Master of Quantitative Economics Capstone"],
    description: [
      "For my graduate capstone, I developed a data and decision-support system for the University of Pittsburgh School of Health and Rehabilitation Sciences.",
    ],
    repo: {
      label: "github.com/gabrielpriante/MQE-Capstone",
      href: "https://github.com/gabrielpriante/MQE-Capstone",
    },
    bullets: [
      "Built a Python data pipeline integrating 11 federal data sources and more than 30 internal institutional files through 13 modular extraction clients.",
      "Developed a configurable scoring system combining labor demand, institutional, and financial indicators into program-level decision metrics.",
      "Designed a YAML-based configuration architecture allowing nontechnical staff to update programs, scoring weights, and data mappings without modifying source code.",
      "Built an interactive R Shiny dashboard with real-time controls, benchmark normalization, and Plotly visualizations.",
      "Separated the analytical pipeline from the presentation layer through a decoupled JSON interface for easier maintenance and independent development.",
      "Deployed the application, managed its GitHub repository, and completed stakeholder handoff with documentation and hosting credentials.",
      "Authored a maintenance manual designed to allow the system to remain operational with minimal annual technical upkeep.",
    ],
    stack:
      "Tools: Python · R Shiny · YAML · Plotly · GitHub · shinyapps.io · BLS · OEWS · IPEDS · O*NET",
  },
];
