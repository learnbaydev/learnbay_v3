// pages/index.js
import React from "react";
import Banner from "../components/ThankYouNew/BrochureDemoSection";
import SessionSection from "@/components/ThankYouNew/SessionSection";
import WhyChooseUsSection from "@/components/ThankYouNew/WhyChooseUsSection";
import BrochureDemoSection from "../components/ThankYouNew/BrochureDemoSection";

export default function thankyounew() {
  return (
    <>
      <BrochureDemoSection />
      <SessionSection />
      <WhyChooseUsSection />

      <main
        style={{ padding: "32px", maxWidth: 1000, margin: "0 auto" }}
      ></main>
    </>
  );
}
