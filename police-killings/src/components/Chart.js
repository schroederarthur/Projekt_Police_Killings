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
                        tooltips: {
                            callbacks: {
                              label: function(tooltipItem, data) {
                                var dataset = data.datasets[tooltipItem.datasetIndex];
                                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                var total = meta.total;
                                var currentValue = dataset.data[tooltipItem.index];
                                var percentage = parseFloat((currentValue/total*100).toFixed(1));
                                return currentValue + ' (' + percentage + '%)';
                              },
                              title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                              }
                            }
                          },
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

                <Pie
                    data={{
                        
                        labels: ['Gunshot', 'Death in custody', 'Taser', 'Struck by vehicle', 'Unknown'],
                        datasets:[
                          {
                            label:'Police Killings Cause of Death',
                            data:[
                             411,
                             14,
                             27,
                             12,
                             3
                            ],
                            backgroundColor:[
                              'rgba(66, 245, 66, 0.6)',
                              'rgba(212, 66, 245, 0.6)',
                              'rgba(245, 245, 66, 0.6)',
                              'rgba(255, 133, 51, 0.6)',
                              'rgba(0, 0, 0, 0.6)',
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
                        tooltips: {
                            callbacks: {
                              label: function(tooltipItem, data) {
                                var dataset = data.datasets[tooltipItem.datasetIndex];
                                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                var total = meta.total;
                                var currentValue = dataset.data[tooltipItem.index];
                                var percentage = parseFloat((currentValue/total*100).toFixed(1));
                                return currentValue + ' (' + percentage + '%)';
                              },
                              title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                              }
                            }
                          },
                        tooltips: {
                            callbacks: {
                              label: function(tooltipItem, data) {
                                var dataset = data.datasets[tooltipItem.datasetIndex];
                                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                var total = meta.total;
                                var currentValue = dataset.data[tooltipItem.index];
                                var percentage = parseFloat((currentValue/total*100).toFixed(1));
                                return currentValue + ' (' + percentage + '%)';
                              },
                              title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                              }
                            }
                          },
                        title: {
                            display: this.props.displayTitle,
                            text: 'Police Killings by cause of death',
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
                        
                        labels: ['Black', 'White', 'Hispanic/Latino', 'Unknown', 'Asian/Pacific Islander', 'Native American'],
                        datasets:[
                          {
                            label:'Police Killings Cause of Death',
                            data:[
                             135,
                             236,
                             67,
                             15,
                             10,
                             4
                            ],
                            backgroundColor:[
                              'rgba(66, 245, 66, 0.6)',
                              'rgba(212, 66, 245, 0.6)',
                              'rgba(150, 245, 220, 0.6)',
                              'rgba(255, 133, 51, 0.6)',
                              'rgba(0, 0, 0, 0.6)',
                              'rgba(245, 245, 66, 0.6)',
                              'rgba(66, 245, 66, 0.6)'

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
                        tooltips: {
                            callbacks: {
                              label: function(tooltipItem, data) {
                                var dataset = data.datasets[tooltipItem.datasetIndex];
                                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                var total = meta.total;
                                var currentValue = dataset.data[tooltipItem.index];
                                var percentage = parseFloat((currentValue/total*100).toFixed(1));
                                return currentValue + ' (' + percentage + '%)';
                              },
                              title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                              }
                            }
                          },
                        tooltips: {
                            callbacks: {
                              label: function(tooltipItem, data) {
                                var dataset = data.datasets[tooltipItem.datasetIndex];
                                var meta = dataset._meta[Object.keys(dataset._meta)[0]];
                                var total = meta.total;
                                var currentValue = dataset.data[tooltipItem.index];
                                var percentage = parseFloat((currentValue/total*100).toFixed(1));
                                return currentValue + ' (' + percentage + '%)';
                              },
                              title: function(tooltipItem, data) {
                                return data.labels[tooltipItem[0].index];
                              }
                            }
                          },
                        title: {
                            display: this.props.displayTitle,
                            text: 'Police Killings by race',
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