import React, { useState, useEffect } from "react";
import styles from "./Form.module.css";
import PhoneInput from "react-phone-input-2";
import jsCookie from "js-cookie";
import "react-phone-input-2/lib/style.css";
import {
  getEndPoint,
  getValidation,
  redirectionThankYou,
  getFormFields,
} from "./formFunction";
import { useRouter } from "next/router";

const Form = ({
  popup,
  setTrigger,
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
}) => {
  const router = useRouter();

  const [formFields, setFormFields] = useState(
    getFormFields(radio, google, referrals, Domain, interstedInHide)
  );
  const [formField, setFormField] = useState(
    getFormFields(radio, google, referrals, interstedInHide)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ipinfo.io/json?token=bc89c2010abac0"
        );
        if (response.status === 429) {
          throw new Error("Rate limit exceeded. Too many requests.");
        }
        if (!response.ok) {
          throw new Error(
            `Failed to fetch location: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        console.log("API Response:", data);
        const { country, region, city } = data;
        setQuery((prevQuery) => ({
          ...prevQuery,
          country,
          region,
          city,
        }));
      } catch (error) {
        console.error("Error fetching location:", error.message);
        setQuery((prevQuery) => ({
          ...prevQuery,
          country: "DefaultCountry",
          region: "DefaultCountry",
          city: "DefaultCity",
        }));
      }
    };

    fetchData();
  }, []);

  const [value, setValue] = useState();
  const [error, setError] = useState();
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
    Brief: "",
    dateTime: "",
    WAdropdown: "",
    currentOrganization: "",
    currentDesignation: "",
    interstedIn: "",
    country: "",
    region: "",
    city: "",
    url: router.asPath,
    Domain: "",
  });

  useEffect(() => {
    setQuery({ ...query, phone: value });
    jsCookie.set("CARD", query.email, { expires: 14, secure: true });
  }, [value]);

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
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

  // Form Submit function
  const formSubmit = async (e) => {
    e.preventDefault();
    await fetchLocationData();
    const endPoint = getEndPoint(router.pathname, event);
    const pushPath = redirectionThankYou(
      router.pathname,
      fullStack,
      event,
      dataScience,
      dataScienceGeneric,
      dataScienceCounselling
      // redirection
    );
    console.log(pushPath);
    setError(getValidation(radio, Domain, interstedInHide, query));
    const validation = getValidation(radio, Domain, interstedInHide, query);

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append("country", query.country);
    formData.append("city", query.city);
    formData.append("region", query.region);

    console.log("Form Data:", query.country);

    if (validation === false) {
      const sendData = await fetch(`${endPoint}`, {
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
        dateTime: "",
        WAdropdown: "",
        currentOrganization: "",
        currentDesignation: "",
        interstedIn: "",
        country: "", // Use the state value directly
        region: "", // Use the state value directly
        city: "", // Use the state value directly
        url: router.asPath,
      });

      if (popup) {
        const off = () => {
          setTrigger(false);
        };
        off();
      }
      if (sendData.status === 200) {
        router.push(
          pushPath,
          dataScience
            ? {
                pathname: "/Thank-you",
                query: { titleCourse: titleCourse, brochureLink: brochureLink },
              }
            : {
                pathname: pushPath,
              }
        );
      }
    }
  };

  return (
    <div className={styles.App}>
      <form onSubmit={formSubmit}>
        <>
          {DomainInput
            ? formField.map(
                (field) =>
                  field.showField && (
                    <div key={field.name} className={styles.formWrapper}>
                      <label htmlFor={field.name}>
                        {field.label}
                        {field.required && (
                          <span className={styles.spanLabel}>*</span>
                        )}
                      </label>
                      {field.type === "phone" ? (
                        <PhoneInput
                          inputStyle={field.inputStyle}
                          containerStyle={field.containerStyle}
                          name={field.name}
                          inputProps={field.inputProps}
                          country="in"
                          placeholder={field.placeholder}
                          value={value}
                          onChange={(phone) => setValue(phone)}
                          required={field.required}
                        />
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          value={query[field.name]}
                          className=""
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
                          className={styles.EmailInputs}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={query[field.name]}
                          onChange={handleParam(field.name)}
                        />
                      )}
                    </div>
                  )
              )
            : formFields.map(
                (field) =>
                  field.showField && (
                    <div key={field.name} className={styles.formWrapper}>
                      <label htmlFor={field.name}>
                        {field.label}
                        {field.required && (
                          <span className={styles.spanLabel}>*</span>
                        )}
                      </label>
                      {field.type === "phone" ? (
                        <PhoneInput
                          inputStyle={field.inputStyle}
                          containerStyle={field.containerStyle}
                          name={field.name}
                          inputProps={field.inputProps}
                          country="in"
                          placeholder={field.placeholder}
                          value={value}
                          onChange={(phone) => setValue(phone)}
                          required={field.required}
                        />
                      ) : field.type === "select" ? (
                        <select
                          name={field.name}
                          required={field.required}
                          value={query[field.name]}
                          className=""
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
                          className={styles.EmailInputs}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={query[field.name]}
                          onChange={handleParam(field.name)}
                        />
                      )}
                    </div>
                  )
              )}
        </>

        <input name="country" value={query.country} type="hidden" />
        <input name="region" value={query.region} type="hidden" />
        <input name="city" value={query.city} type="hidden" />
        {error && (
          <p className={styles.errorMsg}>
            Please fill all the fields marked with *
          </p>
        )}
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
            <button type="submit" className={styles.button}>
              {downloadBrochure ? "Download Now" : btnText}{" "}
            </button>
          </div>
        ) : (
          <>
            <p className={styles.FormText}>
              By submitting the form, you agree to our Terms and Conditions and
              our Privacy Policy.
            </p>
            <button type="submit" className={styles.button}>
              {downloadBrochure ? "Download Now" : btnText}{" "}
            </button>
          </>
        )}
        <input type="hidden" id="zc_gad" name="zc_gad" value="" />
      </form>
    </div>
  );
};

export default Form;
