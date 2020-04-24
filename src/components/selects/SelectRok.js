import React from 'react'
import { connect } from 'react-redux'
import { selectRok } from '../../redux/chart/chart.actions'
import { years } from '../../redux/database'

const SelectRok = ( {chart: {rok, obszar}, selectRok } ) => (
    
    obszar !=='polska' && obszar ? null : 

    
    <div>
        <h3>Wybierz rok lub okres:</h3>
        <label htmlFor="lata"></label>
        <select id="lata" 
            className = "select-style" 
            autoComplete="off"
            value={rok}
            onChange={selectRok}>

            {
            years.map(year => (
            <option value={year} key={year*5}>{year} </option>
            ))
            }
        
            <option value="okres">OKRES</option>

        </select>
    </div>
    
)


const mapDispatchToProps = dispatch => ({
    selectRok: (e) => dispatch(selectRok(e.target.value)),
})

const mapStateToProps = state => ({
    chart: state.chart
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectRok)
