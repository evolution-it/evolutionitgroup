import React from "react";
import Navbar from "../components/Layout/Navbar";
import MainBanner from "../components/ITStartup/MainBanner";
import OurFeatures from "../components/ITStartup/OurFeatures";
import Partner from "../components/Common/Partner";

import Footer from "../components/Layout/Footer";
import ContactForm from "@/components/Contact/ContactForm";

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
