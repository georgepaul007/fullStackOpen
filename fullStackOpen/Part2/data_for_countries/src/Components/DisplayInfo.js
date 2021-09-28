const DisplayInfo = ({country,shouldShow}) => {
    console.log(country)
    const languages = Object.values(country.languages)
    const flag = country.flags.png
    if(shouldShow === true){
    return(
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
        </>
    )
    }
    else {
        return(<></>)
    }
}
export default DisplayInfo;