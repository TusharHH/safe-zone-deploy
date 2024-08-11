import React from 'react'
import '../Alert.css'


const Alert = () => {
  return (
    <div className='alert'>
      <div className="header">
        <span className='title'>Get Latest Alert</span>
        <span className="desc">From different sources</span>
      </div>
      <div className="socials">
        <iframe src="https://cap-sources.s3.amazonaws.com/in-imd-en/rss.xml" frameborder="0"></iframe>
      </div>


      <div className="newsAlerts">
        <div className="title">Latest Articles</div>
        <div className="news">
            <div className="newsAlert">
                <span>Rainfall Alerts</span>
                <a href="https://mausam.imd.gov.in/responsive/rainfallinformation.php" target='_blank'>Know More</a><span className="material-symbols-outlined">info</span>

            </div>
            <div className="newsAlert">
                <span>Monsoon Alerts</span>
                <a href="https://mausam.imd.gov.in/responsive/monsooninformation.php" target="_blank">Know More</a><span className="material-symbols-outlined">info</span>
            </div>
            <div className="newsAlert">
                <span>Cyclone Information</span>
                <a href="https://mausam.imd.gov.in/responsive/cycloneinformation.php" target="_blank">Know More</a><span className="material-symbols-outlined">info</span>
            </div>
            <div className="newsAlert">
                <span>Climate Services</span>
                <a href="https://mausam.imd.gov.in/responsive/climate_services.php" target="_blank">Know More</a><span className="material-symbols-outlined">info</span>
            </div>
            <div className="newsAlert">
                <span>Agromet Advisory Services</span>
                <a href="https://mausam.imd.gov.in/responsive/agromet_adv_ser_state_current.php" target="_blank">Know More</a><span className="material-symbols-outlined">info</span>
            </div>
            <div className="newsAlert">
                <span>Urban Meteorological Services</span>
                <a href="https://internal.imd.gov.in/pages/city_weather_main_mausam.php" target="_blank">Know More</a><span className="material-symbols-outlined">info</span>
            </div>
            <div className="newsAlert">
                <span>Geospatial Services</span>
                <a href="http://imdgeospatial.imd.gov.in/" target="_blank">Know More</a><span className="material-symbols-outlined">info</span>
            </div><div className="newsAlert">
                <span>Climate Hazard & Vulnerability Atlas</span>
                <a href="https://imdpune.gov.in/hazardatlas/index.html" target="_blank">Know More</a><span className="material-symbols-outlined">info</span>
            </div>
           
            
        </div>
      </div>
      <div className="button">
        <button className='btn'>Know More</button>
      </div>
      
    </div>
  )
}

export default Alert
