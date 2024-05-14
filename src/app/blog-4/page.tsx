import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogWithRightSidebarStyle2 from '../../components/Blog/BlogWithRightSidebarStyle2';

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Right Sidebar" />

      <BlogWithRightSidebarStyle2 />

      <Footer />
    </>
  );
};
