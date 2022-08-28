import React, { createElement, useEffect, useState } from 'react'
import { Title } from '../../UI/Title/Title'

export const Data = () => {

    const [json,setJson] = useState([])

    useEffect(()=>{
        const setjson = async () => {
            let url ;
            let jsons;
            url = await fetch('https://backend-edw.herokuapp.com/usuarios')
            jsons = await url.json()
            setJson(jsons)
        }
        setjson()
        console.log(json)
    },[])
    let num = 1
    return (
        <div className='contentInfo' id='contentInfo'>
            <div className='contentTitle'>
                <Title text='REGISTROS' style='title' />
            </div>
            <th className='contentLine'>
                <td className='color_subti'>identificador</td>
                <td className='color_subti'>nombre</td>
                <td className='color_subti'>usuario</td>
                <td className='color_subti'>contraseña</td>
            </th>
            {
                json.map(element => 
                <th className='contentLine'>
                    <td className='color_text'>{num++}</td>
                    <td className='color_text'>{element[1]}</td>
                    <td className='color_text'>{element[2]}</td>
                    <td className='color_text'>{element[3]}</td>
                </th>
                )
            }
        </div>
    )
}
