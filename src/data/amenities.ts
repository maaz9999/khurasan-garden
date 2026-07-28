export type AmenityCategory =
  | "Community"
  | "Wellness"
  | "Faith"
  | "Education"
  | "Security"
  | "Recreation"
  | "Commercial";

export type AmenityStatus = "Operational" | "Under Development" | "Planned";

export interface AmenityItem {
  id: string;
  title: string;
  category: AmenityCategory;
  status: AmenityStatus;
  shortDescription: string;
  fullDescription: string;
  image: string;
  isArtistImpression: boolean;
  featured: boolean;
  iconName: string;
}

export const amenitiesData: AmenityItem[] = [
  {
    id: "mosque",
    title: "Community Mosque",
    category: "Faith",
    status: "Planned",
    shortDescription: "A serene neighborhood mosque designed with contemporary arches and quiet courtyard landscaping.",
    fullDescription: "Positioned at the heart of the residential sector, the community mosque combines warm ivory stone, subtle traditional accents, and peaceful green walkways for daily prayers.",
    image: "/images/amenity-mosque.png",
    isArtistImpression: true,
    featured: true,
    iconName: "Landmark",
  },
  {
    id: "green-parks",
    title: "Landscaped Parks & Lawns",
    category: "Recreation",
    status: "Under Development",
    shortDescription: "Wide green belts, shade trees, walking trails, and seating zones for peaceful family outdoor time.",
    fullDescription: "Over 20% of the land footprint is allocated for green spaces, featuring bougainvillea-lined avenues, native date palms, and manicured lawns.",
    image: "/images/amenity-family-park.png",
    isArtistImpression: true,
    featured: true,
    iconName: "Trees",
  },
  {
    id: "fitness-centre",
    title: "Fitness & Wellness Club",
    category: "Wellness",
    status: "Planned",
    shortDescription: "Modern neighborhood health centre equipped for indoor workouts, yoga, and family fitness.",
    fullDescription: "A modern two-storey facility designed with floor-to-ceiling glass, dedicated cardio and strength training areas, and nearby jogging tracks.",
    image: "/images/amenity-fitness-centre.png",
    isArtistImpression: true,
    featured: true,
    iconName: "Dumbbell",
  },
  {
    id: "play-area",
    title: "Children's Safe Play Areas",
    category: "Recreation",
    status: "Under Development",
    shortDescription: "Car-free dedicated play zones with safe equipment where kids can play freely outdoors.",
    fullDescription: "Designed within sight of residential blocks, the play areas incorporate soft impact surfaces, shade structures, and perimeter fencing.",
    image: "/images/amenity-family-park.png",
    isArtistImpression: true,
    featured: false,
    iconName: "Baby",
  },
  {
    id: "community-hall",
    title: "Community Centre & Hall",
    category: "Community",
    status: "Planned",
    shortDescription: "A versatile space for family gatherings, social events, and resident meetings.",
    fullDescription: "Equipped with indoor event spaces, catering facilities, and outdoor terrace seating for neighborhood celebrations.",
    image: "/images/community-evening.png",
    isArtistImpression: true,
    featured: false,
    iconName: "Users",
  },
  {
    id: "school",
    title: "Primary & Secondary School",
    category: "Education",
    status: "Planned",
    shortDescription: "Convenient educational facilities located inside the boundary wall for safe daily commutes.",
    fullDescription: "Eliminating long travel times for young students, the planned school precinct integrates modern classrooms and sports grounds.",
    image: "/images/hero-khurasan-community.png",
    isArtistImpression: true,
    featured: false,
    iconName: "GraduationCap",
  },
  {
    id: "healthcare",
    title: "Dispensary & Health Clinic",
    category: "Wellness",
    status: "Planned",
    shortDescription: "First-aid, emergency response, and general medical care within walking distance.",
    fullDescription: "Providing round-the-clock peace of mind with basic diagnostic tools, pharmacy support, and trained medical personnel.",
    image: "/images/future-home-cta.png",
    isArtistImpression: true,
    featured: false,
    iconName: "HeartPulse",
  },
  {
    id: "commercial-area",
    title: "Commercial Pavilion & Market",
    category: "Commercial",
    status: "Under Development",
    shortDescription: "Daily grocery stores, pharmacy, bakery, and retail outlets for everyday necessities.",
    fullDescription: "Strategically located near the primary entrance boulevard to keep commercial traffic separated from quiet residential streets.",
    image: "/images/community-boulevard.png",
    isArtistImpression: true,
    featured: true,
    iconName: "ShoppingBag",
  },
  {
    id: "gated-security",
    title: "24/7 Gated Security",
    category: "Security",
    status: "Under Development",
    shortDescription: "Monitored entrance gates, perimeter boundary wall, and round-the-clock physical security patrols.",
    fullDescription: "A complete security system combining CCTV surveillance, controlled vehicular access, and trained staff for resident peace of mind.",
    image: "/images/khurasan-entrance.png",
    isArtistImpression: true,
    featured: true,
    iconName: "ShieldCheck",
  },
  {
    id: "wide-roads",
    title: "Wide Roads & Underground Utilities",
    category: "Community",
    status: "Under Development",
    shortDescription: "Smooth carpeted boulevards, street illumination, and engineered water reservoir storage.",
    fullDescription: "Spacious road network designed for smooth traffic flow, streetlights, underground drainage, and dedicated overhead water storage.",
    image: "/images/community-boulevard.png",
    isArtistImpression: true,
    featured: false,
    iconName: "Route",
  },
];
