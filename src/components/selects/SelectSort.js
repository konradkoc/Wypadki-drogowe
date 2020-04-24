import React from 'react'
import { connect } from 'react-redux'
import { selectSort } from '../../redux/chart/chart.actions'



const SelectSort = ( {chart: { rok, rodzajSorta  } , selectSort } ) => (

    <div>
        <h3>Sortuj:</h3>
        <label htmlFor="sortowanie"></label>
                <select id="sortowanie" autoComplete="off" className = "select-style" value = {rodzajSorta} onChange={selectSort}>
                        <option value="alfabetycznie" >ALFABETYCZNIE</option>
                        <option value="odNajstarszych" >OD NAJSTARSZYCH</option>
                        <option value="odNajnowszych" >OD NAJNOWSZYCH</option>
                        <option value="rosnąco" > ROSNĄCO</option>
                        <option value="malejąco" >MALEJĄCO</option>
                </select>
    </div>
) 


const mapStateToProps = state => ({
    chart: state.chart
})

const mapDispatchToProps = dispatch => ({
    selectSort: e => dispatch(selectSort(e.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectSort)