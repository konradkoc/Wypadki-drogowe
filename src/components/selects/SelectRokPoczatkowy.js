import React from 'react'
import { connect } from 'react-redux'
import { selectRokPoczatkowy } from '../../redux/chart/chart.actions'
import { years } from '../../redux/database'


const SelectRokPoczatkowy = ( { chart:{ obszar, rok, rokPoczatkowy, rokKoncowy} , selectRokPoczatkowy} ) => (
    
    rok === 'okres'  || (obszar && obszar !== 'polska') ? 
 
    <div>
        <h3>Wybierz rok początkowy:</h3>
        <label htmlFor="rokPoczątkowy"></label>
            <select id="rokPoczątkowy" autoComplete="off" onChange={selectRokPoczatkowy} value = {rokPoczatkowy} className = "select-style">
                
                {
                //If user selected rokKoncowy show only smaller values & we dont want 2018 as well
                years.filter(year => rokKoncowy ? year < rokKoncowy : year < 2018 ) 
                .map(year => (
                <option value={year} key ={year*3}> {year} </option>
                ))
                }

            </select>       
    </div>

    : null

)

const mapDispatchToProps = dispatch => ({
    selectRokPoczatkowy: e => dispatch(selectRokPoczatkowy(e.target.value))
})

const mapStateToProps = state => ({
    chart: state.chart
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectRokPoczatkowy)