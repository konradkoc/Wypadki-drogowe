import React, { useState, useEffect } from 'react'
import {randomInfo} from './randomInfoDB'
import styled from 'styled-components'

const RandomInfo = () => {

    const [info, setInfo] = useState('')

    useEffect(() => {
            const singleInfo = randomInfo[Math.floor(Math.random() * randomInfo.length)]
            setInfo(singleInfo)
      }, [] );


    return (
        <Container>
            <SectionContainer>
                {info}
            </SectionContainer>
        </Container>
        
    )
}

export default RandomInfo



const SectionContainer = styled.section`
padding: 1rem;
text-align: center;
border: 2px solid #F13C20;
border-radius: .5rem;
margin-bottom: 1rem;

@media (min-width: 1000px) {
    font-size: 1.4rem;
    padding: 1rem 1rem;
    width: 40%;
    margin-left: 1rem;
}
`

const Container = styled.div`
    @media (min-width: 1000px) {
        display: flex;
        align-items: center;
        height: 400px;
        background-image: url('https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
        background-position: center;
        background-size: cover;
    }
`
