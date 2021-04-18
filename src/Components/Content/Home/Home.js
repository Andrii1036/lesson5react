import React from 'react'
import style from './Home.module.css'
import {CentralContent} from '../CentralContent/CentralContent'
import {LeftNavigation} from '../LeftNavigation/LeftNavigation'
import {RightNavigation} from '../RightNavigation/RightNavigation'
export function Home(){
    return(
        <div className={style.Home}>
            {/* <LeftNavigation/>
            <CentralContent/>
            <RightNavigation/> */}
        </div>
    )
}
export default Home;