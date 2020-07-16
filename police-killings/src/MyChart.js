import React, { useContext } from 'react'
import { Chart } from 'react-charts'
import PoliceKillingsContext from './police-killings-context'

export default function MyChart({ }) {

    const [PoliceKillings] = useContext(PoliceKillingsContext)
    const name = PoliceKillings
        .map((PoliceKillingsData) => PoliceKillingsData.name)
        .map((PoliceKillingsData) => parseInt(PoliceKillingsData, 10))
        .sort((a, b) => a - b)
        .reduce((result, value) => {
            const category = Math.floor(value/100000000)
            console.log('$', value, category, result[category])
            result[category] += 1;
            return result;
        }, [...Array(80)].map(() => 0))
        .map((value, index) => [index, value])
    
    console.log('##########', name)
    const mean = (array) => array.reduce((sum, val) => {return sum + val}, 0)
    console.log('0000000 ', mean(name))
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: name
            },
            {
                label: 'mean',
                data: [
                    [50, 10]
                ]
            }
        ],
        [name]
    )

    const series = React.useMemo(
        () => {
            return {
                type: 'bar'
            }
        }, []
    )

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )

    const lineChart = (
        // A react-chart hyper-responsively and continuously fills the available
        // space of its parent element automatically
        <div
            style={{
                width: '800px',
                height: '600px',
            }}
        >
            <Chart data={data} series={series} axes={axes} />
        </div>
    )
    return lineChart
}