import React from 'react'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { toggleValues } from '../../redux/chart/chart.actions'

const ButtonList = ({ toggleValues }) => (

    <div>
        <CustomButton text = 'wartości' job = {toggleValues}/>
        <CustomButton text = 'średnia'/>
        <CustomButton text = 'zapisz'/>
    </div>  
)

const mapStateToProps = state => ({
    values: state.chart.values
})

const mapDispatchToProps = dispatch => ({
    toggleValues: () => dispatch(toggleValues())
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)