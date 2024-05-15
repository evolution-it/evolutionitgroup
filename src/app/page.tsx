import React from "react";
import Navbar from "../components/Layout/Navbar";
import MainBanner from "../components/ITStartup/MainBanner";
import OurFeatures from "../components/ITStartup/OurFeatures";
import Partner from "../components/Common/Partner";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "../components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <OurFeatures />

      <Partner />

      <ContactForm />

      <Footer />
    </>
  );
}
