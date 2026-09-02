// Central place for business info so it's easy to update in one spot.
// Replace the PLACEHOLDER values below with your real business details.

export const site = {
  name: "AUTOMEXUSA",
  tagline: "Mobile ADAS Calibration Specialists",
  shortDescription:
    "On-site ADAS calibration for collision centers, dealerships, independent shops, and vehicle owners across South Florida.",
  phone: "(561) 667-3437",
  phoneHref: "tel:+15616673437",
  email: "automexusa2020@gmail.com",
  address: "South Florida (mobile — we come to you)",
  hours: "Mon–Fri, 7:00 AM – 7:00 PM",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // PLACEHOLDER — see README
  social: {
    facebook: "#",
    instagram: "#",
  },
};

export const services = [
  {
    slug: "static-calibration",
    name: "Static ADAS Calibration",
    summary:
      "In-bay calibration using precision targets and OEM-specified measurements for cameras and sensors that require a controlled, stationary setup.",
    bullets: [
      "Level flooring and precision target placement per OEM specs",
      "Front & rear camera, radar, and lidar calibration",
      "Covers domestic, Asian, European, and exotic makes",
    ],
  },
  {
    slug: "dynamic-calibration",
    name: "Dynamic ADAS Calibration",
    summary:
      "Road-test calibration for systems that learn while the vehicle is driven at specified speeds and conditions, performed with OEM scan tools.",
    bullets: [
      "Guided road test following OEM drive-cycle requirements",
      "Real-time system monitoring during calibration",
      "Combined static + dynamic calibration when required",
    ],
  },
  {
    slug: "diagnostic-scanning",
    name: "Pre- & Post-Repair Diagnostic Scanning",
    summary:
      "Full-vehicle scans before and after repair to catch every trouble code and confirm all systems are functioning correctly before the vehicle leaves.",
    bullets: [
      "Complete pre-scan to document existing fault codes",
      "Post-repair scan to verify successful calibration",
      "Cloud-based scan reports emailed to you same day",
    ],
  },
  {
    slug: "module-programming",
    name: "Module Programming & Reprogramming",
    summary:
      "Programming and reprogramming of ADAS modules, including replacement components, using OEM-approved tools and procedures.",
    bullets: [
      "New module programming after part replacement",
      "Software updates and reflashes",
      "VIN-specific programming accuracy",
    ],
  },
  {
    slug: "windshield-camera-calibration",
    name: "Windshield Camera Calibration",
    summary:
      "Forward-facing camera calibration after windshield replacement — required on most modern vehicles for lane-keep and collision-avoidance systems to work correctly.",
    bullets: [
      "Performed after glass replacement or camera R&R",
      "Coordinated directly with glass shops",
      "Fast turnaround to keep vehicles moving",
    ],
  },
  {
    slug: "documentation-reports",
    name: "Documentation & Reports",
    summary:
      "Every calibration is documented with a detailed, cloud-based report — the paper trail insurers, shops, and customers expect.",
    bullets: [
      "Photo-verified before/after documentation",
      "Digital reports delivered same day",
      "Insurance-ready calibration records",
    ],
  },
];

export const serviceAreas = [
  "Miami",
  "Fort Lauderdale",
  "West Palm Beach",
  "Boca Raton",
  "Pompano Beach",
  "Coral Springs",
  "Hollywood",
  "Hialeah",
  "Delray Beach",
  "Deerfield Beach",
  "Boynton Beach",
  "Doral",
];

export const counties = ["Miami-Dade County", "Broward County", "Palm Beach County"];

export const customerTypes = [
  {
    title: "Collision Repair Centers",
    description:
      "Sublet ADAS calibration that fits into your repair workflow without tying up a bay — we come to you and document everything for insurance.",
  },
  {
    title: "Dealerships",
    description:
      "Overflow and after-hours calibration capacity so service departments can keep throughput high without adding fixed equipment costs.",
  },
  {
    title: "Independent Repair Shops",
    description:
      "Access to OEM-level calibration tools and expertise without the six-figure equipment investment.",
  },
  {
    title: "Vehicle Owners",
    description:
      "Had a windshield, bumper, or sensor replaced? We calibrate your safety systems on-site, wherever your car is parked.",
  },
];

export const whyUs = [
  {
    title: "We Come to You",
    description:
      "Fully mobile rigs mean calibrations happen in your bay, your lot, or your driveway — no towing, no downtime.",
  },
  {
    title: "OEM-Level Equipment",
    description:
      "Factory-specified targets, scan tools, and procedures for every make we service, kept current as OEM requirements change.",
  },
  {
    title: "Documented Every Time",
    description:
      "Photo-verified, cloud-based reports for every job — the paperwork insurers and shops actually need.",
  },
  {
    title: "Fast Turnaround",
    description:
      "Same-day and next-day scheduling across South Florida to keep vehicles — and your business — moving.",
  },
];
