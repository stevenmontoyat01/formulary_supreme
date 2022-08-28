import React from 'react'
import { NavHome } from '../../Layouts/NavHome/NavHome'
import { Login } from '../../Layouts/Login/Login'
 
export const Inicio = () => {
  return (
    <div>
        <header>
            <NavHome/>
        </header>
        <main>
            <Login/>
        </main>
    </div>
  )
}
