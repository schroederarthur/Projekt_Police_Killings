import React, { useEffect, useState } from 'react'
import PoliceKillingsContext from './police-killings-context'
import loadPoliceKillingsData from './police-killings-context/load-police-killings-data2'
import App from './App'

export default function Main () {
    const [PoliceKillings, setPoliceKillings] = useState([]);
    
    useEffect(() => {
        if (!PoliceKillings || PoliceKillings.length === 0) {
            loadPoliceKillingsData()
                .then((json) => {
                    console.log('loading...', json)
                    setPoliceKillings(json)
                })
                .catch((err) => {
                    console.error(`Error: ${err}`);
                })
        }
    })

    return (
        <PoliceKillingsContext.Provider value={[PoliceKillings]}>
            <App/>
        </PoliceKillingsContext.Provider>
    )
}