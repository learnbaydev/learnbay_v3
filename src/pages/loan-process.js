import { useEffect, useState } from "react";
import Footer from "../components/Global/Footer/Footer";
import Navbar from "../components/Global/Navbar/Navbar";
import LoanProcess from "@/components/LoanProcess/LoanProcess";
import { useRouter } from "next/router";

const ThankYouDemo = () => {
  const [formData, setFormData] = useState({
    course: "",
    totalAmount: "",
    date: "",
    time: "",
  });
  const router = useRouter();
  useEffect(() => {
    const { course, amount, date, time } = router.query;
    setFormData({ course, totalAmount: amount, date, time });
  }, [router.query]);

  return (
    <div>
      <Navbar />
      <LoanProcess
        course={formData.course}
        totalAmount={formData.totalAmount}
        date={formData.date}
        time={formData.time}
      />
      <Footer />
    </div>
  );
};

export default ThankYouDemo;
