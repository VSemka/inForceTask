import React from 'react'
import styled from "./BoxPhone.module.css"

const BoxPhone = (props) => {
  
  const { imageUrl, name, description, price } = props

  return (

    <div className={styled.box_phone}>

      <div className={styled.box_img}>
        <img src={imageUrl} alt="photo phone" className={styled.img} />
      </div>

      <h3 className={styled.title}>{name}</h3>

      <p className={styled.desc}>{description}</p>

      <p className={styled.price}>{price}</p>

    </div>

  )

}

export default BoxPhone