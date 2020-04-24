export const checkSort = (obszar, rok, rodzajSorta) => {

    if (obszar === 'polska' && rok !== 'okres') {
        
        return (rodzajSorta === 'odNajstarszych' || rodzajSorta === 'odNajnowszych')
        ? 'alfabetycznie' : rodzajSorta
 
    } else {
        return (rodzajSorta === 'alfabetycznie') ? 'odNajnowszych' : rodzajSorta

    }
}