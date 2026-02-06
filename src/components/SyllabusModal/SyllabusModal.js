import React, { useEffect } from "react";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import styles from "./SyllabusModal.module.css";

// Dynamic import to prevent SSR issues with react-pdf
const PdfViewer = dynamic(() => import("../PdfViewer/PdfViewer"), {
  ssr: false,
});

export default function SyllabusModal({ isOpen, onClose, pdfUrl, title }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{title || "Course Syllabus"}</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className={styles.body}>
          {/* Only render PDF if URL exists */}

          {pdfUrl ? <PdfViewer fileUrl={pdfUrl} /> : <p>No PDF Selected</p>}
        </div>
      </div>
    </div>
  );
}
