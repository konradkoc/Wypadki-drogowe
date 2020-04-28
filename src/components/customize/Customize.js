import React from 'react'
import ButtonList from './ButtonList'
import ColorPicker from './ColorPicker'
import styled from 'styled-components'

const Customize = () => (

    <CustomizeContainer>
        <ColorPicker />
        <ButtonList />
    </CustomizeContainer>

)

export default Customize

const CustomizeContainer = styled.div`
margin-top: 1rem;
padding:  1rem .5rem ;
background: #F2f2f2;
border-radius: 4px;

`
