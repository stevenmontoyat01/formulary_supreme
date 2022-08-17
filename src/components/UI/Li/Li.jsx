import React from 'react'

export const Li = ({href,text,style}) => {
  return (
    <li><a href={href} className={style}>{text}</a></li>
  )
}
