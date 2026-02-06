import { useState } from "react";
import { Download, Eye } from "lucide-react";
import SyllabusModal from "../components/SyllabusModal/SyllabusModal";
import styles from "../styles/SyllabusPage.module.css"; // Your page styles

export default function SyllabusPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState("");

  const S3_LINK =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf";

  const handlePreview = () => {
    setSelectedPdf(S3_LINK);
    setModalOpen(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1>AI Engineering Course</h1>
        <p>Master GenAI and Data Science with our comprehensive curriculum.</p>

        <div className={styles.buttonGroup}>
          {/* 1. Preview Button (Opens Modal) */}
          <button onClick={handlePreview} className={styles.viewBtn}>
            <Eye size={18} style={{ marginRight: "8px" }} />
            Preview Syllabus
          </button>

          {/* 2. Direct Download Button */}
          <a href={S3_LINK} download className={styles.downloadBtn}>
            <Download size={18} style={{ marginRight: "8px" }} />
            Download PDF
          </a>
        </div>
      </div>

      {/* The Modal Component sits here, initially hidden */}
      <SyllabusModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        pdfUrl={selectedPdf}
        title="Data Science & GenAI Master Program"
      />
    </div>
  );
}
