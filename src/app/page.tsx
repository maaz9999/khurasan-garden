import { Hero3D } from "@/components/home/Hero3D";
import { TrustStrip } from "@/components/home/TrustStrip";
import { MoreThanLand } from "@/components/home/MoreThanLand";
import { ScrollingBoulevard } from "@/components/home/ScrollingBoulevard";
import { AmenitiesPreview } from "@/components/home/AmenitiesPreview";
import { PlotPreview } from "@/components/home/PlotPreview";
import { LocationSection } from "@/components/home/LocationSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero3D />
      <TrustStrip />
      <MoreThanLand />
      <ScrollingBoulevard />
      <AmenitiesPreview />
      <PlotPreview />
      <LocationSection />
      <FinalCTA />
    </>
  );
}
