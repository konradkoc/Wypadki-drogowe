import React from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { labelsDirection, titleSize } from './chart.utils'
import 'chartjs-plugin-datalabels'
import 'chartjs-plugin-annotation'

const Chart = ( {chart:{ color, labelsForTheGraph, dataForTheGraph, title, values, average } } ) => (
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
                // this doesnt work when added in plugins dont know why but putting it here fixes the bug
                annotation: { 
                    annotations: [{
                        type: average ? 'line' : '' , //this just turn on and off average on chart
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: dataForTheGraph.reduce((a,b) => a + b)/dataForTheGraph.length,
                        borderColor: 'red',
                        borderWidth: 5,
                    }]
                },
                plugins: {
                    datalabels: {
                        display: values,
                        anchor: 'end',
                        align: 'top',
                        rotation: window.innerWidthwidth < 500 && labelsForTheGraph.length ? -90 : 0,
                        labels: {    
                            value: {}             
                        },                     
                },    
                },
                legend: {display:false},
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,                           
                        }
                    }],
                    xAxes: labelsDirection(window.innerWidth, labelsForTheGraph)    
                },
            }}
        />
    </div>
)

const mapStateToProps = state => ({
    chart: state.chart,
    })
    

export default connect(mapStateToProps)(Chart)