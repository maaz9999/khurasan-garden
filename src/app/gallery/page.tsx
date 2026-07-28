import { Metadata } from "next";
import { MasonryGallery } from "@/components/home/MasonryGallery";

export const metadata: Metadata = {
  title: "Masterplan Gallery & Architectural Impressions",
  description: "Explore the visual portfolio, architectural impressions, and masterplan renders for Khurasan Garden on M-9 Karachi.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 bg-[#092E3A] min-h-screen">
      <MasonryGallery />
    </div>
  );
}
