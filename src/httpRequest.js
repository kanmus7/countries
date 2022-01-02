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

//get by id
const getCountriesById = async (setCountriesData, id) => {
    try {

    } catch (error) {
        setCountriesData([])
    }
}

export { getCountries }