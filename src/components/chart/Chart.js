import React from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { labelsDirection, titleSize } from './chart.utils'
import 'chartjs-plugin-datalabels'
import 'chartjs-plugin-annotation'
import styled from 'styled-components'

const Chart = ( {chart:{ color, labelsForTheGraph, dataForTheGraph, title, values, average, animation, grid} } ) => (
    <ChartContainer>
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
            width={1}
            height={1}
            redraw 
            options={{
                animation: {
                    duration: animation //0 or 1000 depending if we want or not, changes in store
                },
                title: {
                    display: true,
                    fontSize: titleSize(window.innerWidth),
                    text: title,
                    padding: window.innerWidth > 500 ? 10 : 30,
                },
                // this doesnt work when added in plugins dont know why, putting it here fixes the bug
                plugins: {
                    datalabels: {
                        display: values,
                        anchor: 'end',
                        align: 'top',
                        rotation: (window.innerWidth < 500 && labelsForTheGraph.length) > 10 ? 270 : 0, //for mobiles
                },    
                },             
                annotation: { 
                    annotations: [{
                        type: average ? 'line' : '' , //this just turns on and off average on chart
                        mode: 'horizontal',
                        scaleID: 'y-axis-0',
                        value: dataForTheGraph.reduce((a,b) => a + b)/dataForTheGraph.length, //avg value
                        borderColor: '#F13C20',
                        borderWidth: 1.2,
                    }]
                },
               
                legend: {display:false},
                scales: {       
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                        },
                        gridLines: {
                            display: grid,
                            zeroLineWidth: 1,
                            zeroLineColor: 'black'
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: grid,
                            zeroLineWidth: 1,
                            zeroLineColor: 'black'
                        },
                        ticks: (window.innerWidth < 500 && labelsForTheGraph.length) > 10 ?
                                labelsDirection()  :  {  }
                        },
                    ]
                },
            }}
        />
    </ChartContainer>
)

const mapStateToProps = state => ({
    chart: state.chart,
    })


export default connect(mapStateToProps)(Chart)


const ChartContainer = styled.div`
background-color: #FFF;
padding-bottom: 1rem;
margin-top 1rem;
border-radius: 4px;

`