import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import ContactForm from "../../components/Contact/ContactForm";

export default function Page() {
  return (
    <>
      <Navbar />

      <ContactForm />

      <Footer />
    </>
  );
}
