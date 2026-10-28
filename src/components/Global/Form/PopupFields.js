import { useState } from "react";
import Link from "next/link";
import {
  PiArrowRightBold,
  PiCaretDownBold,
  PiDownloadSimpleBold,
} from "react-icons/pi";
import styles from "./PopupFields.module.css";

// Labels and placeholders from the popup design, keyed by Form field name.
// Option values are left alone: validation and the lead inbox depend on them.
const COPY = {
  name: { label: "Full name", placeholder: "Your full name" },
  email: { label: "Email", placeholder: "name@example.com" },
  phone: { label: "Phone", placeholder: "Phone number" },
  WorkExperience: { label: "Work experience", placeholder: "Select" },
  platform: { label: "Course preference", placeholder: "Select a course" },
  Domain: { label: "Domain", placeholder: "Select a domain" },
  WAdropdown: { label: "How did you hear about us?", placeholder: "Select one" },
};

// Phone and work experience share a row; everything else is full width.
const ORDER = { name: 1, email: 2, phone: 3, WorkExperience: 4 };
const HALF = new Set(["phone", "WorkExperience"]);

// Dial codes for the markets the site serves, India first.
const DIAL_CODES = [
  ["91", "India"],
  ["1", "United States / Canada"],
  ["44", "United Kingdom"],
  ["971", "United Arab Emirates"],
  ["966", "Saudi Arabia"],
  ["974", "Qatar"],
  ["968", "Oman"],
  ["965", "Kuwait"],
  ["973", "Bahrain"],
  ["65", "Singapore"],
  ["60", "Malaysia"],
  ["61", "Australia"],
  ["64", "New Zealand"],
  ["49", "Germany"],
  ["33", "France"],
  ["31", "Netherlands"],
  ["353", "Ireland"],
  ["880", "Bangladesh"],
  ["977", "Nepal"],
  ["94", "Sri Lanka"],
  ["84", "Vietnam"],
  ["63", "Philippines"],
  ["62", "Indonesia"],
  ["66", "Thailand"],
  ["81", "Japan"],
  ["82", "South Korea"],
  ["234", "Nigeria"],
  ["254", "Kenya"],
  ["27", "South Africa"],
  ["20", "Egypt"],
];

const PhoneField = ({ id, onChange }) => {
  const [dial, setDial] = useState("91");
  const [number, setNumber] = useState("");

  // Form expects the digits with the dial code and no "+", as the previous
  // phone widget produced, and adds the "+" itself.
  const emit = (nextDial, nextNumber) =>
    onChange(nextNumber ? `${nextDial}${nextNumber}` : "");

  return (
    <div className={styles.phone}>
      <span className={styles.dial}>
        <span>+{dial}</span>
        <PiCaretDownBold className={styles.dialCaret} aria-hidden />
        <select
          aria-label="Country code"
          value={dial}
          onChange={(event) => {
            setDial(event.target.value);
            emit(event.target.value, number);
          }}
        >
          {DIAL_CODES.map(([code, country]) => (
            <option key={code} value={code}>
              {country} (+{code})
            </option>
          ))}
        </select>
      </span>
      <input
        id={id}
        name="phone"
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        placeholder={COPY.phone.placeholder}
        required
        value={number}
        onChange={(event) => {
          const digits = event.target.value.replace(/\D/g, "").slice(0, 15);
          setNumber(digits);
          emit(dial, digits);
        }}
      />
    </div>
  );
};

/**
 * The shared Form's fields, laid out to the lead popup design. Form keeps all
 * state, validation and submission; this only renders.
 */
const PopupFields = ({
  fields,
  query,
  onFieldChange,
  onPhoneChange,
  onSubmit,
  submitting,
  hasError,
  alertMSG,
  downloadBrochure,
  btnText,
  onSubmitClick,
  url,
  syllabus,
}) => (
  <form className={styles.form} onSubmit={onSubmit}>
    <div className={styles.fields}>
      {fields.map((field, index) => {
        // The counselling design always asks for a course preference; it is
        // still only required on pages that already required it.
        const shown =
          field.showField || (field.name === "platform" && !syllabus);
        if (!shown) return null;
        const copy = COPY[field.name] || { label: field.label };
        const id = `lead-popup-${field.name}-${index}`;
        const fieldClass = `${styles.field} ${
          HALF.has(field.name) ? styles.half : ""
        }`;

        let control;
        if (field.type === "phone") {
          control = <PhoneField id={id} onChange={onPhoneChange} />;
        } else if (field.type === "select") {
          const placeholderOption = field.options.find((o) => o.hidden);
          const value = query[field.name];
          const empty = !value || value === placeholderOption?.value;
          control = (
            <span className={styles.selectWrap}>
              <select
                id={id}
                name={field.name}
                required={field.required}
                value={value}
                className={`${styles.select} ${empty ? styles.placeholder : ""}`}
                onChange={onFieldChange(field.name)}
              >
                {field.options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    hidden={option.hidden}
                  >
                    {option.hidden && copy.placeholder
                      ? copy.placeholder
                      : option.label}
                  </option>
                ))}
              </select>
              <PiCaretDownBold className={styles.caret} aria-hidden />
            </span>
          );
        } else {
          control = (
            <input
              id={id}
              type={field.type}
              name={field.name}
              className={styles.input}
              required={field.required}
              placeholder={copy.placeholder || field.placeholder}
              value={query[field.name]}
              onChange={onFieldChange(field.name)}
            />
          );
        }

        return (
          <div
            key={`${field.name}-${index}`}
            className={fieldClass}
            style={{ order: ORDER[field.name] || 10 + index }}
          >
            <label className={styles.label} htmlFor={id}>
              {copy.label}
            </label>
            {control}
          </div>
        );
      })}
    </div>

    <input name="country" value={query.country} type="hidden" />
    <input name="region" value={query.region} type="hidden" />
    <input name="city" value={query.city} type="hidden" />
    {url && <input type="hidden" id="url" name="url" value={url} />}
    <input type="hidden" id="zc_gad" name="zc_gad" value="" />

    {hasError && (
      <div className={styles.error}>Please fill in all the fields.</div>
    )}
    {alertMSG && <div className={styles.error}>{alertMSG}</div>}

    <button
      type="submit"
      className={styles.submit}
      disabled={submitting}
      onClick={onSubmitClick}
    >
      {submitting ? (
        "Submitting…"
      ) : downloadBrochure ? (
        <>
          <PiDownloadSimpleBold aria-hidden />
          Download now
        </>
      ) : (
        <>
          {btnText === "Apply For Counselling"
            ? "Apply for counselling"
            : btnText}
          <PiArrowRightBold aria-hidden />
        </>
      )}
    </button>

    <div className={styles.consent}>
      By submitting the form, you agree to our{" "}
      <Link href="/terms-conditions">Terms and Conditions</Link> and our{" "}
      <Link href="/privacy-policy">Privacy Policy</Link>.
    </div>
  </form>
);

export default PopupFields;
