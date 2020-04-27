import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { toggleValues, toggleAverage } from '../../redux/chart/chart.actions'

const ButtonList = ({ toggleValues, toggleAverage , title }) => {
    const [image, setImage] = useState('')

    return (
        <div>
            <CustomButton text = 'wartości' job = {toggleValues} />
            <CustomButton text = 'średnia' job = {toggleAverage} />

            <a download={title.split(' ').join('_')} href={image} >
                <button onClick = {() => setImage(document.querySelector('canvas').toDataURL("image/png"))} >
                    download
                </button>
            </a>
        </div>  
    )
}


const mapDispatchToProps = dispatch => ({
    toggleValues: () => dispatch(toggleValues()),
    toggleAverage: () => dispatch(toggleAverage())
})

const mapStateToProps = state => ({
    title: state.chart.title
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonList)