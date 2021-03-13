import React from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import '../barchart.css'

function BarChart() {
    return (
        <div className="BarChart">
            <div className="BarChart-container">
                <div className="bar-chart-title">
                    <h1>Report</h1>
                </div>
                <div className="bar-chart-description">
                    <h2>Title 1</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="bar-chart-items">
                    <Bar
                        height={400}
                        width={600}

                        data={{
                            labels: ['Programming', 'Design', 'BusinessAdministrator'],
                            datasets: [
                                {
                                    label: 'Quantity of Each Falcuty',
                                    data: [12, 9, 5],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(153, 102, 255, 1)',
                                    ],
                                    borderWidth: 1,
                                },
                                {
                                    label: 'Quantity of All Falcuty',
                                    data: [26, 26, 26],
                                    backgroundColor:
                                        'rgba(255, 159, 64, 0.2)',
                                    borderColor:
                                        'rgba(153, 102, 255, 1)',
                                }
                            ],

                        }}

                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true
                                    }
                                }]
                            }
                        }}


                    />
                </div>
                <div className="barchart-table">
                    <h4 className="barchart-table-name">
                        Chart 1: The number of contributions per faculty and the total number of contributions.
                </h4>
                </div>
                <div className="bar-chart-description"><h2>Title 2</h2></div>
                <div className="bar-chart-items-2">
                    <div className="bar-chart-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    </div>
                    <div className="bar-chart-items">
                        <div>
                            <div className="bar-chart-items-2">
                                <Pie
                                    height={400}
                                    width={600}

                                    data={{
                                        labels: ['Programming', 'Design', 'BusinessAdministrator'],
                                        datasets: [
                                            {
                                                label: 'Quantity of Each Falcuty',
                                                data: [12, 9, 5],
                                                backgroundColor: [
                                                    'rgba(255, 99, 132, 0.2)',
                                                    'rgba(54, 162, 235, 0.2)',
                                                    'rgba(153, 102, 255, 0.2)',
                                                ],
                                                borderColor: [
                                                    'rgba(255, 99, 132, 1)',
                                                    'rgba(54, 162, 235, 1)',
                                                    'rgba(153, 102, 255, 1)',
                                                ],
                                                borderWidth: 1,
                                            },
                                            // {
                                            //     label: 'Quantity of All Falcuty',
                                            //     data: [26, 26, 26],
                                            //     backgroundColor:
                                            //         'rgba(255, 159, 64, 0.2)',
                                            //     borderColor:
                                            //         'rgba(153, 102, 255, 1)',
                                            // }
                                        ],

                                    }}

                                    options={{
                                        maintainAspectRatio: false,
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                }
                                            }]
                                        }
                                    }}


                                />
                            </div>
                        </div>
                    </div>
                    <div className="barchart-table">
                        <h4 className="barchart-table-name">
                            Chart 2: The number of contributions per faculty and the total number of contributions.
                    </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarChart;