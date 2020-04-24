import React from 'react'
import { SketchPicker } from 'react-color';
import { connect } from 'react-redux'
import { selectColor } from '../../redux/chart/chart.actions'

const Customize = ( {color, selectColor} ) => (
    <SketchPicker 
        color = { color }
        onChangeComplete = { selectColor }
    />  
)

const mapStateToProps = state => ({
    color: state.chart.color
})

const mapDispatchToProps = dispatch => {
    return {
      // dispatching plain actions
      selectColor: (color) => dispatch(selectColor( {color} )),
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Customize)