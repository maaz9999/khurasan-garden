export type DevelopmentCategory =
  | "Roads"
  | "Infrastructure"
  | "Landscaping"
  | "Amenities"
  | "Construction";

export interface DevelopmentUpdate {
  id: string;
  date: string;
  category: DevelopmentCategory;
  title: string;
  description: string;
  progressPercentage: number;
  status: "Completed" | "In Progress" | "Upcoming";
  image: string;
  isPlaceholder: boolean;
}

export const developmentUpdatesData: DevelopmentUpdate[] = [
  {
    id: "main-gate-structure",
    date: "Q2 2026",
    category: "Infrastructure",
    title: "Main Entrance Gate Structure & Boundary Wall",
    description: "Structural groundwork and masonry for the security gate complex and perimeter security boundary wall.",
    progressPercentage: 65,
    status: "In Progress",
    image: "/images/khurasan-entrance.png",
    isPlaceholder: true,
  },
  {
    id: "boulevard-leveling",
    date: "Q1 2026",
    category: "Roads",
    title: "Main Boulevard Earthwork & Sub-Base Leveling",
    description: "Clearing, compaction, and leveling across the primary 100ft entrance boulevard and access corridors.",
    progressPercentage: 80,
    status: "In Progress",
    image: "/images/community-boulevard.png",
    isPlaceholder: true,
  },
  {
    id: "water-reservoir",
    date: "Q4 2025",
    category: "Infrastructure",
    title: "Water Reservoir Storage Excavation",
    description: "Initial deep excavation and reinforced concrete planning for primary underground water storage reservoirs.",
    progressPercentage: 45,
    status: "In Progress",
    image: "/images/hero-khurasan-community.png",
    isPlaceholder: true,
  },
  {
    id: "plantation-drive",
    date: "Q3 2025",
    category: "Landscaping",
    title: "Green Belt Plantation & Tree Nursery",
    description: "Planting of date palms and indigenous shade trees along the main access routes and park boundaries.",
    progressPercentage: 90,
    status: "Completed",
    image: "/images/amenity-family-park.png",
    isPlaceholder: true,
  },
  {
    id: "site-office-setup",
    date: "Q2 2025",
    category: "Construction",
    title: "On-Site Management Office",
    description: "Establishment of the on-site coordination facility to host visiting families and site tours.",
    progressPercentage: 100,
    status: "Completed",
    image: "/images/future-home-cta.png",
    isPlaceholder: true,
  },
];
