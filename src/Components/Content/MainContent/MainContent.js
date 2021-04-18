import React from 'react'
import style from './MainContent.module.css'
import { Home } from '../Home/Home'
import { RickAndMorty } from '../RickAndMorty/RickAndMorty'
import { Futurama } from '../Futurama/Futurama'
import { Route } from 'react-router-dom'
export function MainContent() {
    return (
        <div className={style.MainContent}>
            <Route path='/' exact>
                <Home/>               
            </Route>
            <Route path='/RickAndMorty'>
                <RickAndMorty/>               
            </Route>
            <Route path='/Futurama' exact>
                <Futurama/>               
            </Route>
        </div>
    )
}
export default MainContent;