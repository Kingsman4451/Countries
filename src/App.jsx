import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import API from "./URL/URL";
import context from "./context";
import Countries from "./components/Countries/Countries";
import Navbar from "./components/Navbar/Navbar";
import Country from "./components/Country/Country";

const App = () => {
  const cont = context.context;
  const [data, setData] = useState([]);
  const [datum, setDatum] = useState([]);
  const [staticData, setStaticData] = useState([]);
  const [country, setCountry] = useState(localStorage.getItem("country") || "");
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState(localStorage.getItem("search") || "");


  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(25);


  const firstPage = page * itemsPerPage;
  const numPage = firstPage - itemsPerPage;

  useEffect(() => {
    setLoad(true)
    API.getApi().then((res) => {return setData(res.data), setStaticData(res.data)});
    setLoad(false)
  }, []);


  
  useEffect(() => {
    API.getItem(country).then((res) => setDatum(res.data));
  }, [country]);


  useEffect(() => {
    return search ? setData(staticData.filter((item)=>{
      const regex = new RegExp(search.trim(), "gi");
      return(search ? item.name.match(regex) : item.name)
    }))
    :
    setData(staticData)
  }, [search, data]);


  const currentData = data.slice(numPage, firstPage);

  const values = {
    data,
    datum,
    search,
    country,
    currentData,
    itemsPerPage,
    page,
    load,
    setSearch,
    setPage,
    setCountry
  }

  return (
    <>
      <cont.Provider value={{values}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Countries/>}/>
            <Route path={`/name/:name`} element={<Country/>}/>
          </Routes>
        </BrowserRouter>
      </cont.Provider>
    </>
  );
};


export default App;
