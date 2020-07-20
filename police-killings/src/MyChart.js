import React, { useContext, useEffect, useState } from 'react'
//import { Chart } from 'react-charts'
import PoliceKillingsContext from './police-killings-context'
import { Bar, Line, Pie } from 'react-chartjs-2';
import parse from 'csv-parse/lib/sync'

function MyChart() {

    const test = parse(`name,age,gender,raceethnicity,month,day,year,streetaddress,city,state,latitude,longitude,state_fp,county_fp,tract_ce,geo_id,county_id,namelsad,lawenforcementagency,cause,armed,pop,share_white,share_black,share_hispanic,p_income,h_income,county_income,comp_income,county_bucket,nat_bucket,pov,urate,college
        Adonte Washington,16,Male,Black,February,23,2015,Clearview Ln,Millbrook,AL,32.529577,-86.362829,1,51,30902,1051030902,1051,Census Tract 309.02,Millbrook Police Department,Gunshot,No,3779,60.5,30.5,5.6,28375,51367,54766,0.937935946,3,3,14.1,0.097686375,0.168509509`)
    // const [PoliceKillings] = useContext(PoliceKillingsContext)
    const [PoliceKillings] = [test]



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



    const data = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: "victims per month",
                    data: year,
                    backgroundColor: "rgba(75, 192, 192,0.6)"
                }
            ]
        }

    }
     return <Line data={data} />
  
  
    //return <h1>test</h1>
}


export default MyChart();