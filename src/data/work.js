export const workIntro =
  "This page covers applied professional experience, distinct from the research described on the Research page.";

export const organizations = [
  {
    id: "frontline-gig",
    org: "Frontline Gig / Frontline Labs",
    title: undefined,
    description:
      "Applied environmental research spanning environmental computer vision, field experimentation, drone sensing, machine learning, human-generated environmental datasets, and research collaboration.",
    bullets: [
      "Leads a drone-based environmental data collection program in partnership with community organizations, holding an FAA Part 107 Remote Pilot Certificate for commercial aerial data acquisition.",
      "Builds and maintains pipelines that visualize inspection data, tree canopy coverage, and project reach for executive and city stakeholders.",
      "Develops an open-source tree inventory pipeline using OpenDroneMap, DeepForest, and GeoPandas for automated inference from drone imagery.",
      "Created a machine learning routine for identifying optimal inspection locations, and streamlined the inspection-to-reporting pipeline to improve data quality and de-duplication.",
      "Cleans, geocodes, and prepares geospatial datasets, including CSV and shapefile sources with geographic boundary filtering, for ArcGIS Online integration.",
      "Established three cross-sector partnerships spanning academia, green construction, and environmental policy.",
    ],
  },
  {
    id: "upstreampgh",
    org: "UpstreamPGH",
    title: undefined,
    description:
      "GIS work on environmental equity, green infrastructure, geospatial data integration, field data collection, and environmental decision-support systems.",
    bullets: [
      "Builds an open-source neighborhood-level environmental map integrating public datasets to inform community policy decisions.",
      "Applies rain monitoring tools in ArcGIS to demonstrate environmental concerns quantitatively.",
      "Supports canvassing efforts, including survey question engineering and implementation of data collection.",
    ],
  },
  {
    id: "amazon",
    org: "Amazon",
    title: "Area Manager",
    description:
      "I worked in operations at an Amazon fulfillment facility, directly supporting the Pick department on the night shift and managing more than 50 direct reports.",
    inlineList: [
      "operational metric oversight",
      "audits",
      "inventory monitoring",
      "demand and supply coordination",
      "operational issue resolution",
      "process improvement",
      "compliance",
      "data analysis",
      "performance reporting",
      "business continuity",
      "team leadership",
    ],
    reflection: [
      "This experience was important intellectually as well as professionally. Working directly with a large frontline workforce in a highly automated and metrics-driven operational environment made me increasingly interested in the relationship between technology, organizational systems, and the people who operate within them.",
      "That experience contributed to my decision to return to graduate school and investigate more deeply how quantitative and computational systems can work better with and for people.",
    ],
  },
  {
    id: "pitt-shrs",
    org: "University of Pittsburgh School of Health and Rehabilitation Sciences",
    title: "Data Consultant, MQE Capstone",
    description:
      "This project was completed as part of my Master of Quantitative Economics program.",
    repo: {
      label: "github.com/gabrielpriante/MQE-Capstone",
      href: "https://github.com/gabrielpriante/MQE-Capstone",
    },
    bullets: [
      "Built a Python data pipeline ingesting 11 federal data sources and 30+ internal institutional files through 13 modular extraction clients.",
      "Engineered a scoring engine normalizing 11 dimensions into composite scores with weighted aggregation across Demand (50%), Institutional (30%), and Financial (20%) domains.",
      "Designed a YAML configuration system allowing non-technical staff to update programs, scoring weights, and data mappings without writing code.",
      "Built an interactive R Shiny dashboard with six tabs featuring real-time threshold sliders, benchmark normalization mode, and Plotly visualizations.",
      "Architected the system around a decoupled JSON contract separating the data pipeline from the presentation layer for independent maintainability.",
      "Deployed the system to shinyapps.io, managed the associated GitHub repository, and completed stakeholder handoff with hosting credentials and documentation.",
      "Authored a comprehensive maintenance manual designed to keep the dashboard operational with approximately 3 to 4 hours of annual upkeep.",
    ],
    stack:
      "Python · R Shiny · YAML · Plotly · GitHub · shinyapps.io · BLS · OEWS · IPEDS · O*NET",
  },
];
