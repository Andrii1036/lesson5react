import React from 'react'
import style from './LeftNavigation.module.css'
import {NavLink} from 'react-router-dom'
export function LeftNavigation({content, url}){
    return(
        
        <div className={style.LeftNavigation}>
           {content.map(character=><NavLink to={`/${url}/${character.name}`}>{character.name}</NavLink>)}
        </div>
    )
}
export default LeftNavigation;