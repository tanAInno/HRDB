import React, { Component } from 'react';
import {Doughnut,Bar,HorizontalBar} from 'react-chartjs-2';

const data = {
    labels: ["A","B","C"],
    datasets: [
        {
            label: "test",
            fill: false,
            lineTension: 0.1,
            data: [100,200,300],
            backgroundColor: [
                'rgba(255, 92, 132,0.5)',
                'rgba(54, 162, 235,0.5)',
                'rgba(75, 192, 192,0.5)'
            ],
            borderColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }
    ]       
}

class Report extends Component {

    render() {
        return(
            <div className="app-content-container">
                <div className="report-content">
                    <div className="chart-row-container">
                        <div className="chart-container">
                            <Doughnut
                                data={data} 
                                width={screen.width/3}
                                height={280}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive:false
                                }}
                            />
                        </div>
                        <div className="chart-container">
                            <Doughnut
                                data={data} 
                                width={screen.width/3}
                                height={280}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive:false
                                }}
                            />
                        </div>
                        <div className="chart-container">
                            <Doughnut
                                data={data} 
                                width={screen.width/3}
                                height={280}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive:false
                                }}
                            />
                        </div>
                    </div>
                    <div className="chart-row-container">
                        <div className="chart-container">
                            <Doughnut
                                data={data} 
                                width={screen.width/3}
                                height={280}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive:false
                                }}
                            />
                        </div>
                        <div className="chart-container">
                            <Doughnut
                                data={data} 
                                width={screen.width/3}
                                height={280}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive:false
                                }}
                            />
                        </div>
                        <div className="chart-container">
                            <Doughnut
                                data={data} 
                                width={screen.width/3}
                                height={280}
                                options={{
                                    maintainAspectRatio: false,
                                    responsive:false
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Report