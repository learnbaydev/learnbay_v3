import BottomBar from '@/components/Global/BottomBar/BottomBar';
import Footer from '@/components/Global/Footer/Footer';
import SeventhSection from '@/components/Global/SeventhSection/SeventhSection';
import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import LJourney from '../LJourney/LJourney';
const SyllabusNew = dynamic(() => import('../Syllabus/MasterSyllabus'));
const ToolsCovered = dynamic(() => import('../ToolsCovered/ToolsCovered'));
const Certificate = dynamic(
  () => import('../UpdatedCertificate/UpdatedCertificate')
);
import BookDemo from '@/components/CoursePage/NewDSA/BookDemo/BookDemo';
const DSAFeeSection = dynamic(
  () => import('@/components/CoursePage/dsaFee/DSAFeeSection')
);
const MentorsSection = dynamic(
  () => import('../../Global/MentorsSection/MentorsSection')
);
const SliderTab = dynamic(() => import('../../Global/SliderTabs/SliderTabs'));
const PlacementCall = dynamic(
  () => import('../../Global/PlacementCall/PlacementCall')
);
const NewProjectSection = dynamic(
  () => import('../../Global/NewProjectSection/NewProjectSection')
);

import HighlightsSection from '@/components/CoursePage/newUICourse/Support/HighlightsSection';
const FAQNew = dynamic(() => import('../FAQNew/FAQNew'));
const Content = dynamic(() => import('../Content/content'));

const MobileTestimonial = dynamic(
  () => import('@/components/Home/MobileTestimonial/MobileTestimonial')
);

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
  Admission,
}) => {
  const [popupData, setPopupData] = useState([]);

  // const emiPopupProps = {
  //   emiType: 'No Cost EMI',
  //   duration1: '18 months',
  //   totalAmount1: '₹2,50,000',
  //   monthlyPayment1: '₹16,389',
  //   greenDown1: 'Standard Interest Rates Applicable',
  //   duration2: '24 months',
  //   totalAmount2: '₹2,50,000',
  //   monthlyPayment2: '₹12,292',
  //   greenDown2: 'Another Green Down Text',
  // };
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch('/api/Popup/popupGenerate', {
        method: 'GET',
      });
      if (data.status === 200) {
        const { popData } = await data.json();
        // console.log(popData, "get data");
        if (popData == []) {
          setPopupData([]);
        }

        popData.map((data, i) => {
          // console.log(data);
          data.page.map((popupData, i) => {
            // console.log(popData);
            if (popupData === 'Adv Data Science and AI') {
              setPopupData(data);
              // console.log(popupData);
              return;
            }
          });
        });
      }
    };
    fetchPopup();
  }, []);
  const pdfUrl =
    'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Master_Program.pdf';
  return (
    <div>
      <LJourney />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
        brochurePdf={pdfUrl}
        buttonHide={true}
      />
      <ToolsCovered />
      <BookDemo
        dataScienceCounselling={true}
        interstedInHide={true}
        upSkillingHide={true}
        Admission="Admission Process"
        Content="Our 3-step admission process clearly guides you through checking your eligibility, selecting the right course via expert counselling, and smoothly completing your enrollment. It's designed for simplicity and clarity."
        // greenButton={true}
      />
      <HighlightsSection />
      <Certificate data={CertificateData} />
      <DSAFeeSection
        Fee="₹ 1,59,000 "
        FeeEmi="₹ 13,250/ month"
        // Hybrid Classes
        hybridFee="₹ 1,59,000"
        // hybridEmi="₹ 10,161/ month"
        // EMIPOPUP
        emiType="Live online classes"
        duration1="12 Months"
        totalAmount1="₹1,90,000"
        monthlyPayment1="₹14,094"
        greenDown1="Hybrid Classes"
        duration2="12 Months"
        totalAmount2="₹2,10,000"
        monthlyPayment2="₹12,455"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
        interstedInHide={true}
      />

      <MentorsSection />
      <SliderTab />
      <PlacementCall />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        interstedInHide={true}
        titleCourse="Advanced Data Science and AI Program with domain specialization"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
        brochurePdf={pdfUrl}
        projectSection={projectSection}
      />

      <FAQNew FAQNewData={FAQNewData} />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </div>
  );
};

export default SecondPart;
