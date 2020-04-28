import React, { Component } from 'react'
import { dataForCounter , years } from '../../redux/database'
import styled from 'styled-components'
class Counter extends Component {
    
    constructor(props) {  
        super(props);
        this.state = {
            rok: 0,
            liczbaWypadkow: 0, 
            liczbaZabitych: 0, 
            liczbaRannych: 0,
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
       
    }
    

    render() {
       
        const { rok, liczbaWypadkow, liczbaZabitych, liczbaRannych } = this.state

        return (
                <CounterContainer >
                    <NumberStyle>
                        {rok}:
                    </NumberStyle>
                    <CounterStyle>
                        <CounterContent className="fas fa-car-crash"></CounterContent>
                        <CounterContent>{liczbaWypadkow}</CounterContent>
                    </CounterStyle>
                    
                    <CounterStyle>
                        <CounterContent className="fas fa-skull-crossbones"></CounterContent>
                        <CounterContent>{liczbaZabitych}</CounterContent>
                    </CounterStyle>
  
                    <CounterStyle>
                        <CounterContent className="fas fa-user-injured"></CounterContent>
                        <CounterContent>{liczbaRannych}</CounterContent>
                    </CounterStyle> 
                                       
                </CounterContainer>
          
        )
    }
}


const CounterContainer = styled.div`
display: flex;
justify-content: space-around;
padding: 1rem 0 ;
`

const CounterStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-width: 70px;
`

const CounterContent = styled.span`
padding: .3rem;
font-size: 1.2rem;
`

const NumberStyle = styled.div`
display: flex;
align-items: flex-start;
font-size: 1.7rem;
color: rgba(241, 60, 32, 1);
`

const ParagraphStyle = styled.p`
font-size: 10px;
color: rgba(241, 60, 32, 1);
`


export default Counter
