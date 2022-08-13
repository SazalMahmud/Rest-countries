import React from 'react';
import './Countrye.css';

const Countrye = (props) => {
    console.log(props.c);
    return (
        <div className='c'>
            <h2 className='name'> Country Name :{props.c.name.official}</h2>
            <h4>Capital :{props.c.capital}</h4>
            <img src={props.c.flags.png} alt="" />
            <h5>Population :{props.c.population}</h5>
            <h3 className='coatOfArms'>CoatOfArms :</h3>
            <img className='img' src={props.c.coatOfArms.png} alt="" />
        </div>
    );
};

export default Countrye;