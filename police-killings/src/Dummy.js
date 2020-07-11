import React, {useContext} from 'react'

import {PoliceKillingsContext} from './police-killings-context'

export default function Dummy() {
    const [getPoliceKillingsData, setPoliceKillingsData] = useContext(PoliceKillingsContext)
    return <h1>Name: {getPoliceKillingsData[0].name}</h1>
}