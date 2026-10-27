import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDown,
  IndianRupee,
  Phone,
  Target,
  X,
} from "lucide-react";
import styles from "./CounsellingPopup.module.css";
import {
  getEndPoint,
  getFormFields,
  getValidation,
  redirectionThankYou,
} from "../Form/formFunction";

const TOPICS = [
  { label: "Background fit", Icon: Target, pos: "chipTopLeft" },
  { label: "Full syllabus", Icon: BookOpen, pos: "chipTopRight" },
  { label: "Fees & EMI", Icon: IndianRupee, pos: "chipBottomLeft" },
  { label: "Career support", Icon: Briefcase, pos: "chipBottomRight" },
];

const STATS = [
  { value: "4.69", stars: true, label: "SwitchUp reviews" },
  { value: "35,000+", label: "learners" },
  { value: "< 5 min", label: "avg. reply" },
];

// Same fields as the global Form, with the labels and placeholders from the new design.
const FIELD_COPY = {
  name: { label: "Full name", placeholder: "Your name" },
  email: { label: "Work email", placeholder: "name@company.com" },
  phone: { label: "Phone", placeholder: "10-digit mobile" },
  WorkExperience: { label: "Years of experience", placeholder: "Select" },
  platform: { label: "Course preference", placeholder: "Select" },
  Domain: { label: "Domain", placeholder: "Select" },
  WAdropdown: { label: "How did you hear about us?", placeholder: "Select" },
};

const EMPTY_QUERY = {
  name: "",
  email: "",
  phone: "",
  upskillPlanning: "",
  upskillingObjective: "",
  platform: "",
  workExperience: "",
  WorkExperience: "",
  Brief: "",
  dateTime: "",
  WAdropdown: "",
  currentOrganization: "",
  currentDesignation: "",
  interstedIn: "",
  Domain: "",
};

const CLOUD_DEVOPS_COURSE_IDS = [
  "cloud-devops-master",
  "adv-cloud-devops",
  "cloud-db-admin",
  "cloud-it-support",
  "cloud-sys-admin",
  "cloud-network-pro",
];

const fetchLocation = async () => {
  try {
    const response = await fetch("https://ipinfo.io/json?token=bc89c2010abac0");
    if (!response.ok) {
      throw new Error(
        `Failed to fetch location: ${response.status} ${response.statusText}`,
      );
    }
    const { country, region, city } = await response.json();
    return { country, region, city: city || "Unknown" };
  } catch (error) {
    console.error("Error fetching location:", error.message);
    return {
      country: "Country Undefined",
      region: "Region Undefined",
      city: "City Undefined",
    };
  }
};

