import React from 'react'
import { Link } from 'react-router-dom'

const Countrie = ({ countrie,isModeLetters, isModeBackgrounds }) => {
    return (
        <Link  to={`/CountrieDetail/${countrie.name}`}>
        <div  className={`countrie-container  ${isModeBackgrounds}`}>
            <div className='img-container'>
                <img src={countrie.flags.svg} alt="imgFlag" />
            </div>
            <div className='countrieInfo-container'>
                <p className={`countriName ${isModeLetters}`}>{countrie.name}</p>
                <p className={`countriInfo ${isModeLetters}`}>{`Population: ${Intl.NumberFormat().format(countrie.population)}`}</p>
                <p className={`countriInfo ${isModeLetters}`}>{`Region: ${countrie.region}`}</p>
                <p className={`countriInfo ${isModeLetters}`}>{`Capital: ${countrie.capital || 'Not found'}`}</p>
            </div>
        </div>
        </Link>
    )
}

export default Countrie
