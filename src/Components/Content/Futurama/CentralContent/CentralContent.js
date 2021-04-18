import React from 'react'
import style from './CentralContent.module.css'
import {Link} from 'react-router-dom'
export function CentralContent({content, url}){
    return(
        <div className={style.Content}>
            
            {content.map(elem=>(
            <div  className={style.Elem}>
                <Link to={`/${url}/${elem.name?.first}`}>
                    <img src={elem.images?.main} alt='NO Image'/>
                    <h3>{elem.name?.first} {elem.name?.last}</h3>
                </Link>
            </div>))}
        </div>
    )
}
export default CentralContent