import React from 'react';
import './App.css';
import Counter from './components/counter/Counter'
import SelectsContainer from './components/selects/SelectsContainer'
import Chart from './components/chart/Chart'
import Customize from './components/customize/Customize'



const App = () => {

return (
<div className="App">
      <h1 className = 'title'>WYPADKI DROGOWE</h1>
      <Counter />
      <SelectsContainer />
      <Chart />
      <Customize />
  </div>
  )
  
}

export default App
