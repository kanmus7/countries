import React from 'react'
import searchImg from '../img/searchIcon.png'
import '../styles/filters.scss'

const Filters = ({ isModeBackgrounds, isModeLetters, mode, setSearchCountrie, searchCountrie }) => {
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
            <select className={`${isModeBackgrounds} ${isModeLetters}`} name="select" id="selectId" >
                <option selected disabled>Filter by Region</option>
            </select>
        </div>
    )
}

export default Filters
