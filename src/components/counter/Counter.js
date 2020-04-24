import React, { Component } from 'react'
import { dataForCounter , years } from '../../redux/database'
import { czyWiesz } from './czyWiesz'

class Counter extends Component {
    
    constructor(props) {  
        super(props);
        this.state = {
            rok: 0,
            liczbaWypadkow: 0, 
            liczbaZabitych: 0, 
            liczbaRannych: 0,
            czyWieszZe: ''
        }
   } 

   startCounter() {
    // data needed from db
        const randomIndex = Math.floor(Math.random() * years.length)
        const randomYear = years[randomIndex]
        const dataLiczbaWypadkow = dataForCounter[`_${randomYear}`].liczbaWypadkow
        const dataLiczbaZabitych = dataForCounter[`_${randomYear}`].liczbaZabitych
        const dataLiczbaRannych = dataForCounter[`_${randomYear}`].liczbaRannych

        this.setState({rok: randomYear})
        
        const speed = 600 // change speed of counter here
        //UPDATE COUNT FOR EVERY COUNTER
        this.updateCount(speed, dataLiczbaWypadkow , dataLiczbaWypadkow/speed , 'liczbaWypadkow') // speed, target , increment = target/speed, state key
        this.updateCount(speed, dataLiczbaZabitych , dataLiczbaZabitych/speed , 'liczbaZabitych')
        this.updateCount(speed, dataLiczbaRannych , dataLiczbaRannych/speed , 'liczbaRannych')
   }

   updateCount = (speed, target , inc , str) => {
    
    // fe if state.liczbaludnosci < target data -> set state for old state + inc, reapeat every milisec 
    if(this.state[str] < target) {
        this.setState({ [str] : Math.ceil(this.state[str] + inc)})  
        setTimeout(this.updateCount, 1, speed, target , inc, str) 
        } else {
        this.setState( { [str] : target }) 
    }
}
    

   componentDidMount() {
       this.startCounter()
       const ciekawostka = czyWiesz[Math.floor(Math.random() * czyWiesz.length)]
       this.setState({ czyWieszZe: ciekawostka })
       
    }
    

    render() {
       
        const { rok, liczbaWypadkow, liczbaZabitych, liczbaRannych, czyWieszZe } = this.state

        return (
            <div className = 'container-row'> 
                <div className= 'counter-title'>
                    <h2 className = "tytulCountera">{rok}</h2>
                </div>
                <div className = 'container-column'>
                    <div className = 'container-column'>
                        <span className="fas fa-car-crash"></span>
                    <div className="counter">{liczbaWypadkow}</div>
                    </div>
                    <div className = 'container-column'>
                        <span className="fas fa-skull-crossbones"></span>
                        <div className="counter">{liczbaZabitych}</div>
                    </div>
                    <div className = 'container-column'>
                        <span className="fas fa-user-injured"></span>
                        <div className="counter">{liczbaRannych}</div>
                    </div>
                    <section>
                       {czyWieszZe}
                    </section>
                </div>
                
            </div>
        )
    }
}

export default Counter
