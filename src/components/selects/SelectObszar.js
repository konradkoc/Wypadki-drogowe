import React from 'react'
import { connect } from 'react-redux'
import { zestawienie } from '../../redux/database'
import { selectObszar } from '../../redux/chart/chart.actions'

const SelectObszar = ( {selectObszar, chart: {obszar}} ) => (
    <div>
        <h3>Wybierz obszar:</h3>
        <label htmlFor="obszary"></label>
            <select id="obszary" 
                className = "select-style" 
                autoComplete="off" 
                value={obszar} 
                onChange={ selectObszar }>
                    
                {
                    //getting rest of the values and displays from database, Poland + 16 -> 17 first records 
                    zestawienie.filter((el, index) => index < 17 ).map(el => (
                        <option key = {el.liczbaLudnosci} value={el.obszar} >
                            {el.obszar.toUpperCase()} 
                        </option>
                    ))
                }
                
            </select>
    </div>
            
)


const mapDispatchToProps = dispatch => ({
    selectObszar: (e) => dispatch(selectObszar(e.target.value))
})

const mapStateToProps = state => ({
    chart: state.chart
})


export default connect(mapStateToProps, mapDispatchToProps)(SelectObszar)
