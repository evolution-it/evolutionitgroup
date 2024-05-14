import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ProjectsCardStyle2 from "../../components/Projects/ProjectsCardStyle2";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Projects Style Two" />

      <ProjectsCardStyle2 />

      <Footer />
    </>
  );
};