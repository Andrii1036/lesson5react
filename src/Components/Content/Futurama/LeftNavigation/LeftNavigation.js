import React from 'react'
import style from './LeftNavigation.module.css'
import {NavLink} from 'react-router-dom'
export function LeftNavigation({content,url}){
    console.log(url)
    return(
        
        <div className={style.LeftNavigation}>
           {content.map(character=><NavLink key={character?.id} to={`/${url}/${character.name?.first}`}>{character.name?.first} {character.name?.last}</NavLink>)}
        </div>
    )
}
export default LeftNavigation;