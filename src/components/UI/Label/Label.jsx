import React from 'react'

export const Label = ({text,label,style}) => {
  return (
    <b><label htmlFor={label}><p className={style}>{text}</p></label></b>
  )
}
