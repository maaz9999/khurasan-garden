export interface PlotCategory {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Farmhouse";
  sizes: string[];
  features: string[];
  bookingNotice: string;
  installmentPeriod: string;
  image: string;
  isArtistImpression: boolean;
  popular?: boolean;
}

export const plotCategoriesData: PlotCategory[] = [
  {
    id: "residential-plots",
    title: "Residential Plots",
    category: "Residential",
    sizes: ["80 Sq. Yards", "120 Sq. Yards", "200 Sq. Yards", "400 Sq. Yards"],
    features: [
      "Optimal orientation for natural sunlight",
      "Direct access to carpeted internal roads",
      "Proximity to parks & community mosque",
      "Underground drainage & water connections",
    ],
    bookingNotice: "Contact sales team for current block availability & official schedule",
    installmentPeriod: "Flexible Monthly / Quarterly Installment Plans",
    image: "/images/hero-khurasan-community.png",
    isArtistImpression: true,
    popular: true,
  },
  {
    id: "commercial-plots",
    title: "Commercial Plots",
    category: "Commercial",
    sizes: ["100 Sq. Yards", "200 Sq. Yards"],
    features: [
      "Prime positioning along main 100ft boulevard",
      "High visibility for retail & utility businesses",
      "Dedicated visitor parking bays",
      "Ideal long-term commercial investment corridor",
    ],
    bookingNotice: "Contact sales team for current block availability & official schedule",
    installmentPeriod: "Tailored Commercial Installment Plans",
    image: "/images/community-boulevard.png",
    isArtistImpression: true,
    popular: false,
  },
  {
    id: "premium-farmhouse",
    title: "Executive Plots & Corner Options",
    category: "Farmhouse",
    sizes: ["Park-Facing Blocks", "Main Boulevard Frontage", "Corner Plots"],
    features: [
      "Enhanced privacy & wider frontage views",
      "Immediate proximity to central green spaces",
      "Priority allocation in preferred sectors",
      "Designed for spacious custom family villas",
    ],
    bookingNotice: "Contact sales team for current block availability & official schedule",
    installmentPeriod: "Customized Payment Terms",
    image: "/images/future-home-cta.png",
    isArtistImpression: true,
    popular: false,
  },
];
