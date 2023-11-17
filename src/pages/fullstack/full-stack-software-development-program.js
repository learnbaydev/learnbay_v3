import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FSSPDataScienceCourseData } from "../../../Data/FullStackSoftwareProgram";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";

const FirstSection = dynamic(() =>
  import("../../../components/CoursePage/FirstSection/FirstSection")
);
const SecondSection1 = dynamic(() =>
  import("../../../components/SecondSection/SecondSection")
);
const WhatsappFloat = dynamic(() =>
  import("../../../components/WhatappsFloat/WhatsappFloat")
);
const SecondSection = dynamic(() =>
  import("../../../components/CoursePage/SecondSection/SecondSection")
);
const SeventhSection = dynamic(() =>
  import("../../../components/Global/SeventhSection/SeventhSection")
);
const Testimonial = dynamic(() =>
  import("../../../components/HomePage/Testimonial/Testimonial")
);
const WhoProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoProgram/ThirdSection")
);
const Switch = dynamic(() =>
  import("../../../components/HomePage/switch/switch")
);

const ToolsCovered = dynamic(() =>
  import("../../../components/CoursePage/ToolsCovered/ToolsCovered")
);
const FeeSection = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);
const FourthSection = dynamic(() =>
  import("../../../components/CoursePage/FourthSection/FourthSection")
);

const Project = dynamic(() =>
  import("../../../components/CoursePage/Project/Project")
);
const SyllabusNew = dynamic(() =>
  import("../../../components/CoursePage/Syllabus/MasterSyllabus")
);

const Certificate = dynamic(() =>
  import("../../../components/CoursePage/Certificate/Certificate")
);
const FAQNew = dynamic(() =>
  import("../../../components/CoursePage/FAQNew/FAQNew")
);
const BatchDetails = dynamic(() =>
  import("../../../components/CoursePage/BatchDetails/BatchDetails")
);

const SecondNavbar = dynamic(() =>
  import("../../../components/CoursePage/SecondNavbar/SecondNavbar")
);
const ContactConsellor = dynamic(() =>
  import(
    "../../../components/MastersCourse/ContactCounsellor/ContactCounsellor"
  )
);
const feesbatch = dynamic(() =>
  import("../../../components/CoursePage/FeeSection/FeeSection")
);

const SliderTab = dynamic(() =>
  import("../../../components/CoursePage/SliderTabs/SliderTabs")
);

const WhoIsProgram = dynamic(() =>
  import("../../../components/CoursePage/WhoIsProgram/WhoIsProgram")
);

const OfferPopup = dynamic(() =>
  import("../../../components/OfferPopup/OfferPopup")
);
const BottomBar = dynamic(() =>
  import("../../../components/WebPage/BottomBar/BottomBar")
);
const ContactUs = dynamic(() =>
  import("../../../components/HomePage/ContactUs/ContactUs")
);
const NewProjectSection = dynamic(() =>
  import("../../../components/CoursePage/NewProjectSection/NewProjectSection")
);
const MentorsSection = dynamic(() =>
  import("../../../components/MastersCourse/MentorsSection/MentorsSection")
);
const TrainerSection = dynamic(() =>
  import("../../../components/HomePage/TrainerSection/TrainerSection")
);
// import SecondNavbar from "../../../components/CoursePage/SecondNavbar/SecondNavbar";
const WhyLearnbay = dynamic(() =>
  import("../../../components/CoursePage/WhyLearnbay/WhyLearnbay")
);

// const Gethire = dynamic(() =>
//   import("../../../components/CoursePage/Gethired/Gethire")
// );
const GetHire = dynamic(() =>
  import("../../../components/HomePage/GetHire/GetHire")
);
const PlacementCall = dynamic(() =>
  import("../../../components/CoursePage/PlacementCall/PlacementCallFsd")
);

