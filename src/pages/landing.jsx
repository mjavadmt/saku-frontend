import React from "react";

import Hero from "components/LandingPage/sections/Hero";
import FeaturesTiles from "components/LandingPage/sections/FeaturesTiles";
import FeaturesSplit from "components/LandingPage/sections/FeaturesSplit";
import Testimonial from "components/LandingPage/sections/Testimonial";
import Cta from "components/LandingPage/sections/Cta";
import Header from "components/LandingPage/layout/Header";
import Footer from "components/LandingPage/layout/Footer";
export const LandingPage = () => {
  return (
    <>
      <Header navPosition="right" className="reveal-from-bottom" />
      <main className="site-content">
        <Hero className="illustration-section-01" />
        <FeaturesTiles />
        <FeaturesSplit
          invertMobile
          topDivider
          imageFill
          className="illustration-section-02"
        />
        <Testimonial topDivider />
        <Cta split />
      </main>
      <Footer />
    </>
  );
};
