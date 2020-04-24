import { zestawienie } from '../../database'


export const generateData = (obszar, rok, wskaznik, rokPoczatkowy, rokKoncowy, rodzajSorta) => {

    if ( rok === 'okres' || obszar !=='polska') {
        //years as labels
        const data = zestawienie.filter
        (data => data.obszar === obszar && data.rok >= rokPoczatkowy && data.rok <= rokKoncowy)
        .map( el => dataHelper(el, wskaznik))

        return dataSorter(data, rodzajSorta)


    } else if (obszar === 'polska' && rok !== 'okres') {
        //obszar === polska -> we want wojewodztwa from db
        const data = zestawienie.filter(data => data.obszar !== 'polska' && data.rok === +rok) //we need to change it into a number
        .map(el => dataHelper(el, wskaznik))

        return dataSorter(data, rodzajSorta)
    }
}


const dataHelper = (el, wskaznik) => {
    switch(wskaznik) {
        case 'wskaznikZabitychNa100':
            return el.wskaznikZabitychNa100() //those are functions in constructor, gotta do it manually
        case 'wskaznikRannychNa100':
            return el.wskaznikRannychNa100()
        case 'wskaznikRannychNa100k':
            return el.wskaznikRannychNa100k()
        case 'wskaznikZabitychNa100k':
            return el.wskaznikZabitychNa100k()
        case 'wskaznikWypadkowNa100k':
            return el.wskaznikWypadkowNa100k()             
        default:
            return el[wskaznik] // rest can be dynamic
    }
}


const dataSorter = (data, rodzajSorta) => {
    switch(rodzajSorta) {
        case 'odNajstarszych':
            return data.reverse() //data is from most recent in db we wanna from the oldest
        case 'rosnąco':
            return data.sort((a,b) => a-b)
        case 'malejąco':
            return data.sort((a,b) => b-a)
        default: //odNajnowszych & alfabetycznie & unSorted
            return data
    }
}
