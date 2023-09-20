import React from 'react'
import { Menubar } from 'primereact/menubar';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import admision from "./../../Images/admision.png";
import settings from "./../../Images/settings.png";
import portal from "./../../Images/portal.png";
import assessment from "./../../Images/assessment.png";
import center from "./../../Images/center.png";
import Home from "./../../Images/Home.png";
import { useTranslation } from 'react-i18next';


export default function SideMenu() {
  const { t } = useTranslation(); // Access the t function for translations

  const items = [
      {
          label: (
              <>
                  <img className='menubar-img' src={Home} alt="Image" />
                  {t('home')} 
              </>
          ),
      },
      {
          label: (
              <>
                  <img  className='menubar-img' src={center} alt="Image" />
                  {t('testCenter')} 
              </>
          ),
      },
      {
          label: (
              <>
                  <img   className='menubar-img' src={portal} alt="Image" />
                  {t('studentPortal')} 
              </>
          ),
      },
      {
          label: (
              <>
                  <img  className='menubar-img' src={assessment} alt="Image" />
                  {t('analysis')}
              </>
          ),
      },
      {
          label: (
              <>
                  <img   className='menubar-img' src={admision} alt="Image" />
                  {t('admission')} 
              </>
          ),
      },
      {
          label: (
              <>
                  <img  className='menubar-img'src={settings} alt="Image" />
                  {t('settings')} 
              </>
          ),
      },
  ];

  const menuStyle = {
      width: '170px', 
      marginTop: "30px",
      marginLeft: "20px",
    };

  items.forEach(item => {
      item.style = { marginTop: '10px' };
  });

  return (
      <div className="card">
          <Menubar model={items} style={menuStyle} />
      </div>
  )
}

