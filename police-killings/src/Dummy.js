import React, {useContext} from 'react'
import PoliceKillingsContext from './police-killings-context'


export default function Dummy () {
  const [PoliceKillingData] = useContext(PoliceKillingsContext)
  return (<h1>Name: { ( PoliceKillingData.length) > 0 ? JSON.stringify(PoliceKillingData.slice(0,1)[0].policekillings) : "none" }</h1>)
}
