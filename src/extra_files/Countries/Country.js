import React, { useEffect, useState } from 'react';
import Countrye from '../Single_country/Countrye';
import './Country.css';

const Country = () => {
    const [count, setCount] =useState([]);
    useEffect( () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(Response=>Response.json())
        .then(data =>setCount(data));
    },[]);

    return (
        <div >
            <h1> Country List :{count.length}</h1>
            <div className='container'>
            {
                count.map(c=> <Countrye 
                    c={c}
                    /*name ={c.name} 
                    capital ={c.capital} 
                    population ={c.population}
                    flag ={c.flags}8 */
                ></Countrye>)
            }
            </div>
        </div>
    );
};

export default Country;