import React from 'react'
import styled from './Pagination.module.css'

const Pagination = (props) => {

const { setPageNumber, prevPage, nextPage} = props

  return (

    <div className={styled.box_button}>

        <button className={styled.button} onClick={()=>prevPage()}>Попередня</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(1)}>1</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(2)}>2</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(3)}>3</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(4)}>4</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(5)}>5</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(6)}>6</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(7)}>7</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(8)}>8</button>
       
        <button className={styled.button} onClick={()=>setPageNumber(9)}>9</button>
        
        <button className={styled.button} onClick={()=>setPageNumber(10)}>10</button>
       
        <button className={styled.button} onClick={()=>nextPage()}>Наступна</button>

    </div>

  )

}

export default Pagination