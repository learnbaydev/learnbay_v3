import BottomBar from '@/components/Global/BottomBar/BottomBar';
import Footer from '@/components/Global/Footer/Footer';
import SeventhSection from '@/components/Global/SeventhSection/SeventhSection';
import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
import dynamic from 'next/dynamic';
import LJourney from '../LJourney/LJourney';
const SyllabusNew = dynamic(() => import('../Syllabus/MasterSyllabus'));
const ToolsCovered = dynamic(() => import('../ToolsCovered/ToolsCovered'));
const Certificate = dynamic(
  () =>
    import('../../../components/CoursePage/UpdatedCertificate/UpdatedCertificate')
);
const FeeSection = dynamic(
  () => import('../../course/feeSection/FeeSectionCourse')
);
const MentorsSection = dynamic(
  () => import('../../../components/Global/MentorsSection/MentorsSection')
);
const SliderTab = dynamic(
  () => import('../../../components/Global/SliderTabs/SliderTabs')
);
const PlacementCall = dynamic(
  () => import('../../../components/Global/PlacementCall/PlacementCall')
);
const NewProjectSection = dynamic(
  () => import('../../../components/Global/NewProjectSection/NewProjectSection')
);

const FAQNew = dynamic(
  () => import('../../../components/CoursePage/FAQNew/FAQNew')
);
const Content = dynamic(
  () => import('../../../components/CoursePage/Content/content')
);
const MobileTestimonial = dynamic(
  () => import('@/components/Home/MobileTestimonial/MobileTestimonial')
);

const DSAFeeSection = dynamic(
  () => import('@/components/CoursePage/dsaFee/DSAFeeSection')
);

const SecondPart = ({
  masterSyllabusMobile,
  CertificateData,
  projectSection,
  FAQNewData,
}) => {
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

  return (
    <div>
      <LJourney />
      <SyllabusNew
        masterSyllabusMobile={masterSyllabusMobile}
        dataScienceCounselling={true}
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Science & AI Certification Program For Managers and Leaders"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
        brochurePdf="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Master_Program.pdf"
        buttonHide={true}
      />
      <ToolsCovered />
      <Certificate data={CertificateData} />
      {/* <FeeSection
        Fee="₹ 1,20,000 "
        FeeEmi="₹ 7,866/ month"
        // Hybrid Classes
        hybridFee="₹ 1,59,000"
        // hybridEmi="₹ 8,850/ month"
        // EMIPOPUP
        emiType="NO COST EMI"
        duration1="12 Months"
        totalAmount1="₹1,90,000"
        monthlyPayment1="₹14,094"
        greenDown1="Standard Interest Rates Applicable"
        duration2="12 Months"
        totalAmount2="₹2,10,000"
        monthlyPayment2="₹12,455"
        dataScienceCounselling={true}
        iitGuwatiGen={true}
        interstedInHide={true}
      /> */}

      <DSAFeeSection
        Fee="₹ 1,59,000 "
        FeeEmi="₹ 13,250/ month"
        // Hybrid Classes
        hybridFee="₹ 1,55,000"
        hybridEmi="₹ 10,161/ month"
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
      <SliderTab WithoutService={true} />
      <PlacementCall />
      <MobileTestimonial />
      <NewProjectSection
        dataScience={true}
        interstedInHide={true}
        titleCourse="Data Science & AI Certification Program For Managers and Leaders"
        brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf"
        brochurePdf="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Master_Program.pdf"
        projectSection={projectSection}
      />

      <FAQNew FAQNewData={FAQNewData} />
      <Content
        dataScienceCounselling={true}
        mangers={true}
        interstedInHide={true}
      />
      <SeventhSection />
      <Footer />
      <BottomBar dataScienceCounselling={true} interstedInHide={true} />
      <WhatsappFloat />
      {/* {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />} */}
    </div>
  );
};

export default SecondPart;
