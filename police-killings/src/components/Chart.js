import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


//import Papa from 'papaparse';
import '../police_killings.csv';

//import { csv } from 'd3';



class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
    }


    render() {


        /*let dataArray;
        csv("https://raw.githubusercontent.com/fivethirtyeight/data/master/police-killings/police_killings.csv",function(res){
            dataArray = res;
            console.log(dataArray);   
        })
    */
      /*async function GetFile(be) {
            const file = Papa.parse(await fetchCsv());
            console.log(file);
            return file;
        }*/
        // async function fetchCsv() {
        //     const response = await fetch('../police_killings.csv');
        //     const reader = response.body.getReader();
        //     const result = await reader.read();
        //     const decoder = new TextDecoder('utf-8');
        //     const csv = await decoder.decode(result.value);
        //     console.log('csv', csv);
        //     return csv;
        // }

        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={
                        {
                        title: {
                            display: this.props.displayTitle,
                            text: 'Police Killings per Month',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />

                <Pie
                    data={{
                        labels: ['Male', 'Female'],
                        datasets:[
                          {
                            label:'Police Killings by Gender',
                            data:[
                             445,
                             22
                            ],
                            backgroundColor:[
                              'rgba(66, 135, 245, 0.6)',
                              'rgba(245, 66, 66, 0.6)',
                            //   'rgba(255, 206, 86, 0.6)',
                            //   'rgba(75, 192, 192, 0.6)',
                            //   'rgba(153, 102, 255, 0.6)',
                            //   'rgba(255, 159, 64, 0.6)',
                            //   'rgba(255, 99, 132, 0.6)',
                            //   'rgba(255, 99, 132, 0.6)',
                            //   'rgba(54, 162, 235, 0.6)',
                            //   'rgba(255, 206, 86, 0.6)',
                            //   'rgba(75, 192, 192, 0.6)',
                            //   'rgba(255, 159, 64, 0.6)'
                            ]}
                        ]
                    }
                }
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Police Killings by Gender ',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;