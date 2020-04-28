import React from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'

const CustomButton = ( { job, text, value} ) => (

    <ButtonStyle value = {value} onClick = {job} >
        {text}
    </ButtonStyle>

)

const mapStateToProps = state => ({
    values: state.chart.values
})

export default connect(mapStateToProps)(CustomButton)

export const ButtonStyle = styled.button`
padding: .5rem;
width: 68px;
border-radius: 5px;
background-color: #19181A;
color: #f2f2f2;
border: ${({value}) => value ? '2px solid #F13C20' : 'none'};
cursor: pointer;

@media (min-width: 1000px) {
    font-size: 1rem;
    padding: .5rem 2rem;
    width: 150px;
}


`