import React, { useState, useEffect } from "react";

import { useFetch } from "../src/Components/UseFetch/2-useFetch"
//COMPONENTS
import Search from "./Components/Search/Search";
import Page from './Components/Page/Page';
import Pagination from "./Components/Paginations/Pagination";
//GET FULL LIST OF PHONES
import getAllPhones from "./Components/Data/GetAllPhone";
//STYLE
import './App.css';



function App() {

  const ALL_PHONES = getAllPhones();

  const [value, setValue] = useState('')
  const [isOpenList, setIsOpenList] = useState(true)

  const [contentPage, setContentPage] = useState(false)
  const [pageNumber, setPageNumber] = useState(1);


  const [ url , setUrl] = useState(`http://localhost:3000/phones?_page=${pageNumber}`)
  const { products } = useFetch(url)
  const PHONES_ON_PAGE = products
  
  //FUNCTION TO STOP SUBMITING FORMS
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  //FUNCTION TO SEPARETE LIST PHONES
  const filterPhones = ALL_PHONES.filter(phone=>{
    return phone.name.toLowerCase().includes(value.toLowerCase())
  })
  // FUNCTION TO SHOW USERS LIST
  const inputClickHandler = () =>{
    setIsOpenList(true)
  }
  // FUNCTION TO CHOOSE ITEM FROM LIST
  const itemClickHandler = (e) =>{
    setValue(e.target.textContent)
    setIsOpenList(!isOpenList)
  }
  //FUNCTION TO SHOW RIGTH CONTENT
  const showPagesApp =()=>{
    if(value != '' && contentPage) {
      return filterPhones
    }
      else return PHONES_ON_PAGE
  }
  const PHONES = showPagesApp()

  //FUNCTION TO CONTROLL CONTENT INTO THE PAGE 
  useEffect(()=>{
    setUrl(`http://localhost:3000/phones?_page=${pageNumber}`)
  },[pageNumber])


  //FUNCTIONS TO CONTROLL NEXT AND PREVIOUS PAGES
  const prevPage = () =>{
    setPageNumber(pageNumber - 1)
    if(pageNumber === 0) setPageNumber(pageNumber)
  }

  const nextPage = () =>{
    setPageNumber(pageNumber + 1)
    if(pageNumber === 10) setPageNumber(pageNumber)
  }

  return (

    <section className="ListPhones">

      <Search
        setValue={setValue}
        itemClickHandler={itemClickHandler}
        inputClickHandler={inputClickHandler}
        handleSubmit={handleSubmit}
        setContentPage={setContentPage}
        allPhones = {filterPhones}
        value = {value}
        isOpenList={isOpenList}
      />

      <Page 
        Phones = {PHONES}
      />

      <Pagination 
        setPageNumber = { setPageNumber }
        prevPage = { prevPage }
        nextPage = { nextPage }
      />

    </section>

  );
  
}

export default App;
