import React from 'react'
import style from './CentralContent.module.css'
import {Link} from 'react-router-dom'
export function CentralContent({content, url}){
    return(
        <div className={style.Content}>
            
            {content.map(elem=>(
            <div key={elem.id} className={style.Elem}>
                <Link to={`/${url}/${elem.name}`}>
                    <img src={elem.image} alt=''/>
                    <h3>{elem.name}</h3>
                </Link>
            </div>))}
        </div>
    )
}
export default CentralContent