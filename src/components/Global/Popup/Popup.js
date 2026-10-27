import React, { Children, isValidElement, useEffect } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import styles from "./Popup.module.css";
import lead from "./LeadPopup.module.css";
import { IoClose } from "react-icons/io5";
import { PiXBold } from "react-icons/pi";
import LeadPopupPanel from "./LeadPopupPanel";
import PopupDesignContext from "./PopupDesignContext";

const font = Plus_Jakarta_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--lb-popup-font",
});

const textOf = (node) =>
  typeof node === "string" || typeof node === "number"
    ? String(node)
    : Array.isArray(node)
      ? node.map(textOf).join("")
      : "";

/**
 * Reads what the page put inside the popup: whether it is the standard
 * `.RightPopup` lead form, its <h5> heading, and the Form's brochure props.
 * Pages build these elements themselves, so their props are visible here.
 */
function inspect(children, found = {}) {
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    const props = child.props || {};
    if (props.className === "RightPopup") found.leadForm = true;
    if (child.type === "h5" && found.heading === undefined) {
      found.heading = textOf(props.children).trim();
    }
    if (props.downloadBrochure) found.download = true;
    if (!found.program && typeof props.titleCourse === "string") {
      found.program = props.titleCourse.trim();
    }
    if (props.children) inspect(props.children, found);
  });
  return found;
}

// The pages' headings are Title Case; the design uses sentence case.
function headerCopy({ heading = "", download }) {
  if (download || /download|syllabus|brochure/i.test(heading)) {
    return {
      syllabus: true,
      title: /brochure/i.test(heading) ? "Download brochure" : "Download syllabus",
      subtitle: "Free PDF. Fill in your details to get it instantly.",
    };
  }
  return {
    syllabus: false,
    title:
      !heading || /counsel/i.test(heading) ? "Apply for counselling" : heading,
    subtitle: "Free and no obligation. An advisor will call you back.",
  };
}

const Popup = (props) => {
  useEffect(() => {
    if (props.trigger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [props.trigger]);

  if (!props.trigger) return "";

  const found = inspect(props.children);

  // Lead-form popups get the new design; video, review and other content
  // popups keep the original frame.
  if (found.leadForm) {
    const copy = headerCopy(found);
    return (
      <div className={lead.scrim}>
        <div
          className={`${lead.modal} ${font.variable}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-popup-title"
        >
          <button
            type="button"
            className={lead.close}
            onClick={() => props.setTrigger(false)}
            aria-label="Close"
          >
            <PiXBold />
          </button>

          <LeadPopupPanel syllabus={copy.syllabus} program={found.program} />

          <div className={lead.formCol}>
            <div className={lead.header}>
              <p className={lead.title} id="lead-popup-title">
                {copy.title}
              </p>
              <p className={lead.subtitle}>{copy.subtitle}</p>
            </div>
            <PopupDesignContext.Provider value={{ syllabus: copy.syllabus }}>
              {props.children}
            </PopupDesignContext.Provider>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.popup}>
      <div
        className={
          props.downloadBrochure ? styles.popupInners : styles.popupInner
        }
      >
        <IoClose
          className={styles.closeBtn}
          onClick={() => {
            props.setTrigger(false);
          }}
        />

        {props.children}
      </div>
    </div>
  );
};

export default Popup;
