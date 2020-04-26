export const labalesDirection = (width, labels) => (
    //adding option to chart depending on width and labels.length, to change text direction on mobiles
    width < 500 && labels.length > 10 ?
        [{
            ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90
            }
        }]
    : []
)

export const titleSize = width => {

    if (width < 500) {
        return 12
    } else if (width < 850) {
        return 14
    } else if (width < 1000) {
        return 18
    } else if (width < 1200) {
        return 20
    } else {
        return 25
    }

}

export const valuesOnChart = (values, width, labels) => (
        {
            datalabels: {
            display: values,
            anchor: 'end',
            align: 'top',
            rotation: width < 500 && labels.length ? -90 : 0,
            labels: {    
                value: {}             
            },                     
        }
    }
)

            
   