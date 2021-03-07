import React, { useEffect, useState } from 'react';
import Country from './country'

const Countries = () => {

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            {
                countries.map(country => <Country countryDetails= {country}></Country>)
            }
        </div>
    );
};

export default Countries;