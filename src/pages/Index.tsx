import CustomCursor from "@/components/restaurant/CustomCursor";
import Navbar from "@/components/restaurant/Navbar";
import Hero from "@/components/restaurant/Hero";
import AwardBadges from "@/components/restaurant/AwardBadges";
import TastingMenu from "@/components/restaurant/TastingMenu";
import HeadChef from "@/components/restaurant/HeadChef";
import FlavorProfiles from "@/components/restaurant/FlavorProfiles";
import WinePairing from "@/components/restaurant/WinePairing";
import Ambiance from "@/components/restaurant/Ambiance";
import KitchenAction from "@/components/restaurant/KitchenAction";
import Excellence from "@/components/restaurant/Excellence";
import Philosophy from "@/components/restaurant/Philosophy";
import DressCode from "@/components/restaurant/DressCode";
import Reviews from "@/components/restaurant/Reviews";
import ReserveCTA from "@/components/restaurant/ReserveCTA";

const Index = () => (
  <div className="bg-background min-h-screen">
    <CustomCursor />
    <Navbar />
    <Hero />
    <AwardBadges />
    <TastingMenu />
    <HeadChef />
    <FlavorProfiles />
    <WinePairing />
    <Ambiance />
    <KitchenAction />
    <Excellence />
    <Philosophy />
    <DressCode />
    <Reviews />
    <ReserveCTA />
  </div>
);

export default Index;
