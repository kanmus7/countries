import React from 'react'
import '../styles/countries.scss'

const Countries = (props) => {
    let countries = props.countriesData
    countries = findCountriesByRegion(countries)
    if(countries.length === 0) countries = props.countriesData
    countries = findCountrie(countries)

    function findCountrie (countries) {
        return countries.filter((countrie) => countrie.name.toLowerCase().indexOf(props.searchCountrie.toLowerCase()) > -1) 
    }

    function findCountriesByRegion (countries){
        if(props.searchForRegion === 'all'){
            return countries
        }
        return countries.filter((countrie) => countrie.region === props.searchForRegion)
    }
    return (
        <div className='countries-container'>
            {!countries? (<h2 className={`loadingTitle ${props.isModeLetters}`}>Cargando...</h2>): countries.map((countrie, i) => props.render(countrie, i))}
        </div>
    )
}

export default Countries
