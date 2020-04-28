export const labelsDirection = () => (
    //adding option to chart depending on width and labels.length, to change text direction on mobiles
   
    {
        autoSkip: false,
        maxRotation: 90,
        minRotation: 90,
    }
)

export const titleSize = width => {

    if (width < 400) {
        return 10
    } else if (width < 500) {
        return 12
    } else if (width < 850) {
        return 14
    } else if (width < 1000) {
        return 18
    } else {
        return 20
    }
}

            
   