
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import WeatherPanel from './WeatherPanel';
import Search from './Search';
import WeatherNavBar from './WeatherNavBar';


const WeatherComponent = ({ weatherData, theme, setTheme }) => {


    
    return (
       
        <div className='weather-component'>
         { weatherData &&  <WeatherPanel
            data={ weatherData }
            setTheme={setTheme}
            theme={theme} 
            />}
        </div>
          
       
    );
};

export default WeatherComponent;