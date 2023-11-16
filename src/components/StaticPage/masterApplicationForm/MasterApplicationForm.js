import React, { useState, useEffect } from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import Image from "next/image";
import "react-phone-number-input/style.css";
import styles from "./MasterApplicationForm.module.css";
import PhoneInput from "react-phone-number-input";
import data from "../CoursePage/Gethired/GEtHireData";
import { useRouter } from "next/router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const MasterApplicationForm = ({ secondForm, title }) => {
  const router = useRouter();
  const [value, setValue] = useState();
  const [query, setQuery] = useState({
    name: "",
    email: "",
    url: router.asPath,
    phoneNumber: "",
    highestEducation: "",
    graduationMarks: "",
    workExperience: "",
    currentJobTitle: "",
    domain: "",
    programmingKnowledge: "no",
    // Default: "no"
  });
  useEffect(() => {
    setQuery({ ...query, phoneNumber: value });
  }, [value]);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "file" ? e.target.files[0] : value;
    setQuery({
      ...query,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // console.log(query);
    const sendData = await fetch(
      secondForm
        ? "https://getform.io/f/c97e799c-c954-4fc8-80c9-47b33ce2bb5d"
        : "https://getform.io/f/85e92281-63f9-4d2f-b946-31d1098532f4",
      {
        method: "POST",
        body: formData,
      }
    );
    setQuery({
      name: "",
      email: "",
      url: router.asPath,
      phoneNumber: "",
      highestEducation: "",
      graduationMarks: "",
      workExperience: "",
      currentJobTitle: "",
      domain: "",
      programmingKnowledge: "no",
      // Default: "no"
    });

    // console.log(sendData.status);
    setValue();
    if (sendData.status === 200) router.push("/Thank-you-counselling");
  };

  return (
    <>
      <Navbar masterApplication={true} />
      <div className={styles.formWrapper}>
        <div className={styles.leftWrap}>
          <div className="bgWrap">
            <Image
              src="https://learnbay-wb.s3.ap-south-1.amazonaws.com/main/learnbayMain/master-program-form-image.webp"
              fill={true}
              alt="form master class"
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h1>{title}</h1>
          <div className={styles.inputWrap}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={query.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputWrap}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={query.email}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="hidden"
            id="url"
            name="url"
            value={router.asPath}
          ></input>



          <div className={styles.phoneWrap}>
            <label htmlFor="PhoneNumber">
              Phone Number<span className={styles.spanLabel}>*</span>
            </label>
            <div className={styles.phoneInput}>
              <PhoneInput
                name="phoneNumber"
                rules={{ required: true }}
                defaultCountry="IN"
                className={styles.Phone}
                value={value}
                onChange={setValue}
                required
              />
            </div>
          </div>
          {/* <div className={styles.uploadButtonContainer}>
          <label htmlFor="resume" className={styles.uploadButton}>
            {query.resumeName ? query.resumeName : "Upload Resume"}{" "}
            
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf, .doc, .docx"
              onChange={handleChange}
            />
          </label>
        </div> */}
          <div className={styles.inputWrap}>
            <label htmlFor="highestEducation">Highest Education</label>
            <select
              id="highestEducation"
              name="highestEducation"
              value={query.highestEducation}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Graduation">Graduation</option>
              <option value="Master">Master</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
              <option value="B.Com">B.Com</option>
              <option value="M.Com">M.Com</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className={styles.inputWrap}>
            <label htmlFor="graduationMarks">
              Aggregate Marks in Graduation
            </label>
            <select
              id="graduationMarks"
              name="graduationMarks"
              value={query.graduationMarks}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="<60%">{"<60%"}</option>
              <option value="60% to 70%">60% to 70%</option>
              <option value="70% to 80%">70% to 80%</option>
              <option value="70% to 80%">80%+</option>
            </select>
          </div>

          <div className={styles.inputWrap}>
            <label htmlFor="workExperience">Work Experience</label>
            <select
              id="workExperience"
              name="workExperience"
              value={query.workExperience}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="Freshers">Freshers</option>
              <option value="1-3 years">1-3 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5-7 years">5-7 years</option>
              <option value="7+ years">7+ years</option>
            </select>
          </div>

          <div className={styles.inputWrap}>
            <label htmlFor="currentJobTitle">Current Job Title</label>
            <input
              type="text"
              id="currentJobTitle"
              required
              name="currentJobTitle"
              value={query.currentJobTitle}
              onChange={handleChange}
            />
          </div>

          {/* <div className={styles.inputWrap}>
          <label htmlFor="domain">Domain</label>
          <input
            type="text"
            id="domain"
            name="domain"
            required
            value={query.domain}
            onChange={handleChange}
          />
        </div> */}

          <div className={styles.inputWrap}>
            <label htmlFor="programmingKnowledge">
              Do you know any programming language?
            </label>
            <select
              required
              id="programmingKnowledge"
              name="programmingKnowledge"
              value={query.programmingKnowledge}
              onChange={handleChange}
            >
              <option value="yes">Yes</option>
              <option value="no">New to programming</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default MasterApplicationForm;
