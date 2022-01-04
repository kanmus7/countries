//get
const getCountries = async (setCountriesData) => {
    try {
        const response = await fetch("https://restcountries.com/v2/all")
        const data = await response.json()
        setCountriesData(data)
    } catch (error) {
        setCountriesData([])
    }
}

//get countrie by name
const getCountriesByName = async (setCountrieDetail, name) => {
    try {
        const response = await fetch(`https://restcountries.com/v2/name/${name}`)
        const data = await response.json()
        setCountrieDetail(data)
    } catch (error) {
        setCountrieDetail([])
    }
}

export { getCountries, getCountriesByName }