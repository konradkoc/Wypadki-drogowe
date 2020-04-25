import React from 'react'
import { SliderPicker } from 'react-color';
import { connect } from 'react-redux'
import { selectColor } from '../../redux/chart/chart.actions'


const ColorPicker = ( {color, selectColor} ) => (
        <SliderPicker 
            color = { color }
            onChangeComplete = { selectColor } /> 
)

const mapStateToProps = state => ({
    color: state.chart.color
})

const mapDispatchToProps = dispatch => ({
    selectColor: color => dispatch(selectColor( {color} )),
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPicker)