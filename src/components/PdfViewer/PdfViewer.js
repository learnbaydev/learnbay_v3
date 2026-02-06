import React, { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import styles from "./PdfViewer.module.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// 1. Correct Worker Configuration for Next.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ fileUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  // 2. Resize Observer to handle Modal opening/resizing
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={styles.viewerContainer}>
      {/* Top Bar: Controls */}
      <div className={styles.controls}>
        <div className={styles.pageNav}>
          <button
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber((p) => p - 1)}
          >
            <ChevronLeft size={20} />
          </button>
          <span>
            {pageNumber} / {numPages || "--"}
          </span>
          <button
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber((p) => p + 1)}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className={styles.zoomNav}>
          <button onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}>
            <ZoomOut size={18} />
          </button>
          <span>{Math.round(scale * 100)}%</span>
          <button onClick={() => setScale((s) => Math.min(2.0, s + 0.1))}>
            <ZoomIn size={18} />
          </button>
        </div>
      </div>

      {/* PDF Render Area */}
      <div className={styles.scrollArea} ref={containerRef}>
        {containerWidth && (
          <Document
            file={fileUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div className={styles.loading}>Loading Syllabus...</div>}
            error={<div className={styles.error}>Failed to load PDF.</div>}
          >
            <Page
              pageNumber={pageNumber}
              width={containerWidth || 600} // Add 600 as a fallback
              scale={scale}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
      </div>
    </div>
  );
}
