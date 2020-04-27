import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { connect } from 'react-redux'
import { toggleValues, toggleAverage } from '../../redux/chart/chart.actions'

const ButtonList = ({ toggleValues, toggleAverage }) => {
    const [image, setImage] = useState('')

    return (
        <div>
            <CustomButton text = 'wartości' job = {toggleValues} />
            <CustomButton text = 'średnia' job = {toggleAverage} />

            <a download="wykres.png" href={image} >
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

export default connect(null, mapDispatchToProps)(ButtonList)