import Navbar from '@/components/Global/Navbar/Navbar';
import WhatsappFloat from '@/components/Global/WhatappsFloat/WhatsappFloat';
import BrochureDemoSection from '@/components/ThankYouNew/BrochureDemoSection';
import SessionSection from '@/components/ThankYouNew/SessionSection';
import WhyChooseUsSection from '@/components/ThankYouNew/WhyChooseUsSection';
import ApplyforCouncelling from '@/components/ThankYouNew/ApplyforCouncelling';

import Footer from '../components/Global/Footer/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import SuccessPage from '../components/ThankYouNew/SuccessPage';
const ThankYouDemo = ({ initialName, initialPhone }) => {
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
    'ai-engineering-master-program':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/AI+Engineering+Program_compressed.pdf',

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
    'ai-engineering-master-program':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/AI+Engineering+Program_compressed.pdf',

    // Cloud & DevOps Category
    'cloud-network-pro':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Cloud_and_Devops_Engineering_For_Network_Professionals.pdf',
    'cloud-qa-pro':
      'https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Cloud_and_Devops_Engineering_For_QA.pdf',
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

  const router = useRouter();
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const courseId = sessionStorage.getItem('pending_syllabus');
    if (courseId && SYLLABUS_MAP[courseId] && pdfUrl === null) {
      setPdfUrl(SYLLABUS_MAP[courseId]);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Learnbay - Thank you</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay thank you, Explore more information for a smooth learning experience. Come join us today!"
        />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
        <link rel="canonical" href="https://www.learnbay.co/terms-conditions" />
      </Head>
      <Navbar
        popup={true}
        dataScienceCounselling={true}
        interstedInHide={true}
      />
      {/* <div style={{ marginTop: '80px' }}>
        <BrochureDemoSection pdfUrl={pdfUrl} />

        <SessionSection />
        <WhyChooseUsSection />
        <main
          style={{ padding: '32px', maxWidth: 1000, margin: '0 auto' }}
        ></main>
      </div> */}

      <div style={{ marginTop: '80px' }}>
        {/* <ApplyforCouncelling
          initialName={initialName}
          initialPhone={initialPhone}
          mainText={'Your Brochure Is Ready!'}
          subText={'You’re one step closer to upgrading your career'}
          pdfUrl={pdfUrl}
        /> */}

        {/* <SuccessPage /> */}
        <SuccessPage
          option1={'View Syllabus'}
          option2={' Your brochure is ready — and so is your counselor'}
          pdfUrl={pdfUrl}
        />
        <SessionSection />
        <WhyChooseUsSection />

        <main
          style={{
            padding: '32px',
            maxWidth: 1000,
            margin: '0 auto',
          }}
        ></main>
      </div>
      {/* <BrochureDemoSection pdfUrl={pdfUrl} /> */}
      <Footer />
      <WhatsappFloat />
    </>
  );
};
export default ThankYouDemo;
