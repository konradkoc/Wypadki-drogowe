import React from 'react'
import { connect } from 'react-redux'
import { selectWskaznik } from '../../redux/chart/chart.actions'


const SelectWskaznik = ({ selectWskaznik }) => (
    <div>
        <h3>Wybierz wskaźnik:</h3>
        <label htmlFor="wybierzWartosc"></label>
            <select id="wybierzWartosc" autoComplete="off" onChange={selectWskaznik} className = "select-style">
                <option value="liczbaWypadkow" >LICZBA WYPADKÓW</option>
                <option value="liczbaZabitych">LICZBA ZABITYCH</option>
                <option value="liczbaRannych">LICZBA RANNYCH</option>
                <option value="wskaznikZabitychNa100">WSKAŹNIK LICZBY ZABITYCH NA 100 WYPADKÓW</option>
                <option value="wskaznikRannychNa100">WSKAŹNIK LICZBY RANNYCH NA 100 WYPADKÓW</option>
                <option value="wskaznikWypadkowNa100k">WSKAŹNIK LICZBY WYPADKÓW NA 100 000 MIESZKAŃCÓW</option>
                <option value="wskaznikZabitychNa100k">WSKAŹNIK LICZBY ZABITYCH NA 100 000 MIESZKAŃCÓW</option>
                <option value="wskaznikRannychNa100k">WSKAŹNIK LICZBY RANNYCH NA 100 000 MIESZKAŃCÓW</option>
            </select>
    </div>
)


const mapDispatchToProps = dispatch => ({
    selectWskaznik: e => dispatch(selectWskaznik(e.target.value))
})

export default connect(null, mapDispatchToProps)(SelectWskaznik)

