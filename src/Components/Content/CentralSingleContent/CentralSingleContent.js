import React from 'react'
import { useParams } from 'react-router';
import style from '../CentralContent/CentralContent.module.css'
export function CentralSingleContent({ content, text }) {
    const { characters } = useParams()
    const result = content.filter(elem => elem.name === characters)
    return (
        <div className={style.Elem}>
            {result.map(elem => (
                <>
                    <img src={elem.image} alt='' />
                    <h3>{elem.name}</h3>
                    <p>{text}</p>
                </>
            ))}
        </div>
    )
}
export default CentralSingleContent;