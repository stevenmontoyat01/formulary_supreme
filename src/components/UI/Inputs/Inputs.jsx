import React from 'react'

export const Inputs = ({type,place_holder,style,id,change}) => {
  return (
    <input type={type} placeholder={place_holder} className={style} id={id} onKeyUp={change}/>
  )
}
