import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    // console.log(countries);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        //console.log('visited countries', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h1>In the Contries: {countries.length} </h1>
            <h3>Total Visited Country:{visitedCountries.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>
                            {country.name.common} </li>)


                }
            </ol>

            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.cca3.cca3}
                            handleVisitedCountries={handleVisitedCountries}
                        >
                        </Country>)
                }

            </div>

        </div>
    );
};

export default Countries;