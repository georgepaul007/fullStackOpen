import DisplayInfo from './DisplayInfo'
import {useState} from 'react';
const CountryDisplay = ({country}) => {
    const [showResults,setShowResults] = useState(false)
    const handleClicker = () => {
        console.log("HI");
        setShowResults(true)
    }
    return(
        <>
            <h1>{country.name.common}</h1>
            <input type = "button" value = "Show" onClick = {handleClicker} /> 
            <DisplayInfo  country = {country} shouldShow = {showResults} />
        </>
    )
}
export default CountryDisplay;