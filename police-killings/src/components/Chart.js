
import React, { useContext, Component } from 'react'
import { loadPoliceKillingsData } from '../police-killings-context/load-police-killings-data2.js'; 


class Chart extends Component{
    render(){
        let data;
        loadPoliceKillingsData().then((result) => {
            data = result;
            console.log(data);});
        
        
        return(
            <div className="chart">
            </div>
        );
}
}

export default Chart;









/*
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

    /*let dataArray ;
    csv("https://raw.githubusercontent.com/fivethirtyeight/data/master/police-killings/police_killings.csv",function(res){return res}).then(function(d){
        dataArray = d;
        console.log(typeof(d));
        console.log(dataArray);
        
        dataArray.forEach(element => {
            console.log(element['month']);
        });

        dataArray.forEach(element => {
            console.log(element['age']);
        });

    });*/


    /*
        return (
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Police Killings ',
                            fontSize: 25
                        }, 
                        /*legend: {
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

*/