function Blockchain({}) {
  // POPUP GET METHOD
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    // console.log("inside UseEFFect");
    const fetchPopup = async () => {
      const data = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
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
            if (popupData === "Adv Data Science and AI") {
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

  const [batchDateData, setBatchDateData] = useState("");

  useEffect(() => {
    const fetchBatch = async () => {
      const data = await fetch("/api/BatchDetails/getBatchDetails", {
        method: "POST",
        body: JSON.stringify("Data Science and AI"),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(data.status);
      if (data.status === 200) {
        const { batchDate } = await data.json();

        setBatchDateData(batchDate);

        console.log("Batch Date Response:", batchDate);
      }
    };
    fetchBatch();
  }, []);

  const [progress, setProgress] = useState(20);

  return (
    <>
      <Head>
        <title>Full-Stack Software Development Program - Learnbay</title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Software Development Certification Program"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/fullstack/full-stack-software-development-program"
        />

<script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: ` {
              {
                "@context": "http://schema.org",
                "@type": "Course",
                "name": "Software Development Certification Program",
                "description": "Upskill and switch from service-based to product-based companies with our Software development Certification Program.",
                "url": "https://www.learnbay.co/fullstack/full-stack-software-development-program",
                 "provider": {
                      "@type": "Organization",
                      "name": "Learnbay",
                      "Url": "https://www.learnbay.co/"
                    },
                "coursePrerequisites": "Nothing but basic coding knowledge is required to start with this course.", 
                "hasCourseInstance": [
                  {
                    "@type": "CourseInstance",
                    "courseMode": "Online, In-Person",
                    "courseFee": {
                      "@type": "PriceSpecification",
                      "price": "₹ 1,15,000 + 18% GST",
                      "priceCurrency": "INR"
                    }
                  }
                ]
              }
} `,
          }}
        />


      </Head>
      <main>
        <Navbar popup={true} dataScienceCounselling={true} />
        <FirstSection
          // FirstTyped="Guaranteed Interview Calls"
          // SecondTyped="Capstone Project Certificate"
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Software Development Certification Program"
          cityParaCont="Upskill and switch from service-based to product-based companies"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/fullhead.webp"
          firstToparaImg=""
          firstHeading="Software Development Certification Program"
          firstTopPara="Crack Interview in Top MNCs"
          idss="bfl64ANfSV0"
          softwareBtnHide={true}
        />
        <SecondSection
          SecondSectionData={FSSPDataScienceCourseData[0].secondSection}
        />
        {/* <WhoProgram
          dataScience={true}
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-who.webp"
          ThirdSectionData={FSSPDataScienceCourseData[0].thirdSection}
        /> */}
        <TrainerSection idss="eautK0odE7Q" />
        <SecondSection1 />

        <WhoIsProgram
          first="Bachelor's degree with consistent good academics"
          second="1+ year(s) experience in IT domain"
          third="Students pursuing B.Tech and B.Sc. in computer science"
          forth="For individuals seeking software development skills"
        />
        <GetHire />
        {/* <Switch /> */}
        {/* <FourthSection
          placementData={FSSPDataScienceCourseData[0].fourthSection}
          redirectDS={true}
          dataScience={true}
          titleCourse="Data Science Placement Report"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Placement+Report.pdf"
        /> */}

        <ContactConsellor />

        <SyllabusNew
          masterSyllabusMobile={
            FSSPDataScienceCourseData[0].masterSyllabusMobile
          }
          syllabusHead={FSSPDataScienceCourseData[0].syllabusHead}
          masterSyllabus={FSSPDataScienceCourseData[0].masterSyllabus}
          MasterSyllabusDefault={
            FSSPDataScienceCourseData[0].MasterSyllabusDefault
          }
          dataScienceCounselling={true}
          dataScience={true}
          titleCourse="Software Development Certification Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          syllabus={FSSPDataScienceCourseData[0].syllabus}
          syllabusDesc={FSSPDataScienceCourseData[0].syllabusDesc}
          popupHead={FSSPDataScienceCourseData[0].popupHead}
          progress={progress}
          setProgress={setProgress}
          buttonHide={true}
        />

        {/* <Certificate data={FSSPDataScienceCourseData[0].Certificate} /> */}
        <FeeSection
          Fee="₹ 1,15,000"
          FeeEmi="₹ 7,538/month"
          weekdaybatch="Weekday Batch"
          weekendbatch="Weekday Batch"
          weekday="MON-WED-FRI"
          weekend="MON-WED-FRI"
          WeekdayDate="Nov 17th"
          WeekendDate="Nov 24th"
          WeekendTime="07:30AM - 09:30AM"
          WeekdayTime="08:00PM - 10:00PM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          dataScienceCounselling={true}
        />
        <MentorsSection />

        <SliderTab />

        <PlacementCall />

        {/* {batchDateData === "" ? (
          ""
        ) : (
          <BatchDetails batchDetails={batchDateData.batchDetails} />
        )} */}

        {/* <NewProjectSection
          dataScience={true}
          titleCourse="Software Development Certification Program"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Software+Developer+Certification.pdf"
          projectSection={FSSPDataScienceCourseData[0].projectSection}
        /> */}

        <FAQNew FAQNewData={FSSPDataScienceCourseData[0].faq} />
        <SeventhSection />
        <Footer />
        <BottomBar />
        <WhatsappFloat />
        {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
      </main>
    </>
  );
}
export default Blockchain;
