import axios from 'axios'
import {useEffect, useState} from 'react'

const DisplayWeather = ({country}) => {
    const api_key = process.env.REACT_APP_API_KEY
    console.log(api_key)
    const [weatherObject, setWeatherObject] = useState([])
    const hook = () => {
        axios
          .get("http://api.weatherstack.com/current?access_key={0}&query={1}",api_key,country.capital)
          .then(response => {
            console.log("promise")
            setWeatherObject(response.data)
          })
      }
    useEffect(hook, [])
    console.log(weatherObject)
    return (
        <>
            <p>HI</p>
        </>
    )
}
export default DisplayWeather;