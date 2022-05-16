import React from 'react'
import styled from "./Search.module.css"

const Search = (props) => {
    const { setValue, allPhones, value, itemClickHandler, inputClickHandler, isOpenList, handleSubmit, setContentPage } = props

    return (
        <div className={styled.box_search} >

            <form className={styled.form} onSubmit={handleSubmit}>

                <input type="text"
                    placeholder='Для пошуку телефона вкажіть його назву'
                    className={styled.field}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onClick={(inputClickHandler)}
                />

                <button className={styled.button} onClick={() => setContentPage(true)}>Знайти</button>

                <ul className={styled.autocomplete_list}>

                    {value && isOpenList
                        ? allPhones.map((phone) => {
                            
                            return (<li onClick={itemClickHandler} 
                                        key={phone.id} 
                                        className={styled.autocomplete_e_list}>
                                            {phone.name}
                                    </li>)
                        }
                        ) : null}
                </ul>
                
            </form>

        </div>
    )
}

export default Search