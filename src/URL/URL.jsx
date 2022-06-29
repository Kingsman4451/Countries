import React from "react"
import axios from "axios"

const URL = "https://restcountries.com/v2"

const API = {
  getApi: ()=>{
    return axios.get(`${URL}/all`)
  },
  getItem:(isName)=>{
    return axios.get(`${URL}/name/${isName}`)
  }
}

export default API