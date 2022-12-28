import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { selectDisplay } from '../redux/slices/displayCountrySlice.js'
import { setLoadingFalse, setLoadingTrue } from '../redux/slices/loadingSlice.js'

const Weather = () => {
    const [weather, setWeather] = useState();
    const display = useSelector(selectDisplay)
    const latitude = display.capitalInfo.latlng[0]
    const longitude = display.capitalInfo.latlng[1]
    const dispatch = useDispatch()



    useEffect(() => {
        const axios = require("axios");
        dispatch(setLoadingTrue())

        const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${latitude}, ${longitude}` },
        headers: {
            'X-RapidAPI-Key': '068883cb05msh95e2a565b449f27p15ef46jsn521623466016',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setWeather(response.data)
            dispatch(setLoadingFalse())
        }).catch(function (error) {
            console.error(error);
            dispatch(setLoadingFalse())
            alert("Issue fetching weather data")
        });
    }, [])


    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
