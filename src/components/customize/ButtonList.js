import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { toggleValues, toggleAverage, toggleGrid } from '../../redux/chart/chart.actions'
import styled from 'styled-components'
import { ButtonStyle } from './CustomButton'

const ButtonList = ({ toggleValues, toggleAverage , toggleGrid, chart: {title, values, average, grid} }) => {
    const [image, setImage] = useState('')

    return (
        <ButtonListStyle>
            <CustomButton text = 'wartości' job = {toggleValues} value = {values}/>
            <CustomButton text = 'średnia' job = {toggleAverage} value = {average}/>
            <CustomButton text = 'siatka' job = {toggleGrid} value = {grid}/>
            <a download={title.split(' ').join('_') + '.png'} href={image} >
                <ButtonStyle 
                    onClick = { () =>  setImage(document.querySelector('canvas').toDataURL("image/png", 5)) } >
                        zapisz
                </ButtonStyle>          
            </a>
        </ButtonListStyle>  
    )
}


const mapDispatchToProps = dispatch => ({
    toggleValues: () => dispatch(toggleValues()),
    toggleAverage: () => dispatch(toggleAverage()),
    toggleGrid: () => dispatch(toggleGrid())
})

const mapStateToProps = state => ({
    chart: state.chart
})

const ButtonListStyle = styled.div`
display: flex;
justify-content: space-around;
padding-top: 1rem;

`


export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)