import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DataScienceCourseData } from "../../Data/AdvanceDataScienceCourse";
import Navbar from "@/components/Global/Navbar/Navbar";
const FirstSection = dynamic(() =>
  import("../../components/CoursePage/FirstSection/FirstSection")
);
const SecondSection = dynamic(() =>
  import("../../components/CoursePage/SecondSection/SecondSection")
);
const SecondNavbar = dynamic(() =>
  import("../../components/CoursePage/SecondNavbar/SecondNavbar")
);
const WhoProgram = dynamic(() =>
  import("../../components/CoursePage/WhoProgram/ThirdSection")
);
const TrainerSection = dynamic(() =>
  import("../../components/CoursePage/TrainerSection/TrainerSection")
);


const Certificate = dynamic(() =>
  import("../../components/CoursePage/Certificate/Certificate")
);

const FeeSection = dynamic(() =>
  import("../../components/CoursePage/FeeSection/FeeSection")
);


const MentorsSection = dynamic(() =>
  import("../../components/Global/MentorsSection/MentorsSection")
);


const SliderTab = dynamic(() =>
  import("../../components/Global/SliderTabs/SliderTabs")
);


const PlacementCall = dynamic(() =>
  import("../../components/Global/PlacementCall/PlacementCall")
);

const NewProjectSection = dynamic(() =>
  import("../../components/Global/NewProjectSection/NewProjectSection")
);


const FAQNew = dynamic(() =>
  import("../../components/CoursePage/FAQNew/FAQNew")
);



function Blockchain({}) {
  // POPUP GET METHOD
  const [popupData, setPopupData] = useState([]);
  // console.log(popupData);
  useEffect(() => {
    const fetchData = async () => {
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Adv Data Science and AI")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }
    };

    fetchData();
  }, []);

  const [batchDateData, setBatchDateData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Fetch Popup Data
      const popupResponse = await fetch("/api/Popup/popupGenerate", {
        method: "GET",
      });
      if (popupResponse.status === 200) {
        const { popData } = await popupResponse.json();
        const foundPopup = popData.find((data) =>
          data.page.includes("Adv Data Science and AI")
        );
        if (foundPopup) {
          setPopupData(foundPopup);
        }
      }

      // Fetch Batch Data
      const batchResponse = await fetch("/api/BatchDetails/getBatchDetails", {
        method: "POST",
        body: JSON.stringify("Data Science and AI"),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (batchResponse.status === 200) {
        const { batchDate } = await batchResponse.json();
        setBatchDateData(batchDate);
      }
    };

    fetchData();
  }, []);

  const [progress, setProgress] = useState(20);

  return (
    <>
      <Head>
        <title>
          Artificial Intelligence and Data Science Course - Learnbay
        </title>
        <meta
          name="description"
          content="Upskill yourself with cutting edge Artificial Intelligence and Data Science Skills, Techniques by enrolling into the Learnbay's Advanced Data Science Course."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Advanced Data Science and AI Program with domain specialization"
        />
        <link
          rel="icon"
          href="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/Learnbay-Favicon-L.png"
        />
        <link
          rel="canonical"
          href="https://www.learnbay.co/datascience/advance-data-science-certification-courses"
        />
      </Head>
      <main>
        <Navbar
          radio={true}
          dataScienceCounselling={true}
          interstedInHide={true}
        />
        <FirstSection
          dataScienceCounselling={true}
          radio={true}
          interstedInHide={true}
          ThirdTyped="Live Interactive Classes"
          dataScience={true}
          titleCourse="Advance Data Science & AI Program with Domain Specialization"
          cityParaCont="Elevate your tech career with our Master's programs"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/learnbay/Advance+Data+Science+and+AI+Certification+Program+Learnbay.pdf"
          FirstRightImg="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-header.webp"
          firstToparaImg="with Domain Specialization"
          firstHeading="Advance Data Science & AI Program"
          firstTopPara="Curriculum Inclusive of Gen-AI"
        />
        <SecondSection
          SecondSectionData={DataScienceCourseData[0].secondSection}
        />
        <SecondNavbar />
        <WhoProgram
          dataScience={true}
          leftImage="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/advance-who.webp"
          ThirdSectionData={DataScienceCourseData[0].thirdSection}
        />
        <TrainerSection idss="eautK0odE7Q" />

        <Certificate data={DataScienceCourseData[0].Certificate} />
        <FeeSection
          Fee="₹ 1,25,000"
          FeeEmi="₹ 8,194/month"

          weekdaybatch="Weekday Batch"
          weekendbatch="Weekend Batch"
          weekday="MON - FRI"
          weekend="SAT-SUN"
          WeekdayDate="NOV 17th"
          WeekendDate="NOV 26th"
          WeekendTime="09:30 AM - 1:00 PM"
          WeekdayTime="08:00 AM - 10:00 AM"
          FeeContent3="Flexible payment"
          FeeContent4="Easy loan procedure"
          FeeContent5="15 days refund policy"
          FeeContent6="No additional cost"
          dataScienceCounselling={true}
        />

        <MentorsSection/>
        <SliderTab />
        <PlacementCall />
   
        <NewProjectSection
          dataScience={true}
          titleCourse="Advanced Data Science and AI Program with domain specialization"
          brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/Advanced+Data+Science+%26+AI++Certification+Program.pdf"
          projectSection={DataScienceCourseData[0].projectSection}
        />

       <FAQNew FAQNewData={DataScienceCourseData[0].faq} />
    
      </main>
    </>
  );
}
export default Blockchain;
