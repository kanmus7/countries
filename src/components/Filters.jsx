import React from 'react'
import searchImg from '../img/searchIcon.png'
import '../styles/filters.scss'

const Filters = ({ isModeBackgrounds, isModeLetters, mode, setSearchCountrie,
    searchCountrie, countriesData, setsearchForRegion }) => {
    const region = []
    countriesData.forEach(countrie => {
        let currentRegion = region.find(region => region === countrie.region)
        if (!currentRegion) {
            region.push(countrie.region)
        }
    })
    return (
        <div className='filters-container'>
            <div className='search-container'>
                <img className={mode ? 'searchImgLight' : 'searchImgDark'} src={searchImg} alt="searchImg" />
                <input
                    value={searchCountrie} className={`${isModeBackgrounds} ${isModeLetters}`}
                    type="search" placeholder='Search for a country...'
                    onChange={(e) => { setSearchCountrie(e.target.value) }}
                />
            </div>
            <div className='select-container'>
                <select defaultValue='' onChange={(e) => setsearchForRegion(e.target.value)} className={`select-Regions ${isModeBackgrounds} ${isModeLetters}`} name="select" id="selectId" >
                    <option selected value='' disabled>Filter by Region</option>
                    <option value='all'>All</option>
                    {region.map((region, i) => (
                        <option value={region} key={i}>{region}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Filters
