import React from "react";
import Navbar from "@/components/Global/Navbar/Navbar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
import SessionSection from "@/components/ThankYouNew/SessionSection";
import WhyChooseUsSection from "@/components/ThankYouNew/WhyChooseUsSection";
import Footer from "@/components/Global/Footer/Footer";
import ApplyforCouncelling from "@/components/ThankYouNew/ApplyforCouncelling";

const NewThankCounselling = ({ initialName, initialPhone }) => {
  return (
    <>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />

      <div style={{ marginTop: "80px" }}>
        <ApplyforCouncelling
          initialName={initialName}
          initialPhone={initialPhone}
        />

        <SessionSection />
        <WhyChooseUsSection />

        <main
          style={{
            padding: "32px",
            maxWidth: 1000,
            margin: "0 auto",
          }}
        ></main>
      </div>

      <Footer />
      <WhatsappFloat />
    </>
  );
};

export default NewThankCounselling;
