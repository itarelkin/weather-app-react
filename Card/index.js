import '../App.css';
import React from 'react';



export const Card = () => (
    <div className="Card">
        <img className="Icon" src ="https://cdn.iconscout.com/icon/free/png-256/cloudy-weather-11-1147979.png" width="80" alt="icon" />
        <div className="MainInfo">
            <div className="Title">New York</div>
            <div className="Description">Cloudy</div>
            <div className="Temperature">20</div>
        </div>
        <div className="Information">
        <div>Humidity: 15</div>
        <div>Feels like: 19</div>
        </div>
    </div>
);



