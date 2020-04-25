import React from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { labalesDirection, titleSize, valuesOnChart} from './chart.utils'
import 'chartjs-plugin-datalabels'

const Chart = ( {chart:{ color, labelsForTheGraph, dataForTheGraph, title, values } } ) => (
    <div className = 'container chart'>
        <Bar
            data={{
                labels: labelsForTheGraph,
                datasets: [{
                    label: '',
                    data: dataForTheGraph,
                    backgroundColor: color,
                    borderColor: color,
                    borderWidth: 1
                }]
            }}
            width={100}
            height={80}
            redraw 
            options={{
                // animation: false,
                title: {
                    display: true,
                    fontSize: titleSize(window.innerWidth),
                    text: title,
                    padding: window.innerWidth > 500 ? 10 : 30,
                },
                legend: {display:false},
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,                           
                        }
                    }],
                    xAxes: labalesDirection(window.innerWidth, labelsForTheGraph)    
                },
                plugins: valuesOnChart(values, window.innerWidth, labelsForTheGraph),
            }}
        />
    </div>
    )

const mapStateToProps = state => ({
    chart: state.chart,
    })
    

export default connect(mapStateToProps)(Chart)