const downloadFileAtUrl = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = url.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const CounsellingPopup = ({
  trigger,
  setTrigger,
  program = "GenAI & Agentic AI Master Program",
  dsaPopup,
  setDSAPopup,
  downloadBrochure,
  radio,
  event,
  dataScience,
  fullStack,
  google,
  referrals,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  dataScienceGeneric,
  interstedInHide,
  Domain,
  DomainInput,
  brochurePdf,
  genAISelectOption,
  courseId,
}) => {
  const router = useRouter();
  // Mirrors Form.js: DomainInput drops the Domain select.
  const [fields] = useState(() =>
    DomainInput
      ? getFormFields(radio, google, referrals, interstedInHide)
      : getFormFields(radio, google, referrals, Domain, interstedInHide),
  );
  const [value, setValue] = useState();
  const [query, setQuery] = useState({ ...EMPTY_QUERY, url: router.asPath });
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const close = () => setTrigger(false);

  useEffect(() => {
    if (!value) return;
    const phoneWithPlus = `+${value}`;
    setQuery((prev) => ({ ...prev, phone: phoneWithPlus }));
    jsCookie.set("CARDPHONE", phoneWithPlus, { expires: 14, secure: true });
  }, [value]);

  useEffect(() => {
    jsCookie.set("CARD", query.email, { expires: 14, secure: true });
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  // Lock page scroll and close on Escape while open.
  useEffect(() => {
    if (!trigger) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setTrigger(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [trigger, setTrigger]);

  if (!trigger) return null;

  const handleParam = (e) => {
    const { name, value: fieldValue } = e.target;
    setQuery((prev) => ({ ...prev, [name]: fieldValue }));
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const updatedQuery = { ...query };
    if (genAISelectOption) {
      updatedQuery.platform = "Generative AI";
    }
    const formData = new FormData();
    Object.entries(updatedQuery).forEach(([key, fieldValue]) => {
      formData.append(key, fieldValue);
    });
    const location = await fetchLocation();
    formData.append("country", location.country);
    formData.append("city", location.city);
    formData.append("region", location.region);

    try {
      const endPoint = getEndPoint(router.pathname, event);
      const pushPath = redirectionThankYou(
        router.pathname,
        fullStack,
        event,
        dataScience,
        dataScienceGeneric,
        dataScienceCounselling,
      );

      // Same argument order as Form.js so validation behaves identically.
      const invalid = getValidation(radio, Domain, interstedInHide, query);
      setError(Boolean(invalid));

      if (!invalid) {
        const sendData = await fetch(endPoint, {
          method: "POST",
          body: formData,
        });

        setQuery({ ...EMPTY_QUERY, url: router.asPath });
        setTrigger(false);
        if (dsaPopup) {
          setDSAPopup();
        }

        if (sendData.status === 200) {
          if (downloadBrochure) {
            downloadFileAtUrl(brochurePdf);
          }
          sessionStorage.setItem("pending_syllabus", courseId);
          const thankYouPath = CLOUD_DEVOPS_COURSE_IDS.includes(courseId)
            ? "/Thank-you-cloud"
            : "/Thank-you";
          router.push(
            pushPath,
            dataScience
              ? {
                  pathname: thankYouPath,
                  query: { titleCourse, brochureLink },
                }
              : { pathname: pushPath },
          );
        }
      }
    } catch (err) {
      console.error("Error submitting form:", err.message);
    }
    setSubmitting(false);
  };

  const renderField = (field) => {
    const copy = FIELD_COPY[field.name] || {
      label: field.label,
      placeholder: field.placeholder,
    };

    let control;
    if (field.type === "phone") {
      control = (
        <PhoneInput
          country="in"
          containerClass={styles.phone}
          inputClass={styles.phoneInput}
          buttonClass={styles.phoneButton}
          inputProps={field.inputProps}
          placeholder={copy.placeholder}
          value={value}
          onChange={(phone) => setValue(phone)}
        />
      );
    } else if (field.type === "select") {
      const isPlaceholder =
        !query[field.name] ||
        field.options.some((o) => o.hidden && o.value === query[field.name]);
      control = (
        <span className={styles.selectWrap}>
          <select
            name={field.name}
            required={field.required}
            value={query[field.name]}
            onChange={handleParam}
            className={isPlaceholder ? styles.placeholder : ""}
          >
            <option value="" disabled hidden>
              {copy.placeholder}
            </option>
            {field.options
              .filter((option) => !option.hidden)
              .map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
          <ChevronDown size={14} className={styles.chevron} aria-hidden="true" />
        </span>
      );
    } else {
      control = (
        <input
          type={field.type}
          name={field.name}
          required={field.required}
          placeholder={copy.placeholder}
          autoComplete={field.name}
          value={query[field.name]}
          onChange={handleParam}
        />
      );
    }

    return (
      <label key={`${field.name}-${field.label}`} className={styles.field}>
        <span>{copy.label}</span>
        {control}
      </label>
    );
  };

  const visibleFields = fields.filter((field) => field.showField);
  const byName = (name) => visibleFields.find((field) => field.name === name);
  const phoneField = byName("phone");
  const experienceField = byName("WorkExperience");
  const restFields = visibleFields.filter(
    (field) => field !== phoneField && field !== experienceField,
  );

  return (
    <div
      className={styles.overlay}
      // Close only on a click on the backdrop itself, not inside the card.
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="counselling-popup-title"
      >
        <button type="button" className={styles.close} onClick={close} aria-label="Close">
          <X size={16} strokeWidth={2.5} />
        </button>

        <aside className={styles.hero}>
          <p className={styles.eyebrow}>{program}</p>
          <p className={styles.heroTitle}>
            How your 15 minutes are spent
            <span className={styles.heroTitleSoft}>One call settles it.</span>
          </p>

          <div className={styles.orbit} aria-hidden="true">
            <span className={styles.ringOuter} />
            <span className={styles.ringInner} />
            <span className={styles.callBubble}>
              <Phone size={20} fill="currentColor" strokeWidth={0} />
              <span className={styles.callMins}>15 min</span>
            </span>
            {TOPICS.map(({ label, Icon, pos }) => (
              <span key={label} className={`${styles.chip} ${styles[pos]}`}>
                <span className={styles.chipIcon}>
                  <Icon size={12} strokeWidth={2.5} />
                </span>
                {label}
              </span>
            ))}
          </div>

          <span className={styles.mobileCall} aria-hidden="true">
            <Phone size={18} fill="currentColor" strokeWidth={0} />
          </span>

          <ul className={styles.stats}>
            {STATS.map(({ value: stat, stars, label }) => (
              <li key={label} className={styles.stat}>
                <strong>
                  {stat}
                  {stars && <span className={styles.stars}> ★★★★★</span>}
                </strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className={styles.body}>
          <h5 id="counselling-popup-title" className={styles.title}>
            Book a free counselling call
          </h5>
          <p className={styles.subtitle}>No cost, no obligation. Takes 15 minutes.</p>

          <form onSubmit={formSubmit} className={styles.form}>
            {restFields
              .filter((field) => field.type !== "select")
              .map(renderField)}

            <div className={styles.row}>
              {phoneField && renderField(phoneField)}
              {experienceField && renderField(experienceField)}
            </div>

            {restFields
              .filter((field) => field.type === "select")
              .map(renderField)}

            {error && (
              <p className={styles.error}>Please fill all the fields.</p>
            )}

            <button type="submit" className={styles.primary} disabled={submitting}>
              {submitting ? "Submitting..." : "Book my free call"}
              {!submitting && <ArrowRight size={14} strokeWidth={2.5} />}
            </button>
            <button type="button" className={styles.secondary} onClick={close}>
              Just show me the program
            </button>

            <p className={styles.legal}>
              By submitting you agree to be contacted about Learnbay programs. See our{" "}
              <Link href="/privacy-policy">privacy policy</Link>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CounsellingPopup;
