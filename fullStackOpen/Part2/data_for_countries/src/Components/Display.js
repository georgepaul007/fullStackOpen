import CountryDisplay from './CountryDisplay'
import DisplayWeather from './DisplayWeather'
const Display = ({filteredNames}) => {
    if(filteredNames.length === 1){
        return (
            <>
                <DisplayWeather country = {filteredNames[0]} />
            </>
        )
    }
    else if(filteredNames.length < 10 ){
    return (
        <div>
        {filteredNames.map((country, i) => <div key = {i}> <CountryDisplay country = {country} /> </div>)}
        </div>
    )
    }   
    else {
        return (
            <>
            <div>
            Too many matches, specify another filter
            </div>
            </>
        )
    }
}
export default Display;