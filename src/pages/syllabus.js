import dynamic from "next/dynamic";
import styles from "../components/PdfViewer/PdfViewer.module.css";
import { Download, Eye } from "lucide-react";

const PdfViewer = dynamic(() => import("../components/PdfViewer/PdfViewer"), {
  ssr: false,
  loading: () => <p>Loading PDF Viewer...</p>,
});

export default function Syllabus() {
  const S3_LINK =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026_live/Data_Science_and_GenAI_Master_Program.pdf";
  const DOWNLOAD_LINK =
    "https://brochureslearnbay.s3.ap-south-1.amazonaws.com/2026/Data_Science_and_GenAI_Master_Program.pdf";

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.mainContent}>
          {/* <h1 className={styles.title}>AI Engineering Syllabus</h1> */}

          <PdfViewer fileUrl={S3_LINK} />

          <div className={styles.buttonGroup}>
            {/* <a href={S3_LINK} target="_blank" className={styles.viewBtn}>
              <Eye size={18} /> Live S3 View
            </a> */}
            <a href={DOWNLOAD_LINK} download className={styles.downloadBtn}>
              <Download size={18} /> Download Syllabus
            </a>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.bannerCard}>
            <div className={styles.bannerContent}>
              <img
                src="/microsoft-logo.png"
                alt="Microsoft"
                style={{ height: "30px" }}
              />
              <h3>Microsoft AI Program</h3>
              <p style={{ color: "#666", fontSize: "14px" }}>
                Application Closes on 4th Feb
              </p>
              <button className={styles.applyBtn}>Apply Now</button>
              <hr style={{ border: "0.5px solid #eee" }} />
              <p style={{ fontSize: "13px", marginTop: "15px" }}>
                Need to know more?
              </p>
              <button
                style={{
                  width: "100%",
                  border: "1px solid #2563eb",
                  color: "#2563eb",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "none",
                  fontWeight: "bold",
                }}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
