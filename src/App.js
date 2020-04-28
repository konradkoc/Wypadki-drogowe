import React from 'react';
import './App.css';
import Counter from './components/counter/Counter'
import RandomInfo from './components/randomInfo/RandomInfo'
import SelectsContainer from './components/selects/SelectsContainer'
import Chart from './components/chart/Chart'
import Customize from './components/customize/Customize';
import styled from 'styled-components'

const App = () => {

return (
<div className="App">
      <Title>WYPADKI DROGOWE</Title>
      <SubTitle>#jedźbezpiecznie</SubTitle>
      <Counter />
      <RandomInfo />
      <SelectsContainer />
      <Chart />
      <Customize />
  </div>
  )
  
}

const Title = styled.h1`
font-size: 1.7rem;
padding: .3rem;
text-align: center;
`

const SubTitle = styled.h2`
font-size: 1.5rem;
color: #F13C20;
padding: .3rem;
text-align: center;
`

export default App
