import React, { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Link } from "react-router-dom";
import  frame2 from "./../../Images/frame2.png";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { useTranslation } from "react-i18next";
//import LanguageSwitcher from "./../SharedModules/Header";
 import "./../../App.css";
import image from "./../../Images/Frame.png";

export default function SignIn() {
   // Access the t function for translations
  const { t } = useTranslation(); 
   // State variables for form-related data.
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

   // Define initial form field values.
  const initialValues = {
    email: "",
    password: "",
  };

     // Validation function for form fields.
  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = t("emailError"); 
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = t("invalidEmail"); 
    }

    if (!data.password) {
      errors.password = t("passwordError");
    }

    return errors;
  };

   // Form submission function.
  const onSubmit = (data) => {
    setFormData(data);
    setShowMessage(true);
  };
  
  // A Formik instance with form configuration.
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
 
  // Helper functions to check field validity and display error messages.
  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };
  return (
    <form onSubmit={formik.handleSubmit}>
       {/* <LanguageSwitcher /> */}
    <div className="container">
   

      <div className="container-left">
       <img className="si-container-left-img" src={frame2} alt="" />
         <div className="si-container-left-sub-container">
          <h2 className="si-container-left-sub-container-heading"> 
          {t("signInHeading")}
          </h2>
          <p className="si-container-left-sub-container-sub-heading">
          {t("signInSubHeading")}
          </p>
          <div className="si-container-left-sub-container-input-field">
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={isFormFieldValid("email") ? "p-invalid" : ""}
                />
                <label
                  htmlFor="email"
                  className={isFormFieldValid("email") ? "p-error" : ""}
                >
                  {t("emailLabel")}* 
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Password
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  toggleMask
                  className={isFormFieldValid("password") ? "p-invalid" : ""}
                />
                <label
                  htmlFor="password"
                  className={isFormFieldValid("password") ? "p-error" : ""}
                >
                  {t("passwordLabel")}* 
                </label>
              </span>
              {getFormErrorMessage("password")}
            </div>
            <div className="si-container-left-sub-container-security">
              <label className="SI-container-left-security-checkbox">
                <input type="checkbox" />
                {t("rememberMe")} 
              </label>
              <div className="si-container-left-security-forgot-password">
              {t("forgotPassword")} 
              </div>
            </div>
            <Link to="/AuthLandingPage">
            <button type="submit">{t("signIn")}</button> 
            </Link>
          </div>
          <div className="si-container-left-last">
            <div className="si-container-left-last-account">
            {t("dontHaveAccount")} 
            </div>
            <div className="si-container-left-last-signup-link">
            <Link to="/SignUp">
               {t("signUp")} 
               </Link>
               </div>
          </div>
        </div>
      </div>
      <img className="container-right" src={image} alt="" />
       
    </div>
  </form>
  )
}
