import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {details} = useParams()
    const [country, setCountry] = useState([])

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${details}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])
    return (
        <div>
            <p>Country details of : {details}</p>
            <h2>Name: {country.name}</h2>
            <h2>population: {country.population}</h2>
            <h3>Area: {country.area}</h3>
            <img style={{width: "100%"}} src={country.flag} alt=""/>
        </div>
    );
};

export default CountryDetails;