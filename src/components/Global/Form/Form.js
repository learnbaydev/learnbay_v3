import jsCookie from "js-cookie";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import InPopupContext from "../Popup/InPopupContext";
import styles from "./Form.module.css";
import {
  getEndPoint,
  getFieldErrors,
  getFormFields,
  getValidation,
  redirectionThankYou,
} from "./formFunction";

const Form = ({
  popup,
  setTrigger,
  dsaPopup,
  setDSAPopup,
  downloadBrochure,
  radio,
  event,
  dataScience,
  fullStack,
  google,
  referrals,
  syllabus,
  learning,
  titleCourse,
  brochureLink,
  dataScienceCounselling,
  dataScienceGeneric,
  interstedInHide,
  Domain,
  DomainInput,
  brochurePdf,
  DSADemoSession,
  genAISelectOption,
  courseId,
  gatedPdf,
  leadPlatform,
}) => {
  const router = useRouter();
  const inPopup = useContext(InPopupContext);
  const [formFields, setFormFields] = useState(
    getFormFields(radio, google, referrals, Domain, interstedInHide),
  );
  const [formField, setFormField] = useState(
    getFormFields(radio, google, referrals, interstedInHide),
  );

  const [value, setValue] = useState();
  const [dialCode, setDialCode] = useState("");
  const [error, setError] = useState();
  const [fieldErrors, setFieldErrors] = useState({});
  const [alertMSG, setAlertMSG] = useState("");
  const [toggle, setToggle] = useState(true);
  const [query, setQuery] = useState({
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
    url: router.asPath,
    Domain: "",
  });
  const [submitting, setSubmitting] = useState(false); // State to track form submission
  const fields = DomainInput ? formField : formFields;

  useEffect(() => {
    setQuery({ ...query, phone: value });
    jsCookie.set("CARD", query.email, { expires: 14, secure: true });
  }, [value]);

  useEffect(() => {
    if (value) {
      const formattedPhone = value;
      const phoneWithPlus = `+${formattedPhone}`;
      setQuery({ ...query, phone: phoneWithPlus });

      jsCookie.set("CARDPHONE", phoneWithPlus, { expires: 14, secure: true });
    }
  }, [value]);

  const clearFieldError = (name) => {
    setFieldErrors((prevState) => {
      const { [name]: cleared, ...rest } = prevState;
      return rest;
    });
  };

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    clearFieldError(name);
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let btnText = "Apply For Counselling";
  if (event) {
    btnText = "Register Now";
  }
  if (learning) {
    btnText = "Download Resources";
  }

  if (DSADemoSession) {
    btnText = "Book Session";
  }

  const formSubmit = async (e) => {
    e.preventDefault();

    if (inPopup) {
      const errors = getFieldErrors(fields, query, value, dialCode);
      const firstInvalid = fields.find((field) => errors[field.name]);
      setFieldErrors(errors);
      if (firstInvalid) {
        setError(false);
        e.currentTarget.elements[firstInvalid.name]?.focus();
        return;
      }
    }

    setSubmitting(true); // Set submitting state to true

    // Open the tab while the submit click still counts as a user gesture; once
    // the lead has posted, window.open would be popup-blocked.
    let pdfTab = null;
    if (gatedPdf && !getValidation(radio, Domain, interstedInHide, query)) {
      pdfTab = window.open("", "_blank");
      if (pdfTab) pdfTab.opener = null;
    }

    let updatedQuery = { ...query };

    // If genAISelectOption is true, set platform to "generative ai"
    if (genAISelectOption) {
      updatedQuery.platform = "Generative AI";
    }
    if (leadPlatform) {
      updatedQuery.platform = leadPlatform;
    }
    const formData = new FormData();
    Object.entries(updatedQuery).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (gatedPdf) {
      formData.append("brochureLink", gatedPdf);
    }

    try {
      const locationData = await fetchLocation();
      formData.append("country", locationData.country);
      formData.append("city", locationData.city);
      formData.append("region", locationData.region);
    } catch (error) {
      console.error("Error fetching location:", error.message);
    }

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

      setError(getValidation(radio, Domain, interstedInHide, query));
      const validation = getValidation(radio, Domain, interstedInHide, query);

      if (!validation) {
        const sendData = await fetch(endPoint, {
          method: "POST",
          body: formData,
        });

        setQuery({
          name: "",
          email: "",
          phone: "",
          upskillPlanning: "",
          upskillingObjective: "",
          jobDescription: "",
          platform: "",
          workExperience: "",
          WorkExperience: "",
          dateTime: "",
          WAdropdown: "",
          currentOrganization: "",
          currentDesignation: "",
          interstedIn: "",
          country: "",
          region: "",
          city: "",
          url: router.asPath,
        });

        if (popup) {
          setTrigger(false);
        }

        if (dsaPopup) {
          setDSAPopup();
        }

        // A gated PDF opens in its own tab and the reader stays on the page.
        if (gatedPdf) {
          if (sendData.status !== 200) pdfTab?.close();
          else if (pdfTab) pdfTab.location.href = gatedPdf;
          else window.open(gatedPdf, "_blank", "noopener,noreferrer");
          setSubmitting(false);
          return;
        }

        if (sendData.status === 200) {
          if (downloadBrochure) {
            downloadFileAtUrl(brochurePdf); // Download the brochure only after a successful submission
          }
          sessionStorage.setItem("pending_syllabus", courseId);
          const cloudAndDevopsCouserIds = [
            "cloud-devops-master",
            "adv-cloud-devops",
            "cloud-db-admin",
            "cloud-it-support",
            "cloud-sys-admin",
            "cloud-network-pro",
          ];

          // 1. Determine which thank you page to use
          const thankYouPath = cloudAndDevopsCouserIds.includes(courseId)
            ? "/Thank-you-cloud"
            : "/Thank-you";
          router.push(
            pushPath,
            dataScience
              ? {
                  pathname: thankYouPath,
                  query: {
                    titleCourse: titleCourse,
                    brochureLink: brochureLink,
                  },
                }
              : {
                  pathname: pushPath,
                },
          );
        }
      }
      setSubmitting(false); // Set submitting state to false after form submission
    } catch (error) {
      pdfTab?.close();
      console.error("Error submitting form:", error.message);
    }
  };

  // const downloadFileAtUrl = (url) => {
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.download = url.split("/").pop();
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   document.body.removeChild(aTag);
  // };

  // const downloadFileAtUrl = async (url) => {
  //   const fileName = url.split("/").pop();

  //   try {
  //     const response = await fetch(url, {
  //       mode: "cors",
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const blob = await response.blob();
  //     const blobUrl = window.URL.createObjectURL(blob);

  //     const a = document.createElement("a");
  //     a.href = blobUrl;
  //     a.style.display = "none";
  //     a.download = fileName; // This triggers the actual file download
  //     document.body.appendChild(a);
  //     a.click();
  //     document.body.removeChild(a);

  //     window.URL.revokeObjectURL(blobUrl);
  //   } catch (error) {
  //     console.error("Download failed:", error);
  //   }
  // };

  const downloadFileAtUrl = (url) => {
    console.log("2: ", url);

    const a = document.createElement("a");
    a.href = url;
    a.download = url.split("/").pop();
    // a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // return;
  };

  const fetchLocation = async () => {
    try {
      const response = await fetch(
        "https://ipinfo.io/json?token=bc89c2010abac0",
      );
      if (!response.ok) {
        throw new Error(
          `Failed to fetch location: ${response.status} ${response.statusText}`,
        );
      }
      const data = await response.json();
      // console.log("API Response:", data);
      const { country, region, city } = data;
      // If city is not available, provide a default value or placeholder
      const finalCity = city ? city : "Unknown";
      return { country, region, city: finalCity };
    } catch (error) {
      console.error("Error fetching location:", error.message);
      // If there's an error fetching location data, return default or placeholder values
      return {
        country: "Country Undefined",
        region: "Region Undefined",
        city: "City Undefined",
      };
    }
  };

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit} noValidate={inPopup}>
        <>
          {fields.map(
            (field) =>
              field.showField && (
                <div key={field.name} className={styles.formWrapper}>
                  {/* <label htmlFor={field.name}>
                    {field.label}
                    {field.required && (
                      <span className={styles.spanLabel}>*</span>
                    )}
                  </label> */}
                  {field.type === "phone" ? (
                    <PhoneInput
                      inputStyle={field.inputStyle}
                      containerStyle={field.containerStyle}
                      containerClass={
                        fieldErrors[field.name] ? styles.phoneInvalid : ""
                      }
                      name={field.name}
                      inputProps={{
                        ...field.inputProps,
                        "aria-invalid": Boolean(fieldErrors[field.name]),
                      }}
                      country="in"
                      placeholder={field.placeholder}
                      value={value}
                      onChange={(phone, country) => {
                        setValue(phone);
                        setDialCode(country.dialCode);
                        clearFieldError(field.name);
                      }}
                      required={field.required}
                    />
                  ) : field.type === "select" ? (
                    <select
                      name={field.name}
                      required={field.required}
                      value={query[field.name]}
                      className={
                        fieldErrors[field.name] ? styles.fieldInvalid : ""
                      }
                      aria-invalid={Boolean(fieldErrors[field.name])}
                      onChange={handleParam(field.name)}
                    >
                      {field.options.map((option) => (
                        <option
                          key={option.value}
                          value={option.value}
                          hidden={option.hidden}
                        >
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      className={`${styles.EmailInputs} ${
                        fieldErrors[field.name] ? styles.fieldInvalid : ""
                      }`}
                      required={field.required}
                      placeholder={field.placeholder}
                      value={query[field.name]}
                      aria-invalid={Boolean(fieldErrors[field.name])}
                      onChange={handleParam(field.name)}
                    />
                  )}
                  {fieldErrors[field.name] && (
                    <span className={styles.fieldError} role="alert">
                      {fieldErrors[field.name]}
                    </span>
                  )}
                </div>
              ),
          )}
        </>
        <input name="country" value={query.country} type="hidden" />
        <input name="region" value={query.region} type="hidden" />
        <input name="city" value={query.city} type="hidden" />
        {error && (
          <p className={styles.errorMsg}>
            Please fill all the fields marked with *
          </p>
        )}{" "}
        {popup && (
          <input type="hidden" id="url" name="url" value={router.asPath} />
        )}
        <div>{toggle ? "" : <p className={styles.alert}>{alertMSG}</p>}</div>
        {syllabus ? (
          <div className={styles.bottomWrap}>
            <p className={styles.FormText}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button
              type="submit"
              className={styles.button}
              disabled={submitting}
              onClick={() => setToggle(true)}
            >
              {submitting
                ? "Submitting..."
                : downloadBrochure
                  ? "Download Now"
                  : btnText}
            </button>
          </div>
        ) : (
          <>
            <p className={styles.FormText}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button
              type="submit"
              className={styles.button}
              onClick={() => setToggle(true)}
              disabled={submitting}
            >
              {submitting
                ? "Submitting..."
                : downloadBrochure
                  ? "Download Now"
                  : btnText}
            </button>
          </>
        )}
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
        {alertMSG === "" ? (
          ""
        ) : (
          <p
            style={{
              fontSize: "12px",
              color: "red",
              marginTop: "-10px",
              marginBottom: "10px",
            }}
          >
            {alertMSG}
          </p>
        )}
        <p className={styles.formWrapper} style={{ color: "red" }}>
          {error}
        </p>
      </form>
    </div>
  );
};

export default Form;
