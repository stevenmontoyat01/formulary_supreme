import React from 'react'
import  Logo  from '../../../static/img/Supreme_Logo.png'
import { Li } from '../../UI/Li/Li'
/*----------------- icons ------------------*/ 
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*------------------------------------------*/
export const NavHome = () => {
  return (
    <nav>
        <div className='contentlogo'>
            <img src={Logo} alt="logo" className=''/>
        </div>
        <input type='checkbox' id='check'/>
        <label htmlFor="check" className='menubtn'>
            <FontAwesomeIcon icon={faBars}/>
        </label>
        <ul className='navMenu'>
            <Li href='#' text='incio sesion'></Li>
            <Li href='#' text='registro'></Li>
        </ul>
    </nav>
  )
}
