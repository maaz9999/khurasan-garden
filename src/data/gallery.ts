export interface GalleryItem {
  id: string;
  title: string;
  category: "Architectural Vision" | "Landscaping" | "Amenities" | "Community Life";
  image: string;
  ratio: "21:9" | "16:9" | "4:5" | "3:2";
  isArtistImpression: boolean;
  caption: string;
}

export const galleryItemsData: GalleryItem[] = [
  {
    id: "gal-hero",
    title: "Master Community Aerial View",
    category: "Architectural Vision",
    image: "/images/hero-khurasan-community.png",
    ratio: "21:9",
    isArtistImpression: true,
    caption: "Cinematic wide aerial architectural visualization of the residential community on the M-9 corridor.",
  },
  {
    id: "gal-entrance",
    title: "Signature Gated Entrance",
    category: "Architectural Vision",
    image: "/images/khurasan-entrance.png",
    ratio: "3:2",
    isArtistImpression: true,
    caption: "Contemporary entrance gateway featuring warm ivory stone and security infrastructure.",
  },
  {
    id: "gal-boulevard",
    title: "Landscaped Main Boulevard",
    category: "Landscaping",
    image: "/images/community-boulevard.png",
    ratio: "16:9",
    isArtistImpression: true,
    caption: "Wide smooth internal boulevard with central green belts and pedestrian paths.",
  },
  {
    id: "gal-family",
    title: "Family Lifestyle & Outdoor Lawns",
    category: "Community Life",
    image: "/images/family-lifelong-memories.png",
    ratio: "4:5",
    isArtistImpression: true,
    caption: "Multigenerational family gathering on landscaped lawn outside a modern home.",
  },
  {
    id: "gal-mosque",
    title: "Neighborhood Mosque Architecture",
    category: "Amenities",
    image: "/images/amenity-mosque.png",
    ratio: "4:5",
    isArtistImpression: true,
    caption: "Contemporary mosque design with warm ivory stone and courtyard greenery.",
  },
  {
    id: "gal-park",
    title: "Children's Park & Green Spaces",
    category: "Amenities",
    image: "/images/amenity-family-park.png",
    ratio: "4:5",
    isArtistImpression: true,
    caption: "Shaded play areas, flower gardens, and walking paths for peaceful afternoons.",
  },
  {
    id: "gal-fitness",
    title: "Community Fitness & Wellness Club",
    category: "Amenities",
    image: "/images/amenity-fitness-centre.png",
    ratio: "4:5",
    isArtistImpression: true,
    caption: "Two-storey fitness facility with floor-to-ceiling glass and modern gym amenities.",
  },
  {
    id: "gal-evening",
    title: "Blue Hour Community Ambiance",
    category: "Community Life",
    image: "/images/community-evening.png",
    ratio: "16:9",
    isArtistImpression: true,
    caption: "Peaceful evening view showing warm glowing lights across family residences.",
  },
  {
    id: "gal-home-cta",
    title: "Contemporary Residence Garden View",
    category: "Architectural Vision",
    image: "/images/future-home-cta.png",
    ratio: "16:9",
    isArtistImpression: true,
    caption: "Intimate perspective of a modern family villa opening to private gardens.",
  },
];
