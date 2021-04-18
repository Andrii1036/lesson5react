import React from 'react'
import style from './RightNavigation.module.css'
export function RightNavigation({text}){
    return(
        <div className={style.RightNavigation}>
            <p>
                {text}
            </p>
        </div>
    )
}
export default RightNavigation;