import React, { useContext, useState, useEffect } from 'react';
import context from '../../context';
import "./Country.css"

const Country = () => {
  const { values } = useContext(context.context)

  useEffect(()=>{
    localStorage.setItem("country", values.country)
  },[])


  if (values.load){
    return <h1>LOADING.....</h1>
  }

  return (
    <>
      <div className='pt-5'>
        {values.datum.map((item)=>{
          return <div className='country-card card mx-auto mt-5 mb-3'>
            <img class="card-image-top" src={item.flag} alt={item.name}></img>
            <div className="card-body border-top">
            <h4 className="card-title text-center">{item.name}</h4>
              <div className="card-info text-center d-flex flex-column flex-md-row justify-content-around">
                <div className="card-left">
                  <p className="card-text m-0">{`Capital: ${item.capital}`}</p>
                  <p className="card-text m-0">{`Region: ${item.region}`}</p>
                  <p className="card-text m-0">{`Population: ${item.population}`}</p>
                  <p className="card-text m-0">{`Area: ${item.area} km/kv`}</p>
                </div>
                <div className="card-right">
                  <p className="card-text m-0">{`Languages: ${item.languages.map((item)=> item.name)}`}</p>
                  <p className="card-text m-0">{`Currencies: ${item.currencies.map((item)=> item.name)}`}</p>
                  <p className="card-text m-0">{`Calling codes: ${item.callingCodes.join(", ")}`}</p>
                  <p className="card-text m-0">{`Subregion: ${item.subregion}`}</p>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </>
  );
};

export default Country;