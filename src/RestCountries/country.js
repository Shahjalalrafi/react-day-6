import React from 'react';
import { Link } from 'react-router-dom';

const country = ({countryDetails}) => {

    const design = {
        border: "1px solid black",
        padding: "5px",
        margin: "3px"
    }
    return (
        <div>
            <div style={design}>
                <h4>Name: {countryDetails.name}</h4>
                <Link to={`/country/${countryDetails.name}`}><button>show details</button></Link>
            </div>
        </div>
    );
};

export default country;