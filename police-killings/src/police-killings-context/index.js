import parse from 'csv-parse/lib/sync'
import React, {createContext, useState, useEffect} from 'react'
export function loadPoliceData () {
    return fetch('/police_killings.csv')
        .then((response) => response.text())
        .then((text) => parse(text, {columns:true}))
}

export const PoliceKillingsContext = createContext()

export function PoliceKillingsProvider (props) {
    const [getPoliceKillingsData, setPoliceKillingsData] = useState([{
        name: "Armed"
    }])
    useEffect(() => {
        loadPoliceData().then((names) => {
            setPoliceKillingsData(names)
        })
    })
    return (
        <PoliceKillingsContext.Provider value={[getPoliceKillingsData, setPoliceKillingsData]}>
        { props.children }
        </PoliceKillingsContext.Provider>
    )
}