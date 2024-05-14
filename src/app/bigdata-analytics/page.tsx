import React from "react";
import NavbarStyleFour from "../../components/Layout/NavbarStyleFour";
import MainBanner from "../../components/BigdataAnalytics/MainBanner";
import WhatWeDo from "../../components/BigdataAnalytics/WhatWeDo";
import DiscoverArea from "../../components/BigdataAnalytics/DiscoverArea";
import Services from "../../components/BigdataAnalytics/Services";
import TeamStyleTwo from "../../components/Common/TeamStyleTwo";
import BigdataFunFacts from "../../components/BigdataAnalytics/BigdataFunFacts";
import Feedback from "../../components/BigdataAnalytics/Feedback";
import IndustriesWeServe from "../../components/BigdataAnalytics/IndustriesWeServe";
import BlogPost from "../../components/BigdataAnalytics/BlogPost";
import NewsletterStyleTwo from "../../components/Common/NewsletterStyleTwo";
import Footer from "../../components/Layout/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyleFour />

      <MainBanner />

      <WhatWeDo />

      <DiscoverArea />

      <Services />

      <TeamStyleTwo />

      <BigdataFunFacts />

      <Feedback />

      <IndustriesWeServe />

      <BlogPost />

      <NewsletterStyleTwo />

      <Footer />
    </>
  );
};
