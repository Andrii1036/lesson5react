import React from 'react'
import style from './Header.module.css'
import { NavLink,} from 'react-router-dom'

export function Header() {
    return (
            <header className={style.Header}>
                <button><NavLink to='Futurama'>Futurama</NavLink></button>
                <button><NavLink to='/'>Home</NavLink></button>
                <button><NavLink to='RickAndMorty'>RickandMorty</NavLink></button>
            </header>
    )
}
export default Header;