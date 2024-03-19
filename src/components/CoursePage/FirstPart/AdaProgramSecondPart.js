import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import BottomBar from "../../Global/BottomBar/BottomBar";
import WhatsappFloat from "@/components/Global/WhatappsFloat/WhatsappFloat";
const GetHire = dynamic(() => import("../../MastersCourse/GetHire/GetHire"));
const ContactCounsellor = dynamic(() =>
    import("../ContactCounsellor/ContactCounsellor")
);
const SyllabusNew = dynamic(() =>
    import("../../CoursePage/Syllabus/MasterSyllabus")
);
const ToolsCovered = dynamic(() =>
    import("../../CoursePage/ToolsCovered/ToolsCovered")
);
const OfferPopup = dynamic(() => import("../../Global/OfferPopup/OfferPopup"));
const Certificate = dynamic(() => import("../../MastersCourse/Certificate/Certificate"));
const FeeSection = dynamic(() =>
    import("../../CoursePage/FeeSection/FeeSection")
);
const MentorsSection = dynamic(() =>
    import("../../Global/MentorsSection/MentorsSection")
);
const SliderTabs = dynamic(() => import("../../Global/SliderTabs/SliderTabs"));
const PlacementCall = dynamic(() =>
    import("../../Global/PlacementCall/PlacementCall")
);
const NewProjectSection = dynamic(() =>
    import("../../Global/NewProjectSection/NewProjectSection")
);


const SeventhSection = dynamic(() =>
    import("../../Global/SeventhSection/SeventhSection")
);
const MobileTestimonial = dynamic(() => import("@/components/Home/MobileTestimonial/MobileTestimonial"))

const Footer = dynamic(() => import("../../Global/Footer/Footer"));
const FAQNew = dynamic(() => import("../../CoursePage/FAQNew/FAQNewDomain"))

const ExecutiveSecondPart = ({
    CertificateData,
    masterSyllabusMobile,
    projectSection,
    FAQNewData,
    noguwatiimg,
}) => {
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
                        if (popupData === "Master in Cs") {
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
    return (
        <>
            <GetHire />
            <ContactCounsellor dataScienceCounselling={true} />
            <SyllabusNew
                masterSyllabusMobile={masterSyllabusMobile}
                dataScienceCounselling={true}
                dataScience={true}
                MastersContent={true}
                titleCourse="Masters in Computer Science: Data Science and AI"
                brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Copy+of+Data+Analytics+Certification+Program_compress.pdf"
                isguwati ={true}
            />
            <ToolsCovered
                deskImg="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Tools-Logo.png"
                mobImage="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/Mobile-Tools-Covered.png"
            />
            <Certificate data={CertificateData}
                Imgno={true}certificatedivide={true}

            />
            <FeeSection
                Fee="₹ 1,40,000"
                FeeEmi="9,178/month."
                weekdaybatch="Weekend Batch"
                weekendbatch="Weekday Batch"
                weekday="SAT-SUN"
                weekend="MON- FRI"
                WeekdayDate="JAN 14th"
                WeekendDate="MAR 25th"
                WeekendTime="08:00 PM - 9:00 PM"
                WeekdayTime="09:30 AM - 1:00 PM"
               
                FeeContent3="Flexible payment"
                FeeContent4="Easy loan procedure"
                FeeContent5="15 days refund policy"
                FeeContent6="No additional cost"
                dataScienceCounselling={true}

                // EMI POPUPDATA
                emiType="NO COST EMI"
                duration1="12 Months"
                totalAmount1="₹1,40,000"
                monthlyPayment1="₹13,767"
                greenDown1="Standard Intrest rate Applicable"
                duration2="18 Months"
                totalAmount2="₹1,40,000"
                monthlyPayment2="₹9,178"
            />
            <MentorsSection />
            <SliderTabs />
            <PlacementCall />
            <MobileTestimonial />
            <NewProjectSection
                dataScience={true}
                titleCourse="Masters in Computer Science: Data Science and AI"
                brochureLink="https://brochureslearnbay.s3.ap-south-1.amazonaws.com/NewCourseBrochure/iit-Guwahati/Copy+of+Data+Analytics+Certification+Program_compress.pdf"
                projectSection={projectSection}
            />
            {/* <FAQNew FAQNewData={DataScienceMastersinCS[0].faq} /> */}
            <FAQNew FAQNewData={FAQNewData} isguwati={true} isSpecial ={true}  />

            <SeventhSection />
            <Footer />
            <BottomBar masterdegree={true}
                dataScienceCounselling={true}
            />
            <WhatsappFloat />
            {popupData.length == 0 ? "" : <OfferPopup popupData={popupData} />}
        </>
    );
};

export default ExecutiveSecondPart;
