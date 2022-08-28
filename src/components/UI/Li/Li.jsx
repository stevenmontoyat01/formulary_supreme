import React from 'react'
import { Link } from 'react-router-dom'

export const Li = ({href,text,style}) => {
  return (
    <li><Link to={href} className={style}>{text}</Link></li>
  )
}
