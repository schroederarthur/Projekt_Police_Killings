import { createContext } from 'react'

const PoliceKillingsContext = createContext([[], () => {throw new Error ('Context not yet defined')}])

export default PoliceKillingsContext