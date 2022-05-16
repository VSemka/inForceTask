import React from 'react'
import BoxPhone from '../BoxPhone/BoxPhone'

import styled from './Page.module.css'

const Page = (props) => {

  const { Phones } = props

  return (

    <section className={styled.page}>

      {Phones.map((phone) => {
        return (
          <BoxPhone
            key={phone.id}
            {...phone}
          />
        )
      })}
    </section>

  )

}

export default Page