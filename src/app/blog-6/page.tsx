import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogWithRightSidebarStyle3 from "../../components/Blog/BlogWithRightSidebarStyle3";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogWithRightSidebarStyle3 />

      <Footer />
    </>
  );
};
