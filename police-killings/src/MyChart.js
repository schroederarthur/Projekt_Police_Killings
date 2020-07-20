import React, { useContext } from 'react'
import { Chart } from 'react-charts'
import PoliceKillingsContext from './police-killings-context'

export default function MyChart({ }) {


    const PoliceKillings = useContext(PoliceKillingsContext)

   


    const months = PoliceKillings.map((p) => p.month)
    //const years = PoliceKillings.map((y) => y.year)
    
    const january = months.filter((m) => m === 'january').length
    const february = months.filter((m) => m === 'february').length
    const march = months.filter((m) => m === 'march').length
    const april = months.filter((m) => m === 'april').length
    const may = months.filter((m) => m === 'may').length
    const june = months.filter((m) => m === 'june').length
    const july = months.filter((m) => m === 'july').length
    const august = months.filter((m) => m === 'august').length
    const september = months.filter((m) => m === 'september').length
    const october = months.filter((m) => m === 'october').length
    const november = months.filter((m) => m === 'november').length
    const december = months.filter((m) => m === 'december').length

    const year = [january, february, march, april, may, june, july, august, september, october, november, december]


  
    
        

    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: year
            },
            {
                label: 'mean',
                data: [
                    [50, 10]
                ]
            }
        ],
        [year]
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
};

    /*const [PoliceKillings] = useContext(PoliceKillingsContext)
    const age = PoliceKillings
        .map((PoliceKillingsData) => PoliceKillingsData.age)
        .map((PoliceKillingsData) => parseInt(PoliceKillingsData, 10))
        .sort((a, b) => a - b)
        .reduce((result, value) => {
            const category = Math.floor(value/100000000)
            console.log('$', value, category, result[category])
            result[category] += 1;
            return result;
        }, [...Array(80)].map(() => 0))
        .map((value, index) => [index, value])
    
    console.log('##########', age)
    const mean = (array) => array.reduce((sum, val) => {return sum + val}, 0)
    console.log('0000000 ', mean(age))
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: age
            },
            {
                label: 'mean',
                data: [
                    [50, 10]
                ]
            }
        ],
        [age]
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
}*/