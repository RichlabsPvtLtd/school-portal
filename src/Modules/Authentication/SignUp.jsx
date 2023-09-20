import React, { useState } from "react";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
//import LanguageSwitcher from "./../SharedModules/Header";
import frame2image from "./../../Images/frame2.png";
import image from "./../../Images/Frame.png";
import "./../../App.css";

export default function SignUp() {

  // Access the t function for translations
  const { t } = useTranslation(); 

  // State variables for form-related data.
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

   // Define initial form field values.
  const formik = useFormik({
    initialValues: {
      name: "",
      last: "",
      email: "",
      password: "",
    },

     // Validation function for form fields.
     validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = t("firstNameRequired"); 
      }
      if (!data.last) {
        errors.last = t("lastNameRequired");
      }

      if (!data.email) {
        errors.email = t("emailRequired"); 
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = t("invalidEmail"); 
      }

      if (!data.password) {
        errors.password = t("passwordRequired"); 
      }

      return errors;
    },

     // Form submission function.
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });
 
     // Helper function to check if a form field is valid based on touched and errors.
  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);

    // Helper function to display an error message for a form field.
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };
    
   // Password footer with password strength suggestions.
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">{t("passwordSuggestions")}</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>{t("passwordLowerCase")}</li>
        <li>{t("passwordUpperCase")}</li>
        <li>{t("passwordNumeric")}</li>
        <li>{t("passwordLength")}</li>
      </ul>
    </React.Fragment>
  );

  return (
    <form onSubmit={formik.handleSubmit}>
        {/* <LanguageSwitcher /> */}
      <div className="container">
        <div className="container-left">
          <img
            className="su-container-left-img"
            src={frame2image}
            alt={t("imageAltText")} 
          />
          <div className="su-container-left-sub-container">
            <h2 className="su-container-left-sub-container-heading">
              {t("signUpHeading")} 
            </h2>
           <p className="su-container-left-sub-container-sub-heading">
              {t("enterCredentials")} 
            </p>
            <div className="su-container-left-sub-container-inputfield">
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    autoFocus
                    className={classNames({
                      "p-invalid": isFormFieldValid("name"),
                    })}
                  />
                  <label
                    htmlFor="name"
                    className={classNames({
                      "p-error": isFormFieldValid("name"),
                    })}
                  >
                    {t("firstName")} 
                  </label>
                </span>
                {getFormErrorMessage("name")}
              </div>
              <div className="field">
                <span className="p-float-label">
                  <InputText
                    id="last"
                    name="last"
                    value={formik.values.last}
                    onChange={formik.handleChange}
                    autoFocus
                    className={classNames({
                      "p-invalid": isFormFieldValid("last"),
                    })}
                  />
                  <label
                    htmlFor="last"
                    className={classNames({
                      "p-error": isFormFieldValid("last"),
                    })}
                  >
                    {t("lastName")}
                  </label>
                </span>
                {getFormErrorMessage("last")}
              </div>
              <div className="field">
                <span className="p-float-label p-input-icon-right">
                  <i className="pi pi-envelope" />
                  <InputText
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className={classNames({
                      "p-invalid": isFormFieldValid("email"),
                    })}
                  />
                  <label
                    htmlFor="email"
                    className={classNames({
                      "p-error": isFormFieldValid("email"),
                    })}
                  >
                    {t("email")} 
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
                    className={classNames({
                      "p-invalid": isFormFieldValid("password"),
                    })}
                    footer={passwordFooter}
                  />
                  <label
                    htmlFor="password"
                    className={classNames({
                      "p-error": isFormFieldValid("password"),
                    })}
                  >
                    {t("password")} 
                  </label>
                </span>
                {getFormErrorMessage("password")}
              </div>

              <div className="su-container-left-security-container">
                <label className="su-container-left-security-checkbox">
                  <input type="checkbox" />
                  {t("rememberMe")}
                </label>
              </div>
              <Link to="/AuthLandingPage">
              <button type="submit">{t("signUp")}</button> 
              </Link>
            </div>
           <div className="su-container-left-last-container">
              <div className="su-container-left-last-account">
                {t("alreadyHaveAccount")} 
              </div>
             <div className="su-container-left-last-signIn-link">
              <Link to="/SignIn">
               {t("signIn")} 
               </Link>
              </div>
            </div>
          </div>
        </div>
        <img className="container-right" src={image} alt={t("imageAltText")} /> 
       
      </div>
    </form>
  );
 }