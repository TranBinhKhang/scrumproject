import React, { Component } from 'react';
import { Bar, Pie } from 'react-chartjs-2'
import '../barchart.css'
import axios from 'axios';


class BarChart extends Component {
    state = {
        allSubmit: [],
        itSubmit: [],
        marketingSubmit: [],
        graphicDesignSubmit: [],
        itSubmitWithoutComment: [],
        marketingSubmitWithoutComment: [],
        graphicDesignSubmitWithoutComment: []
    }

    async componentDidMount() {
        const it = {
            faculty: "It"
        };
        const marketing = {
            faculty: "Maketing"
        };
        const graphicDesign = {
            faculty: "Graphic design"
        };
        const response = await axios.get(`http://localhost:4000/app/getAccountChecked`);
        const account = response.data.account.filter(function (user) {
            return user.role === "Student"
        })
        account.forEach(user => {
            const email = user.email;
            const submitId = user.submitId;
            submitId.forEach(async id => {
                const res = await axios.get(`http://localhost:4000/app/getSubmitById/${id}`);
                if (res.data[0].isChecked) {
                    const submitDetail = {
                        email: email,
                        title: res.data[0].title,
                        description: res.data[0].description,
                        imageFiles: res.data[0].imageFiles,
                        isChecked: res.data[0].isChecked,
                        docsUrl: res.data[0].docsUrl,
                        docsName: res.data[0].docsName,
                        submitId: res.data[0]._id,
                        comments: res.data[0].comments
                    }
                    var allSubmit = this.state.allSubmit;
                    allSubmit.push(submitDetail)
                    this.setState({ allSubmit })
                }
            })
        })
        const Itresponse = await axios.post(`http://localhost:4000/app/getAccountByFaculty`, it);
        const accountIt = Itresponse.data.account.filter(function (user) {
            return user.role === "Student"
        })
        accountIt.forEach(user => {
            const email = user.email;
            const submitId = user.submitId;
            submitId.forEach(async id => {
                const res = await axios.get(`http://localhost:4000/app/getSubmitById/${id}`);
                if (res.data[0].isChecked) {
                    const submitDetail = {
                        email: email,
                        title: res.data[0].title,
                        description: res.data[0].description,
                        imageFiles: res.data[0].imageFiles,
                        isChecked: res.data[0].isChecked,
                        docsUrl: res.data[0].docsUrl,
                        docsName: res.data[0].docsName,
                        submitId: res.data[0]._id,
                        comments: res.data[0].comments
                    }
                    var itSubmit = this.state.itSubmit;
                    itSubmit.push(submitDetail)
                    this.setState({ itSubmit })
                }
            })
        })
        const MarketingResponse = await axios.post(`http://localhost:4000/app/getAccountByFaculty`, marketing);
        const accountMarketing = MarketingResponse.data.account.filter(function (user) {
            return user.role === "Student"
        })
        accountMarketing.forEach(user => {
            const email = user.email;
            const submitId = user.submitId;
            submitId.forEach(async id => {
                const res = await axios.get(`http://localhost:4000/app/getSubmitById/${id}`);
                if (res.data[0].isChecked) {
                    const submitDetail = {
                        email: email,
                        title: res.data[0].title,
                        description: res.data[0].description,
                        imageFiles: res.data[0].imageFiles,
                        isChecked: res.data[0].isChecked,
                        docsUrl: res.data[0].docsUrl,
                        docsName: res.data[0].docsName,
                        submitId: res.data[0]._id,
                        comments: res.data[0].comments
                    }
                    var marketingSubmit = this.state.marketingSubmit;
                    marketingSubmit.push(submitDetail)
                    this.setState({ marketingSubmit })
                }
            })
        })
        const DesignResponse = await axios.post(`http://localhost:4000/app/getAccountByFaculty`, graphicDesign);
        const accountDesign = DesignResponse.data.account.filter(function (user) {
            return user.role === "Student"
        })
        accountDesign.forEach(user => {
            const email = user.email;
            const submitId = user.submitId;
            submitId.forEach(async id => {
                const res = await axios.get(`http://localhost:4000/app/getSubmitById/${id}`);
                if (res.data[0].isChecked) {
                    const submitDetail = {
                        email: email,
                        title: res.data[0].title,
                        description: res.data[0].description,
                        imageFiles: res.data[0].imageFiles,
                        isChecked: res.data[0].isChecked,
                        docsUrl: res.data[0].docsUrl,
                        docsName: res.data[0].docsName,
                        submitId: res.data[0]._id,
                        comments: res.data[0].comments
                    }
                    var graphicDesignSubmit = this.state.graphicDesignSubmit;
                    graphicDesignSubmit.push(submitDetail)
                    this.setState({ graphicDesignSubmit })
                }
            })
        })
        this.state.itSubmit.forEach(item => {
            if (item.comments.length > 0) {
                var itSubmitWithoutComment = this.state.itSubmitWithoutComment;
                itSubmitWithoutComment.push(item)
                this.setState({ itSubmitWithoutComment })
            }
        })
        this.state.marketingSubmit.forEach(item => {
            if (item.comments.length > 0) {
                var marketingSubmitWithoutComment = this.state.marketingSubmitWithoutComment;
                marketingSubmitWithoutComment.push(item)
                this.setState({ marketingSubmitWithoutComment })
            }
        })
        this.state.graphicDesignSubmit.forEach(item => {
            if (item.comments.length > 0) {
                var graphicDesignSubmitWithoutComment = this.state.graphicDesignSubmitWithoutComment;
                graphicDesignSubmitWithoutComment.push(item)
                this.setState({ graphicDesignSubmitWithoutComment })
            }
        })
    }

    render() {
        console.log("Length: ", this.state.allSubmit)
        return (
            <div className="BarChart">
                <div className="BarChart-container">
                    <div className="bar-chart-title">
                        <h1>Report</h1>
                    </div>
                    <div className="bar-chart-description">
                        <h2>Number of contributors within each faculty</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                    </div>
                    <div className="bar-chart-items">
                        <Bar
                            height={400}
                            width={600}

                            data={{
                                labels: ['Programming', 'Graphic Design', 'Marketing'],
                                datasets: [
                                    {
                                        label: 'Quantity of Each Falcuty',
                                        data: [this.state.itSubmit.length, this.state.graphicDesignSubmit.length, this.state.marketingSubmit.length],
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
                                        data: [this.state.allSubmit.length, this.state.allSubmit.length, this.state.allSubmit.length],
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
                    <div className="bar-chart-description"><h2>Percent of contributions by each Faculty</h2></div>
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
                                            labels: ['Programming', 'Graphic Design', 'Marketing'],
                                            datasets: [
                                                {
                                                    label: 'Quantity of Each Falcuty',
                                                    data: [this.state.itSubmit.length / this.state.allSubmit.length * 100, this.state.graphicDesignSubmit.length / this.state.allSubmit.length * 100, this.state.marketingSubmit.length / this.state.allSubmit.length * 100],
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
                                Chart 2: The Percent of contributions by each Faculty
                            </h4>
                        </div>
                    </div>

                    <div className="bar-chart-description"><h2>Number of contributions by each Faculty</h2></div>
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
                                            labels: ['Programming', 'Graphic Design', 'Marketing'],
                                            datasets: [
                                                {
                                                    label: 'Quantity of Each Falcuty',
                                                    data: [this.state.itSubmitWithoutComment.length, this.state.graphicDesignSubmitWithoutComment.length, this.state.marketingSubmitWithoutComment.length],
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
                                Chart 3: Number of contributions by each Faculty
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default BarChart;