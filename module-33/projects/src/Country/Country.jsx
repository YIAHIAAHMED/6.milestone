import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);
    // console.log(country.area.area)
    console.log(handleVisitedCountries);
    const handleVisited = () => {
        //console.log('Button Clicked')
        // setVisited(visited? false : true);
        // or 
        setVisited(!visited)
        handleVisitedCountries()

    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name:{country.name.common} </h3>
            <p>Population: {country.population.population} </p>
            <p>Area:{country.area.area} {country.area.area > 300000 ? 'Big Country' : 'Small Country'} </p>
            <button onClick={handleVisited}>
                {visited? 'Visited' : 'Not Visited' }
            </button>
        </div>
    );
};

export default Country;


// css add korar niyon react e 
// 1. inline css (Style Object)
// 2. 



