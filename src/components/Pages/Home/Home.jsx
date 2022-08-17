import React from 'react'
import { Form } from '../../Layouts/Form/Form'
import { NavHome } from '../../Layouts/NavHome/NavHome'
import '../../../static/style/App.css'
export const Home = () => {
  return (
    <div>
        <header>
          <NavHome/>
        </header>
        <main>
          <Form/>
        </main>
    </div>
  )
}
