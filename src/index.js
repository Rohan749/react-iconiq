import React, { useEffect, useState } from "react";
import "./styles.css";
import { MdEmail } from "react-icons/md";
import { FaEye, FaInstagram } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const IcoInput = ({
  passAlert,
  value,
  placeholder,
  type,
  startIcon,
  ...otherProps
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState("");

  let icon = null;
  let typeVal = "text";

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  switch (type) {
    case "name":
      icon = <FaUserAlt className="icon" />;

      break;

    case "email":
      icon = <MdEmail className="icon" />;
      break;

    case "phone":
      icon = <FaPhoneAlt className="icon" />;
      typeVal = "phone";
      break;

    // case "phone number":
    //   icon = <FaPhoneAlt className="icon" />;
    //   break;

    case "date":
      icon = <IoCalendarNumber className="icon" />;
      typeVal = "text";
      break;

    case "url":
      icon = <FaLink className="icon" />;
      typeVal = "url";
      break;

    case "linkedin":
      icon = <FaLinkedin className="icon" />;
      typeVal = "url";
      break;

    case "twitter":
      icon = <FaTwitter className="icon" />;
      typeVal = "url";
      break;

    case "github":
      icon = <FaGithub className="icon" />;
      typeVal = "url";
      break;

    case "medium":
      icon = <FaMedium className="icon" />;
      typeVal = "url";
      break;

    case "instagram":
      icon = <FaInstagram className="icon" />;
      typeVal = "url";
      break;

    default:
      icon = null;
      break;
  }

  // console.log(passAlert, value, placeholder, type, startIcon,)

  // useEffect(() => {

  //    if(passAlert!==0){
  //     type === "password" &&  value.length < 6 ? setAlert("Password Length must be more than 6 characters") : setAlert("")

  //     type === "url" && isValidUrl(value) ? setAlert("Entered URL is Invalid") : setAlert("");
  //    }
  // }, [passAlert])

  return (
    <>
      {type !== "password" ? (
        <div className="ico_inputContainer">
          <div className="ico_input">
            <div>
              {startIcon ? startIcon : icon}
            </div>
            <input
              value={value}
              type={typeVal ? typeVal : "text"}
              {...otherProps}
              className="ico_inputField"
              placeholder={
                placeholder
                  ? placeholder
                  : typeVal === "url"
                  ? `Enter your ${type} link`
                  : `Enter your ${type}`
              }
            />
          </div>
          {/* <div className="ico_wrongAlert">{alert}</div> */}
        </div>
      ) : (
        <div className="ico_inputContainer">
          <div className="ico_input">
            <span onClick={handleTogglePassword}>
              {showPassword ? (
                <FaEye className="icon" />
              ) : (
                <IoEyeOffSharp className="icon" />
              )}
            </span>
            <input
              className="ico_inputField"
              type={showPassword ? "text" : "password"}
              placeholder={`${
                placeholder ? placeholder : "Enter your password"
              }`}
              {...otherProps}
            />
          </div>
          {/* <div className="ico_wrongAlert">{alert}</div> */}
        </div>
      )}
    </>
  );
};

export const IcoFormControl = ({ entries, formType, children }) => {
  const [passAlert, setPassAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [alerts, setAlerts] = useState({
    name: "",
    email: "",
    password: "",
    url: "",
    dob: "",
    twitter: "",
    linkedin: "",
    github: "",
    medium: "",
    instagram: "",
  });

  function isValidName(name) {
    if (name === "") {
      return false;
    } else {
      return true;
    }
  }

  function isValidPassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }

  function isValidUrl(url) {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlPattern.test(url)) {
      return false;
    } else {
      return true;
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  function isValidDOBFormat(dob) {
    // Regular expression for date of birth format dd/mm/yyyy
    const dobPattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!dobPattern.test(dob)) {
      return false;
    } else {
      return true;
    }
  }

  let nameAlert = "";
  let emailAlert = "";
  let passwordAlert = "";
  let urlAlert = "";
  let dobAlert = "";
  let twitterAlert = "";
  let linkedinAlert = "";
  let githubAlert = "";
  let mediumAlert = "";
  let instagramAlert = "";

  const dataHandler = () => {
    setPassAlert(true);
    if (
      nameAlert === "" &&
      emailAlert === "" &&
      passwordAlert === "" &&
      urlAlert === "" &&
      dobAlert === "" &&
      twitterAlert === "" &&
      linkedinAlert === "" &&
      githubAlert === "" &&
      mediumAlert === "" &&
      instagramAlert === ""
    ) {
      console.log("All inputs are valid!")
    }
    else {
      console.log("Invalid input. Check once.")
    }
  };

  const mappedData = entries.map((val, index) => {
    if (val.type === "name" && !isValidName(val.value.data)) {
      nameAlert = "Please enter your name";
    }
    if (val.type === "email" && !isValidEmail(val.value.data)) {
      emailAlert = "Entered email is invalid.";
    }
    if (val.type === "password" && !isValidPassword(val.value.data)) {
      passwordAlert = "Password length must be more than 5 characters";
    }
    if (val.type === "url" && !isValidUrl(val.value.data)) {
      urlAlert = "Entered url is invalid.";
    }
    if (val.type === "date" && !isValidDOBFormat(val.value.data)) {
      dobAlert = "Please enter date in format of dd/mm/yyyy";
    }
    if (val.type === "twitter" && !isValidUrl(val.value.data)) {
      twitterAlert = "Invalid twitter link.";
    }
    if (val.type === "linkedin" && !isValidUrl(val.value.data)) {
      linkedinAlert = "Invalid linkedin link";
    }
    if (val.type === "github" && !isValidUrl(val.value.data)) {
      githubAlert = "Invalid github link";
    }
    if (val.type === "medium" && !isValidUrl(val.value.data)) {
      mediumAlert = "Invalid medium link";
    }
    if (val.type === "instagram" && !isValidUrl(val.value.data)) {
      instagramAlert = "Invalid instagram link";
    }

    return (
      <div key={index}>
        <IcoInput
          value={val.value.data}
          // passAlert={passAlert}
          onChange={val.onChange}
          type={val.type}
          placeholder={val.placeholder}
          startIcon={val.startIcon}
        />
        <div className="ico_wrongAlert">
          {passAlert && (
            <div>
              {val.type === "name" && !isValidName(val.value.data)
                ? nameAlert
                : ""}
              {val.type === "email" && !isValidEmail(val.value.data)
                ? emailAlert
                : ""}
              {val.type === "password" && !isValidPassword(val.value.data)
                ? passwordAlert
                : ""}
              {val.type === "url" && !isValidUrl(val.value.data)
                ? urlAlert
                : ""}
              {val.type === "date" && !isValidDOBFormat(val.value.data)
                ? dobAlert
                : ""}
              {val.type === "twitter" && !isValidUrl(val.value.data)
                ? twitterAlert
                : ""}
              {val.type === "linkedin" && !isValidUrl(val.value.data)
                ? linkedinAlert
                : ""}
              {val.type === "github" && !isValidUrl(val.value.data)
                ? githubAlert
                : ""}
              {val.type === "medium" && !isValidUrl(val.value.data)
                ? mediumAlert
                : ""}
              {val.type === "instagram" && !isValidUrl(val.value.data)
                ? instagramAlert
                : ""}
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      {mappedData}
      <div className="formControl_btn">
        <div>{children}</div>
        <button className="ico_button" onClick={dataHandler}>
          {formType === "login" && "Login"}
          {formType === "signup" && "Signup"}
        </button>
        {/* <button onClick={handler}>Cliekc mee</button> */}
      </div>
    </>
  );
};

export const IcoButton = ({ children, ...otherProps }) => {
  return (
    <button className="ico_button" {...otherProps}>
      {children}
    </button>
  );
};
