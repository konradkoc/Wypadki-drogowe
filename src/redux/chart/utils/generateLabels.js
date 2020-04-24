import { years } from '../../database'
import { zestawienie } from '../../database'
import { generateData } from './generateData'

export const generateLabels = (obszar, rok, wskaznik, rokPoczatkowy, rokKoncowy, rodzajSorta) => {
    // we need this data to map old labeles data to new labeles
    const data = generateData(obszar, rok, wskaznik, rokPoczatkowy, rokKoncowy, 'unSorted') 
    if (obszar === 'polska' && rok !=='okres') {
        // wojewodztwa as labeles
        const labelsUnsorted =  zestawienie.filter((el, index) => index < 17 && index > 0 )
                 .map(el => el.obszar)
        return labelsHelper(labelsUnsorted, rodzajSorta, data)

    } else {
        // years as labels
        const labelsUnsorted = years.filter(year => year >= rokPoczatkowy && year <= rokKoncowy)
        return labelsHelper(labelsUnsorted, rodzajSorta, data)
    }  
}

const labelsHelper = (labels, rodzajSorta, data) => {

    switch(rodzajSorta) {
        case 'odNajstarszych':
            return labels.reverse()
        case 'rosnąco':
            return mapLabels(labels, data, rodzajSorta)
        case 'malejąco':
            return mapLabels(labels, data, rodzajSorta)
        default: //odNajnowszych & alfabetycznie
            return labels
    }
}

const mapLabels = (labels, data, rodzajSorta) => {

    // bierzemy wartosc z posortowanego arr, szukamy jej w nieposortowanym, 
    // odczytujemy label do tej wartosc, po wszystkim podmieniamy labels array
    const dataSorted = rodzajSorta === 'rosnąco' ? data.slice(0).sort((a,b) => a-b) : data.slice(0).sort((a,b) => b-a)
    
    const labelsSorted = []

    for(let i = 0 ; i < dataSorted.length ; i++) {
        let index =  data.indexOf(dataSorted[i])
        labelsSorted.push(labels[index])
    }

    return labelsSorted
    
}