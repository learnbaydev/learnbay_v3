import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
import TyPageCta from '@/components/StaticPage/Thankyou/TyPageCta/TyPageCta';
import { useEffect, useState } from 'react';
import BottomBar from '../components/Global/BottomBar/BottomBar';
import Footer from '../components/Global/Footer/Footer';
import Navbar from '../components/Global/Navbar/Navbar';
// import FirstHeader from "../components/StaticPage/Thankyou/FirstHeader/FirstHeader";
import Survey from '../components/StaticPage/Thankyou/Survey/Survey';
import ThankStats from '../components/StaticPage/Thankyou/ThankStat/ThankStats';
import Head from 'next/head';
import cookies from 'next-cookies';
import CertificationCard from '../components/Home/newUI/CertificationCard/CertificationCard';
import { certificationCourses } from '../components/Home/newUI/NewCourse/NewCourseData';
import Firstcloud from '../components/StaticPage/Thankyou/FirstCloud/FirstCloud';
import ApplyforCouncelling from '@/components/ThankYouNew/ApplyforCouncelling';
import SuccessPage from '../components/ThankYouNew/SuccessPage';

const setCookie = (name, value, days, domain) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;domain=${domain}`;
};

const ThankYouDemo = ({ initialName, initialPhone }) => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const email = JSON.stringify(initialName);
  const phone = JSON.stringify(initialPhone);
  console.log(email); // Log the email to the console

  useEffect(() => {
    // Set the cookie with a domain that allows cross-origin access
    setCookie('yourCookieName', initialName, 30, '.learnbay.co');
    setCookie('yourCookieName', initialPhone, 30, '.learnbay.co');
  }, [initialName, initialPhone]);

  const dataArray = [];
  const [queryData, setQueryData] = useState({
    titleCourse: '',
    brochureLink: '',
  });
  const [data, setData] = useState(dataArray);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    for (const [key, value] of urlParams) {
      dataArray.push(value);
      setData(dataArray);
    }
    setQueryData(data);
  }, []);
  const showBrochureButton = !!data[1]; // Only true if brochureLink exists

  const SYLLABUS_MAP = {
    // Popular & Master Programs
    'ads-genai-master':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf',
    'genai-agentic-master':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/GenAI_and_Agentic_AI_Master_Program_for_Tech_Professionals.pdf',
    'cloud-devops-master':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/AI-Powered_Cloud_DevOps_Engineering_Master_Program.pdf',
    'sde-genai-master':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/SDE_Master_Program_for_Tech_Professionals.pdf',

    // GenAI & Agentic AI Category
    'genai-managers':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Managers_and_Leaders_GenAI_and_Agentic_AI_Program.pdf',
    'genai-cloud-devops':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/GenAI_and_Agentic_AI_for_Cloud_and_DevOps.pdf',
    'genai-software-dev':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/GenAI_and_Agentic_AI_for_Software_Developers.pdf',
    'genai-agentic-program':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/GenAI_and_Agentic_AI_Program.pdf',
    'applied-ai-practitioner':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/IIT_Patna_Applied_AI_Program.pdf',

    // Cloud & DevOps Category
    'cloud-network-pro':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Cloud_and_Devops_Engineering_For_Network_Professionals.pdf',
    'cloud-sys-admin':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Cloud_and_Devops_Engineering_For_System_Admin_Professionals.pdf',
    'adv-cloud-devops':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Advanced_Cloud_and_Devops_Program.pdf',
    'cloud-it-support':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Cloud_and_Devops_Engineering_For_ITS_and_ITOps_Professionals.pdf',
    'cloud-db-admin':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Cloud_and_Devops_Engineering_For_DBA_Professionals.pdf',

    // Data Science & GenAI Category
    'ds-genai-program':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Program.pdf',
    'genai-analytics':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/DABA_2026.pdf',

    // Academic
    'masters-cs-ds-genai':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Masters-in-CS.pdf',
  };

  useEffect(() => {
    const courseId = sessionStorage.getItem('pending_syllabus');
    console.log({ courseId, link: SYLLABUS_MAP[courseId], pdfUrl });
    if (courseId && SYLLABUS_MAP[courseId] && pdfUrl === null) {
      console.log({ courseId, link: SYLLABUS_MAP[courseId], pdfUrl });
      setPdfUrl(SYLLABUS_MAP[courseId]);
    }
  }, []);

  return (
    <div>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  'event': 'form_complete',
                  'enhanced_conversion_data': {
                    "email": ${email},
                    "phone": ${phone},
                  }
                });
              `,
          }}
        />
      </Head>
      <Navbar donwnload={showBrochureButton} brochureLink={data[1]} />
      {/* <FirstHeader
        donwnload={showBrochureButton}
        brochurePdf={showBrochureButton}
        brochureLink={data[1]}
      /> */}

      <div style={{ marginTop: '80px' }}>
        {/* <ApplyforCouncelling
          initialName={initialName}
          initialPhone={initialPhone}
        /> */}
        <SuccessPage
          option1={'View Syllabus'}
          option2={'Your Enquiry Is Successfully Registered'}
          pdfUrl={pdfUrl}
        />

        {/* <SessionSection /> */}
        {/* <WhyChooseUsSection /> */}

        <main
          style={{
            padding: '32px',
            maxWidth: 1000,
            margin: '0 auto',
          }}
        ></main>
      </div>
      <Firstcloud brochureLink={pdfUrl} />

      <ThankStats
        img1="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/NewDesignImage/GIF.gif"
        heading="Gain Clarity: Explore the possibilities and chart your Career Journey"
        // desc="tat point 1 here lorem ipsum doret trinkettat point 1 here lorem ipsum doret trinket tat point 1 here lorem ipsum doret trinket"
        head1="Explore Career Options:"
        head2="Embrace Opportunities:"
        head5="Personalized Goal:"
        head6="Strategize for Success:"
        para5="Bridge the gap between aspirations and expertise."
        para6="Overcome obstacles and maximize your potential."
        para1="Find your ideal path based on skills, interests, and goals."
        para2="Discover growth potential in emerging industries."
      />

      <TyPageCta brochureLink={data[1]} heading={data[0]} />
      <Survey
        header="Are you seeking the perfect course that will propel your career to new heights?"
        // topPara="ENTER SOME TEXT HERE PLACEHOLDER"
        para="Unleash your full potential with our personalized and tailored course suggestions that will guide you towards your ideal learning journey."
      />
      <BottomBar />
      <Footer />
      <WhatsappFloat />
      <BottomBar
        dataScienceCounselling={true}
        interstedInHide={true}
        radio={true}
      />
    </div>
  );
};

ThankYouDemo.getInitialProps = async (ctx) => {
  return {
    initialName: cookies(ctx).CARD || '',
    initialPhone: cookies(ctx).CARDPHONE || '',
  };
};

export default ThankYouDemo;
