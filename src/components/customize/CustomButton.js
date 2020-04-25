import React from 'react'
import {connect} from 'react-redux'

const CustomButton = ( { text } ) => (
    <div>
        <button>
        {text}
        </button>
    </div>
)

const mapStateToProps = state => ({
    values: state.chart.values
})

export default connect(mapStateToProps)(CustomButton)