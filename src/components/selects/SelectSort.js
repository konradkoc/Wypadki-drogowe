import React from 'react'
import { connect } from 'react-redux'
import { selectSort } from '../../redux/chart/chart.actions'



const SelectSort = ( {chart: { rodzajSorta, obszar, rok} , selectSort } ) => (

    <div>
        <h3>Sortuj:</h3>
        <label htmlFor="sortowanie"></label>
            {
            //we want specific select depending on user choices
            obszar === 'polska' && rok !== 'okres' 
            ? 
            <select id="sortowanie" autoComplete="off" className = "select-style" value = {rodzajSorta} onChange={selectSort}> 
                <option value="alfabetycznie" >ALFABETYCZNIE</option>
                <option value="rosnąco" > ROSNĄCO</option>
                <option value="malejąco" >MALEJĄCO</option>
            </select>
            :
            <select id="sortowanie" autoComplete="off" className = "select-style" value = {rodzajSorta} onChange={selectSort}> 
                <option value="odNajstarszych" >OD NAJSTARSZYCH</option>
                <option value="odNajnowszych" >OD NAJNOWSZYCH</option>
                <option value="rosnąco" > ROSNĄCO</option>
                <option value="malejąco" >MALEJĄCO</option>
            </select>
            }              
    </div>
) 


const mapStateToProps = state => ({
    chart: state.chart
})

const mapDispatchToProps = dispatch => ({
    selectSort: e => dispatch(selectSort(e.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectSort)