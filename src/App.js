import React from 'react';
import './App.css';
import Counter from './components/counter/Counter'
import Chart from './components/chart/Chart'
import SelectsContainer from './components/selects/SelectsContainer'


const App = () => (

  <div className="App">
      <h1 className = 'title'>WYPADKI DROGOWE</h1>
      <Counter />
      <SelectsContainer />
      <Chart />
  </div>

)

export default App;
