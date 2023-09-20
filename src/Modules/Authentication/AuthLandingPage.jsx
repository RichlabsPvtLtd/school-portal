import React from 'react';
import frame2image from "./../../Images/frame2.png";
import frame3image from "./../../Images/frame3.png";
import Call from "./../../Images/Call.png";
import company from "./../../Images/company.png";
import student from "./../../Images/student.png";
import test from "./../../Images/test.png";
import teachers from "./../../Images/teachers.png";
import analysis from "./../../Images/analysis.png";
import admission from "./../../Images/admission.png";
import { useTranslation } from "react-i18next";
//import LanguageSwitcher from "./../SharedModules/Header";
import SideMenu from "./../Pages/SideMenu";
import CardContainer from './../SharedModules/CardContainer';
import "./../../App.css";

export default function AuthLandingPage() {

  // Access the t function for translations
  const { t } = useTranslation();

   // Array of Card objects for rendering quick links and descriptions.
  const Cards = [
    {
      className:
        "hp-container2-About-school hp-container2-About-test-center",
      src: test,
      alt: "Image",
      text: t("testCenter"), 
    },
    {
      className:
        "hp-container2-About-school hp-container2-About-student-portal",
      src: student,
      alt: "Image",
      text: t("studentPortal"), 
    },
    {
      className:
        "hp-container2-About-school hp-container2-About-teachers",
      src: teachers,
      alt: "Image",
      text: t("teachers"), 
    },
    {
      className:
        "hp-container2-About-school hp-container2-About-analysis",
      src: analysis,
      alt: "Image",
      text: t("analysis"), 
    },
    {
      className:
        "hp-container2-About-school hp-container2-About-admission",
      src: admission,
      alt: "Image",
      text: t("admission"), 
    },
    
  ];

  return (
  
     <div className="hp-container">
        {/* <LanguageSwitcher /> */}
        <header className="hp-container-header">
         <img
          className="hp-container-header-frame2"
          src={frame2image}
          alt={t("imageAltText")}
        />
        <div className="hp-container-header-identity">
          <img
            className="hp-container-header-identity-image"
            src={frame3image}
            alt={t("imageAltText")}
          />
          <h4>{t("namePlaceholder")}</h4>
          <p className="hp-container-header-identity-post">
            {t("postPlaceholder")}
          </p>
        </div>
      </header>
      <div className="hp-sub-container">
        <div className="hp-sub-container-1">
          <SideMenu />
        </div>
        <div className="hp-sub-container-2">
          <div className="hp-sub-container2-school-details">
            <h3 className="hp-sub-container2-school-heading">
              {t("welcomeMessage")}
            </h3>
            <div className="hp-sub-container2-school-container">
              <h2 className="hp-sub-container2-school-name">
                {t("schoolNamePlaceholder")}
              </h2>
              <div className="hp-sub-container2-school-id">
                {t("schoolIDPlaceholder")}
              </div>
            </div>
            <div className="hp-sub-container-2-school-more-details">
              <div className="hp-sub-container2-school-more-detail hp-sub-container2-school-address">
                <img src={company} alt={t("imageAltText")} />
                {t("schoolAddressPlaceholder")}
              </div>
              <div className="hp-sub-container2-school-more-detail hp-sub-container2-school-phone">
                <img src={Call} alt={t("imageAltText")} />
                {t("schoolPhoneNumber")}
              </div>
            </div>
          </div>
          <div className="school">
          <CardContainer Cards={Cards} />
          </div>
        </div>
      </div>
    </div>
  );
};



