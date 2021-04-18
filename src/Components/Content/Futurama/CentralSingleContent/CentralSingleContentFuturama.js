import React from 'react'
import { useParams } from 'react-router';
import style from '../CentralContent/CentralContent.module.css'
export function CentralSingleContentFuturama({content,text}){
    const {characters}=useParams()
    const result = content.filter(elem=> elem.name?.first === characters)
    console.log(characters)
    console.log(result)
    return(
        <div className={style.Elem}>
            {result.map(elem => (
                <>
                    <img src={elem.images?.main} alt='' />
                    <h3>{elem.name?.first} {elem.name?.last}</h3>
                    <p>{text}</p>
                </>
            ))}
            </div>
    )
}
export default CentralSingleContentFuturama;