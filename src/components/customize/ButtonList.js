import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { toggleValues, toggleAverage, toggleGrid } from '../../redux/chart/chart.actions'

const ButtonList = ({ toggleValues, toggleAverage , toggleGrid, title }) => {
    const [image, setImage] = useState('')

    return (
        <div>
            <CustomButton text = 'wartości' job = {toggleValues} />
            <CustomButton text = 'średnia' job = {toggleAverage} />
            <CustomButton text = 'siatka' job = {toggleGrid} />

            <a download={title.split(' ').join('_') + '.png'} href={image} >
                <button 
                onClick = { () =>  setImage(document.querySelector('canvas').toDataURL("image/png", 5)) } >
                    download
                </button>
            </a>
        </div>  
    )
}


const mapDispatchToProps = dispatch => ({
    toggleValues: () => dispatch(toggleValues()),
    toggleAverage: () => dispatch(toggleAverage()),
    toggleGrid: () => dispatch(toggleGrid())
})

const mapStateToProps = state => ({
    title: state.chart.title
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)