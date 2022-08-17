import React, { useEffect, useState } from 'react'
import '../../../static/style/App.css'
import { Title } from '../../UI/Title/Title'
import { Inputs } from '../../UI/Inputs/Inputs'
import { Label } from '../../UI/Label/Label'

/*import iconss*/
import { AiFillEyeInvisible , AiFillEye } from 'react-icons/ai';
import { HiXCircle , HiBadgeCheck } from 'react-icons/hi'
export const Form = () => {

    const [valuename,setValuename] = useState(true)
    const [valuepass,setValuepass] = useState(true)
    const [valueconfirm,setValueconfirm] = useState(true)
    /*----------------------------------------------------*/
    const [name,setName] = useState('')
    const [password,setpassword] = useState('')
    const [confirmpass,setConfirmpass] = useState('')
    const signos =  /^[a-zA-Z0-9]{0,20}$/;

    const inputname  = (event) =>{
        setName(event.target.value)
    }

    const passwords= (event) =>{
        setpassword(event.target.value)
    }

    const checkPassword= (event) =>{
        setConfirmpass(event.target.value)
    }

    useEffect(() => {
        signos.test(name) ? setValuename(true) : setValuename(false)
        signos.test(password) ? setValuepass(true) : setValuepass(false)
        signos.test(confirmpass) ? setValueconfirm(true) : setValueconfirm(false)
    }
    , [ name , password, confirmpass])
    
    /*----------------------HOOKS----------------------*/

    const [state1,setState1] = useState(false)

    const buttoncont = () => {
        setState1 (prevState => !prevState);
    }

    const [state2,setState2] = useState(false)

    const buttonconfirm = () => {
        setState2 (prevState => !prevState);
    }

    return (
            <form>
                <div className='contentButton'>
                    <Title text="FORMULARIO" style='title'/>
                </div>
                <Label text='Nombre:' label='name' style='label'/>
                <div>
                    <div className='contentInput'>
                        <Inputs place_holder='ingrese Nombre' id='name' style='input' change={inputname} />
                        {
                            valuename ? <HiBadgeCheck className='icon'/> : <HiXCircle className='icon'/>
                        }
                    </div>
                    <hr />
                </div>
                <Label text='Email:' label='email' style='label'/>
                <div>
                    <div className='contentInput'>
                        <Inputs place_holder='ingrese Email' id='email' style='input'  type='email'/>
                    </div>
                    <hr />
                </div>
                <Label text='Contraseña:' label='contraseña' style='label'/>
                <div>
                    <div className='contentInput'>
                        <Inputs place_holder='ingrese Contraseña' id='contraseña' style='input' type={state1 ? 'text' : 'password'} change={passwords} />
                        {
                            valuepass ? <HiBadgeCheck className='icon'/> : <HiXCircle className='icon'/>
                        }
                        <button className='buttonContent' onClick={buttoncont} type='button'>
                            {
                                state1 ? <AiFillEye/> : <AiFillEyeInvisible/>
                            }
                        </button>
                    </div>
                    <hr />
                </div>
                <Label text='Confirmar Contraseña:' label='confirma_contra' style='label'/>
                <div>
                    <div className='contentInput'>
                        <Inputs place_holder='Confirmar Contraseña' id='confirma_contra' style='input' type={state2 ? 'text' : 'password'} change={checkPassword}/>
                        {
                            valueconfirm ? <HiBadgeCheck className='icon'/> : <HiXCircle className='icon'/>
                        }
                        <button className='buttonContent' onClick={buttonconfirm} type='button'>
                            {
                                state2 ? <AiFillEye/> : <AiFillEyeInvisible/>
                            }
                        </button>
                    </div>
                    <hr />
                </div>
                <div className='contentButton'>
                    <button><b>register</b></button>
                </div>
            </form>
    )
}
