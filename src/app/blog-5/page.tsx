import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import BlogGridPost3 from "../../components/Blog/BlogGridPostStyle3";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Blog Grid" />

      <BlogGridPost3 />

      <Footer />
    </>
  );
};