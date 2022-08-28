import React, { useEffect, useState } from 'react'
import { Title } from '../../UI/Title/Title'
import { Inputs } from '../../UI/Inputs/Inputs'
import { Label } from '../../UI/Label/Label'
import '../../../static/style/App.css'
import axios from 'axios'
/*--------------------icons--------------------*/
import { HiXCircle , HiBadgeCheck } from 'react-icons/hi'
import { AiFillEyeInvisible , AiFillEye } from 'react-icons/ai';

export const Login = () => {
    const [valueUser,setValueuser] = useState(true)
    const [valuePass,setValuepass] = useState(true)

    /*-------------------------------------------------*/
    const [user,setUser] = useState('')
    const [password,setPassword] = useState('')
    /*-------------------------------------------------*/
    const [state1,setState1] = useState(false)

    const buttoneye = () =>{
        setState1(prevState => !prevState)
    }
    /*-------------------------------------------------*/
    const inputuser = (event) =>{
        setUser(event.target.value)
    }

    const inputpass = (event) =>{
        setPassword(event.target.value)
    }
    let counter = 0
    /*-------------------------------------------------*/
    /*-------------------------------------------------*/
    const get = () => {
    axios({
        method:'get',
        url:'https://backend-edw.herokuapp.com/usuarios',
        responseType: 'json'  
    })
    .then(function (response) {
        response.data.find((array)=>{
            if (user.toUpperCase() === array[2].toUpperCase() && password.toUpperCase() === array[3].toUpperCase()){
                setValueuser(true)
                setValuepass(true)
                alert('se encontro usuario')
            }else if ((response.data.length-1) === (counter)){
                setValueuser(false)
                setValuepass(false)
                alert ('error en usuario o contraseña')
                counter=0
            }else{
                counter++
            }
        })
    });
    }
    return (
        <div className='form'>
            <div className='contentButton'>
                <Title text="INICIO SESION" style='title'></Title>
            </div>
            <Label text='Usuario' label='name' style='label'></Label>
            <div>
                <div className='contentInput'>
                    <Inputs place_holder='digite su nombre' id='name' style='input' change={inputuser}/>
                    {
                        valueUser ? null : <HiXCircle className='icon'/>
                    }
                </div>
                <hr />
            </div>
            <Label text='Contraseña' label='password' style='label'></Label>
            <div>
                <div className='contentInput'>
                    <Inputs place_holder='digite contraseña' id='Password' style='input' change={inputpass} type={state1 ? 'text' : 'password'}/>
                    {
                        valuePass ? null : <HiXCircle className='icon'/>
                    }
                    <button className='buttonContent' onClick={buttoneye} type='button'>
                    {
                        state1 ? <AiFillEye/> : <AiFillEyeInvisible/>
                    }
                </button>
                </div>
                <hr />
            </div>
            <div className='contentButton'>
                    <button onClick={get}><b>login</b></button>
            </div>
        </div>
    )
}
