import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogWithRightSidebar from "../../components/Blog/BlogWithRightSidebar";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Right Sidebar" />

      <BlogWithRightSidebar />

      <Footer />
    </>
  );
};
