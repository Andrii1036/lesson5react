import React, { useEffect, useState } from 'react'
import style from './RickAndMorty.module.css'
import { CentralContent } from '../CentralContent/CentralContent'
import { LeftNavigation } from '../LeftNavigation/LeftNavigation'
import { RightNavigation } from '../RightNavigation/RightNavigation'
import { Route, Switch } from 'react-router'
import {CentralSingleContent} from '../CentralSingleContent/CentralSingleContent'
const Url = 'https://api.sampleapis.com/rickandmorty/characters'
const Text = "Історія звичайного школяра на ім'я Морті, який разом з власним дідом Ріком регулярно займаються вельми незвичайними дослідженнями. Перш хлопець ніколи не вникав в різноманітні авантюри родича. Однак зараз в будь-який час доби готовий зірватися з місця і відправитися в захоплюючі і божевільні пригоди.Всі подорожі завжди переповнені несподіваних поворотів долі і небезпек. Іноді персонажам належить надаватися в центрі найбільш несподіваних ситуацій, що дозволяють дізнатися чимало корисної інформації про навколишній світ. Здійснювати численні вилазки вдається завдяки побудованому з різноманітного мотлоху космічному кораблю."
export function RickAndMorty() {
    const [state, setState] = useState([])
    async function FetchRickAndMorty() {
        const data = await fetch(Url);
        const JsonhData = await data.json();
        setState(JsonhData)
    }
    useEffect(() => {
        FetchRickAndMorty()
    }, [])
    return (
        <div className={style.RickAndMorty}>
            <LeftNavigation content={state} url='RickAndMorty' />
            <Switch>
                <Route path='/RickAndMorty/:characters' exact>
                    <CentralSingleContent content={state} text={Text}/>    
                </Route>
                <Route>
                    <CentralContent content={state} url='RickAndMorty' />
                </Route>
            </Switch>
            <RightNavigation text={Text} />
        </div>
    )
}
export default RickAndMorty