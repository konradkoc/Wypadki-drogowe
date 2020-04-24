export const generateTitle = (obszar , rok, wskaznik, rokPoczatkowy, rokKoncowy ) => {
    
    const titleRok = defineTitleRok(rok, rokPoczatkowy, rokKoncowy, obszar)  
    const titleObszar = defineTitleObszar(obszar)
    const titleWskaznik = defineTitleWskaznik(wskaznik)
    
    return titleRok && titleObszar && titleWskaznik ?  `${titleWskaznik} ${titleObszar} ${titleRok}` : ''

}

const defineTitleRok = ( rok,rokPoczatkowy,rokKoncowy, obszar ) => (
    rok === 'okres' || obszar !=='polska' ? `w latach ${rokPoczatkowy} - ${rokKoncowy}` : `w roku ${rok}`
)

const defineTitleObszar = obszar => (
    obszar === 'polska' ? 'na obszarze Polski' : `na terenie województwa ${obszar}go`
)


const defineTitleWskaznik = wskaznik => {
    
    switch (wskaznik) {
        case 'liczbaWypadkow':
            return "Liczba wypadków"         
        case 'liczbaZabitych':
            return  "Liczba zabitych w wypadkach drogowych"                          
        case 'liczbaRannych':
            return "Liczba rannych w wypadkach drogowych"        
        case 'wskaznikZabitychNa100':
            return "Wskaźnik liczby zabitych na 100 wypadków"         
        case 'wskaznikRannychNa100':
            return "Wskaźnik liczby rannych na 100 wypadków"          
        case 'wskaznikRannychNa100k':
            return "Wskaźnik liczby rannych na 100 000 mieszkańców"            
        case 'wskaznikZabitychNa100k':
            return "Wskaźnik liczby zabitych na 100 000 mieszkańców"           
        case 'wskaznikWypadkowNa100k':
            return "Wskaźnik liczby wypadków na 100 000 mieszkańców"
        default:
            return
        }
}

