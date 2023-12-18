import Head from "next/head";
import Navbar from "../components/Global/Navbar/Navbar";
import Footer from "../components/Global/Footer/Footer";
import BottomBar from "../components/Global/BottomBar/BottomBar";
import { DataScienceCourseData } from "../Data/AdvanceDataScienceCourse";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("../components/Global/Button/Button"));
const GoogleReview = dynamic(() =>
  import("../components/StaticPage/SuccessStory/GoogleReview/GoogleReview")
);
const LinkedinReview = dynamic(() =>
  import("../components/StaticPage/SuccessStory/LinkedinReview/LinkedinReview")
);
const TrainerSection = dynamic(() =>
  import("../components/StaticPage/SuccessStory/TrainerSection/TrainerSection")
);
const ReviewCourse = dynamic(() =>
  import("../components/StaticPage/SuccessStory/ReviewCourse/ReviewCourse")
);
const ReviewSwitch = dynamic(() =>
  import("../components/StaticPage/SuccessStory/ReviewSwitch/ReviewSwitch")
);
const VideoReview = dynamic(() =>
  import("../components/StaticPage/SuccessStory/VideoReview/VideoReview")
);
const Testimonial = dynamic(() =>
  import("../components/Global/Testimonial/Testimonial")
);
export default function Home() {
  return (
    <div>
      <Head>
        <title>Success Story</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Learnbay - The best online professional learning platform, has received numerous positive student reviews. Gain knowledge and make sound decisions. Join today!"
        />
        <link rel="canonical" href="https://www.learnbay.co/reviews" />
        <link
          rel="icon"
          href="https://d32and0ii3b8oy.cloudfront.net/web/s3_main/cloud-computing/website-icon.webp"
        />
      </Head>
      <main>
        {" "}
        <Navbar
          popup={true}
          dataScienceCounselling={true}
          radio={true}
          interstedInHide={true}
        />
        <TrainerSection idss="eautK0odE7Q" />
        <LinkedinReview />
        <GoogleReview />
        {/* <VideoReview idss="YWxTtvb3x-U" /> */}
        <ReviewCourse />
        <ReviewSwitch />
        <Testimonial
          redirectDS={true}
          heading="Alumni Review"
          Testimonial={DataScienceCourseData[0].testimonial}
        />
        <Footer />
        <BottomBar radio={true} />
      </main>
    </div>
  );
}
