import React from 'react'
import { connect } from 'react-redux'
import { selectRokKoncowy } from '../../redux/chart/chart.actions'
import { years } from '../../redux/database'


const SelectRokKoncowy = ( {chart:{ obszar, rok, rokKoncowy, rokPoczatkowy} , selectRokKoncowy }) => (
    
    rok === 'okres'  || (obszar && obszar !== 'polska') ? 
    
    <div>
        <h3>Wybierz rok końcowy:</h3>
        <label htmlFor="rokKońcowy" ></label>
            <select id="rokKońcowy"  autoComplete="off" onChange={selectRokKoncowy} value={rokKoncowy} className = "select-style">

            {
            //If user selected rokPoczatkowy show only bigger values & we dont want 2010 as well
            years.filter(year => rokPoczatkowy ? year > rokPoczatkowy : year > 2010 )
            .map(year => (
            <option value={year} key ={year*4}> {year} </option>
            ))
            }
   
            </select>
    </div>

    : null
)



const mapDispatchToProps = dispatch => ({
    selectRokKoncowy: e => dispatch(selectRokKoncowy(e.target.value))
})

const mapStateToProps = state => ({
    chart: state.chart
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectRokKoncowy)