import React from 'react'
import searchImg from '../img/searchIcon.png'
import '../styles/main.scss'

const Filters = ({ isModeBackgrounds, isModeLetters , mode}) => {
    return (
        <div className='filters-container'>
            <div className='search-container'>
                <img className={mode? 'searchImgLight' : 'searchImgDark'}  src={searchImg} alt="searchImg" />
                <input className={`${isModeBackgrounds} ${isModeLetters}`} type="search" placeholder='Search for a country...' />
            </div>
            <select className={`${isModeBackgrounds} ${isModeLetters}`} name="select" id="selectId" >
                <option selected disabled>Filter by Region</option>
            </select>
        </div>
    )
}

export default Filters
