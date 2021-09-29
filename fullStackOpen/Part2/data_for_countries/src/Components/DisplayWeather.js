import axios from 'axios'
import {useEffect, useState} from 'react'

const DisplayWeather = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    const languages = Object.values(country.languages)
    const flag = country.flags.svg
    console.log(api_key)
    const [weatherObject, setWeatherObject] = useState([])
    const hook = () => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
          .then(response => {
            console.log("promise")
            setWeatherObject(response.data)
          })
        //   console.log(weatherAPI)
        //   setWeatherObject(weatherAPI.data)
      }
    useEffect(hook, [])
    console.log(weatherObject)
    const weatherIcon = weatherObject.current.weather_icons[0]
    return (
        <>
            <p>
                Capital {country.capital}
            </p>
            <h2>languages</h2>
            <p>
                
                {languages.map((language, i ) => <li key = {i}>{language}</li>)}
            </p>
            <p>
                <img src = {flag} />
            </p>
            <h1>Weather in {country.capital}</h1>
            <p>
                <b>Temperature: </b> {weatherObject.current.temperature} celsius
                <br />
                <img src = {weatherIcon} />
                <b>Wind: </b> {weatherObject.current.wind_speed} mph direction {weatherObject.current.wind_dir}
            </p>
        </>
    )
}
export default DisplayWeather;