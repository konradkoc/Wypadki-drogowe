import { zestawienie } from '../../database'


export const generateData = (obszar, rok, wskaznik, rokPoczatkowy, rokKoncowy, rodzajSorta) => {

 if( rok === 'okres' || obszar !=='polska') {
    return zestawienie.filter
    (data => data.obszar === obszar && data.rok >= rokPoczatkowy && data.rok <= rokKoncowy)
    .map( el => { 

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
    ).reverse() //data is from most recent we wanna from the oldest

} else if (obszar === 'polska' && rok !== 'okres') {
     //gdy obszar polska to chcemy wojewodztwa z db
    return zestawienie.filter(data => data.obszar !== 'polska' && data.rok === +rok) //we need to change it into a number
        .map(el => {
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
        )
}
}
