import { years } from '../../database'
import { zestawienie } from '../../database'

export const generateLabels = (obszar, rok, rokPoczatkowy, rokKoncowy, rodzajSorta) => {

    if (obszar === 'polska' && rok !=='okres' && rodzajSorta ==='alfabetycznie') {
        return zestawienie.filter((el, index) => index < 17 && index > 0 )
                 .map(el => el.obszar) // wybor wojewodztw jako labele
    } else {
        // wybor lat jako labele
        return years.filter(year => year >= rokPoczatkowy && year <= rokKoncowy).reverse()
        // switch(rodzajSorta) {
        //     case 'odNajnowszych': 
        //         return years.filter(year => year >= rokPoczatkowy && year <= rokKoncowy).reverse()
        //     case 'odNajstarszych':
        //         return years.filter(year => year >= rokPoczatkowy && year <= rokKoncowy)
        // }

    }  
}