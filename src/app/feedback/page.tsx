import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import PageBanner from "../../components/Common/PageBanner";
import Feedback from "../../components/Common/Feedback";
import FeedbackStyleTwo from "../../components/Common/FeedbackStyleTwo";
import FeedbackStyleThree from "../../components/Common/FeedbackStyleThree";
import FeedbackStyleFour from "../../components/Common/FeedbackStyleFour";
import FeedbackStyleFive from "../../components/Common/FeedbackStyleFive";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Feedback or Testimonials" />

      <Feedback />

      <FeedbackStyleTwo />

      <FeedbackStyleThree />

      <FeedbackStyleFour />

      <FeedbackStyleFive />

      <Footer />
    </>
  );
};
