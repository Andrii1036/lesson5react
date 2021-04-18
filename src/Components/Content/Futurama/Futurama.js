import React, { useEffect, useState } from 'react'
import style from './Futurama.module.css'
import { CentralContent } from './CentralContent/CentralContent'
import { LeftNavigation } from './LeftNavigation/LeftNavigation'
import { RightNavigation } from './RightNavigation/RightNavigation'
import { Route, Switch } from 'react-router'
import {CentralSingleContentFuturama} from './CentralSingleContent/CentralSingleContentFuturama'
const Url = 'https://api.sampleapis.com/futurama/characters'
const Text = "Головний герой серіалу - чоловік на ім'я Фрай. Це був спокійний і тихий чоловік. Жив собі він і нікому не створював ніяких незручностей. І так сталося, що його заморозили. Пролежав він у такому стані цілу тисячу років. І розморожений був лише в 2999 році.За цю тисячу років світ змінився кардинальним чином. Людей на планеті зовсім не залишилося. Тепер її населяють прибульці з інших планет і роботи. Фраю доведеться адаптуватися до таких умов.У новому світі, як і тоді, коли герой був заморожений, як і раніше, щоб мати гроші на прожиття, потрібно працювати. Чоловік влаштовується на пошту кур'єром - він повинен розносити по різних адресах посилки.Згодом у Фрая з'являються знайомі і навіть друзі."
export function Futurama() {
    const [state, setState] = useState([])
    async function FetchFuturama() {
        const data = await fetch(Url);
        const JsonhData = await data.json();
        setState(JsonhData)
    }
    useEffect(() => {
        
        FetchFuturama()
    }, [])
    return (
        <div className={style.Futurama}>
            <LeftNavigation content={state} url='Futurama' />
            <Switch>
            debugger
                <Route path='/Futurama/:characters' exact>
                    <CentralSingleContentFuturama content={state} text={Text}/>    
                </Route>
                <Route>
                    <CentralContent content={state} url='Futurama' />
                </Route>
            </Switch>
            <RightNavigation text={Text} />
        </div>
    )
}
export default Futurama