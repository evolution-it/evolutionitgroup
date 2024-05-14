import React from "react";
import Navbar from "../../components/Layout/Navbar";
import MainBanner from "../../components/PCRepair/MainBanner";
import PartnerStyleTwo from "../../components/Common/PartnerStyleTwo";
import AboutUsContent from "../../components/PCRepair/AboutUsContent";
import Services from "../../components/PCRepair/Services";
import CTA from "../../components/PCRepair/CTA";
import FunFactsArea from "../../components/Common/FunFactsArea";
import Team from "../../components/PCRepair/Team";
import Feedback from "../../components/Common/Feedback";
import WhyChoose from "../../components/PCRepair/WhyChoose";
import BlogPost from "../../components/Common/BlogPost";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <PartnerStyleTwo />

      <AboutUsContent />

      <Services />

      <CTA />

      <FunFactsArea />

      <Team />

      <Feedback />

      <WhyChoose />

      <BlogPost />

      <Footer />
    </>
  );
};
