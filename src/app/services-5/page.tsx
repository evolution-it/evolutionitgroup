import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ServicesStyle5 from "../../components/Services/ServicesStyle5";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Services Style Five" />

      <ServicesStyle5 />

      <Footer />
    </>
  );
}; 
