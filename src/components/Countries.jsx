import React from 'react'
import '../styles/countries.scss'

const Countries = (props) => {
    let countries = props.countriesData
    countries = findCountrie(countries)

    function findCountrie (countries) {
        return countries.filter((countrie) => countrie.name.toLowerCase().indexOf(props.searchCountrie) > -1) 
    }
    return (
        <div className='countries-container'>
             {countries.map(countrie => props.render(countrie))}
        </div>
    )
}

export default Countries
