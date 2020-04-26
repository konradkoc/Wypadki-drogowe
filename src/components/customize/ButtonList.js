import React from 'react'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { toggleValues, toggleAverage } from '../../redux/chart/chart.actions'

const ButtonList = ({ toggleValues, toggleAverage }) => (

    <div>
        <CustomButton text = 'wartości' job = {toggleValues} />
        <CustomButton text = 'średnia' job = {toggleAverage} />
        <CustomButton text = 'zapisz'/>
    </div>  
)

const mapStateToProps = state => ({
    values: state.chart.values
})

const mapDispatchToProps = dispatch => ({
    toggleValues: () => dispatch(toggleValues()),
    toggleAverage: () => dispatch(toggleAverage())
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)