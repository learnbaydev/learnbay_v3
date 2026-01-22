import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./PdfViewer.module.css";

// Using a local worker from the cdn to ensure compatibility
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PdfViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  // This handles the responsive width so the PDF fits the container
  useEffect(() => {
    const updateWidth = () => {
      const element = document.getElementById("pdf-container");
      if (element) {
        setContainerWidth(element.clientWidth - 40); // Subtract padding
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.error("PDF Load Error:", error);
  }

  return (
    <div className={styles.mainContent}>
      {/* Navigation Controls */}
      <div className={styles.controls}>
        <button
          type="button"
          className={styles.navButton}
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber((prev) => prev - 1)}
        >
          <ChevronLeft size={20} />
        </button>

        <span className={styles.pageIndicator}>
          {pageNumber} / {numPages || "--"}
        </span>

        <button
          type="button"
          className={styles.navButton}
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* PDF Container */}
      <div id="pdf-container" className={styles.pdfWrapper}>
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div className={styles.loadingState}>Loading Syllabus...</div>
          }
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth || 600}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}
