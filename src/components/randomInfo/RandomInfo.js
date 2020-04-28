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
        <SectionContainer>
            {info}
        </SectionContainer>
    )
}

export default RandomInfo



const SectionContainer = styled.section`
padding: 1rem;
text-align: center;
border: 2px solid #F13C20;
border-radius: .5rem;
margin-bottom: 1rem;
`
