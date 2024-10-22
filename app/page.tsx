import "remixicon/fonts/remixicon.css";

import LandingSection from "./components/storefront/LandingSection/LandingSection";
import LatestArrivals from "./components/storefront/LatestArrivals/LatestArrivals";
import OurCollections from "./components/storefront/OurCollections/OurCollections";
import AboutSection from "./components/storefront/AboutSection/AboutSection";
import Footer from "./components/storefront/Footer/Footer";

export default async function Home() {
  return (
    <section className="siteContainer">
      <section className="contentSection">
        <div className="contentContainer">
          <LandingSection />

          <LatestArrivals />

          <OurCollections />

          <AboutSection />

          <Footer />
        </div>
      </section>
    </section>
  );
}
