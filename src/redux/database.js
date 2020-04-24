export const zestawienie = []
export const years = [ 2018,2017,2016,2015,2014,2013,2012,2011 ]

export const dataForCounter = {

    '_2018' : {
        liczbaWypadkow: 31674,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },
    '_2017' : {
        liczbaWypadkow: 1111,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },
    '_2016' : {
        liczbaWypadkow: 2212,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },
    '_2015' : {
        liczbaWypadkow: 3212,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },
    '_2014' : {
        liczbaWypadkow: 4313,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },
    '_2013' : {
        liczbaWypadkow: 5131,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },
    '_2012' : {
        liczbaWypadkow: 63131,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },'_2011' : {
        liczbaWypadkow: 7313,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
        
    },'_2010' : {
        liczbaWypadkow: 9313,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    }

}

class Zestawienie {
    constructor(rok, obszar, liczbaLudnosci, liczbaWypadkow, liczbaZabitych, liczbaRannych){
    this.rok = rok
    this.obszar = obszar
    this.liczbaLudnosci = liczbaLudnosci
    this.liczbaWypadkow = liczbaWypadkow
    this.liczbaZabitych = liczbaZabitych
    this.liczbaRannych = liczbaRannych
    }

    wskaznikRannychNa100() {
       const wskaznikRannychNa100 =  +(Math.round(this.liczbaRannych*1000/this.liczbaWypadkow)*0.1).toFixed(1) //pomnozone x10, zaokraglone, pomnozone razy 0,1, fixed i do number
       return wskaznikRannychNa100
    }
    wskaznikZabitychNa100() {
        const wskaznikZabitychNa100 =  +(Math.round(this.liczbaZabitych*1000/this.liczbaWypadkow)*0.1).toFixed(1)
        return wskaznikZabitychNa100
    }
    wskaznikRannychNa100k() {
        const wskaznikRannychNa100k =  +(Math.round(this.liczbaRannych*1000000/this.liczbaLudnosci)*0.1).toFixed(1)
        return wskaznikRannychNa100k
    }
    wskaznikZabitychNa100k() {
        const wskaznikZabitychNa100k =  +(Math.round(this.liczbaZabitych*1000000/this.liczbaLudnosci)*0.1).toFixed(1)
        return wskaznikZabitychNa100k
    }
    wskaznikWypadkowNa100k() {
        const wskaznikWypadkowNa100k =  +(Math.round(this.liczbaWypadkow*1000000/this.liczbaLudnosci)*0.1).toFixed(1)
        return wskaznikWypadkowNa100k
    }
}


//ROK 2018
const polska2018 = new Zestawienie(2018, "polska", 38413139, 31674, 2862, 37359)
    zestawienie.push(polska2018)
const dolnoslaskie2018 = new Zestawienie(2018, "dolnośląskie", 2901003, 2148, 203, 2674)
    zestawienie.push(dolnoslaskie2018)
const kujawskopomorskie2018 = new Zestawienie(2018, "kujawsko-pomorskie", 2079917, 970, 171, 1031)
    zestawienie.push(kujawskopomorskie2018)
const lubelskie2018 = new Zestawienie(2018, "lubelskie", 2121613, 1216, 179, 1286)
    zestawienie.push(lubelskie2018)
const lubuskie2018 = new Zestawienie(2018, "lubuskie", 1015440, 663, 79, 790)
    zestawienie.push(lubuskie2018)
const lodzkie2018 = new Zestawienie(2018, "łódzkie", 2470610 , 3759, 229, 4600)
    zestawienie.push(lodzkie2018)
const malopolskie2018 = new Zestawienie(2018, "małopolskie",  3395663, 3404 , 223, 4003)
    zestawienie.push(malopolskie2018)
const mazowieckie2018 = new Zestawienie(2018, "mazowieckie", 5391813, 4034, 448, 4682)
    zestawienie.push(mazowieckie2018)
const opolskie2018 = new Zestawienie(2018, "opolskie", 988014, 705, 81, 787)
    zestawienie.push(opolskie2018)
const podkarpackie2018 = new Zestawienie(2018, "podkarpackie", 2128747, 1481, 125, 1775)
    zestawienie.push(podkarpackie2018)
const podlaskie2018 = new Zestawienie(2018, "podlaskie", 1182677, 672, 102, 771)
    zestawienie.push(podlaskie2018)
const pomorskie2018 = new Zestawienie(2018, "pomorskie", 2328214, 2504, 146, 3098)
    zestawienie.push(pomorskie2018)
const slaskie2018 = new Zestawienie(2018, "śląskie", 4540140, 3222, 219, 3783)
    zestawienie.push(slaskie2018)
const swietokrzyskie2018 = new Zestawienie(2018, "świętokrzyskie", 1244383, 1201, 127, 1450)
    zestawienie.push(swietokrzyskie2018)
const warminskomazurskie2018 = new Zestawienie(2018, "warmińsko-mazurskie", 1431299, 1281, 140, 1506)
    zestawienie.push(warminskomazurskie2018)
const wielkopolskie2018 = new Zestawienie(2018, "wielkopolskie",  3490597, 3232, 261, 3766)
    zestawienie.push(wielkopolskie2018)
const zachodniopomorskie2018 = new Zestawienie(2018, "zachodniopomorskie", 1703009, 1182, 129, 1357)
    zestawienie.push(zachodniopomorskie2018)


//ROK2017
const polska2017 = new Zestawienie(2017, "polska", 38422346, 32760, 2831, 37359)
    zestawienie.push(polska2017)
const dolnoslaskie2017 = new Zestawienie(2017, "dolnośląskie", 2902365, 2183, 219, 2674)
    zestawienie.push(dolnoslaskie2017)
const kujawskopomorskie2017 = new Zestawienie(2017, "kujawsko-pomorskie", 2082935, 949, 151, 1031)
    zestawienie.push(kujawskopomorskie2017)
const lubelskie2017 = new Zestawienie(2017, "lubelskie", 2129260, 1242, 157, 1286)
    zestawienie.push(lubelskie2017)
const lubuskie2017 = new Zestawienie(2017, "lubuskie", 1016652, 682, 84, 790)
    zestawienie.push(lubuskie2017)
const lodzkie2017 = new Zestawienie(2017, "łódzkie", 2479962 , 3787, 219, 4600)
    zestawienie.push(lodzkie2017)
const malopolskie2017 = new Zestawienie(2017, "małopolskie", 3386162, 3612, 194, 4003)
    zestawienie.push(malopolskie2017)
const mazowieckie2017 = new Zestawienie(2017, "mazowieckie", 5372579, 4048, 464, 4682)
    zestawienie.push(mazowieckie2017)
const opolskie2017 = new Zestawienie(2017, "opolskie", 991161, 700, 78, 787)
    zestawienie.push(opolskie2017)
const podkarpackie2017 = new Zestawienie(2017, "podkarpackie", 2127687, 1710, 124, 1775)
    zestawienie.push(podkarpackie2017)
const podlaskie2017 = new Zestawienie(2017, "podlaskie", 1185174, 693, 114, 771)
    zestawienie.push(podlaskie2017)
const pomorskie2017 = new Zestawienie(2017, "pomorskie", 2319735, 2608, 134, 3098)
    zestawienie.push(pomorskie2017)
const slaskie2017 = new Zestawienie(2017, "śląskie", 4552627, 3502, 246, 3783)
    zestawienie.push(slaskie2017)
const swietokrzyskie2017 = new Zestawienie(2017, "świętokrzyskie", 1249710, 1235, 115, 1450)
    zestawienie.push(swietokrzyskie2017)
const warminskomazurskie2017 = new Zestawienie(2017, "warmińsko-mazurskie", 1434783, 1455, 118, 1506)
    zestawienie.push(warminskomazurskie2017)
const wielkopolskie2017 = new Zestawienie(2017, "wielkopolskie", 3484975, 3122, 294, 3766)
    zestawienie.push(wielkopolskie2017)
const zachodniopomorskie2017 = new Zestawienie(2017, "zachodniopomorskie", 1706579, 1232, 120, 1357)
    zestawienie.push(zachodniopomorskie2017)

//ROK2016
const polska2016 = new Zestawienie(2016, "polska", 38426809, 33664, 3026, 40766)
    zestawienie.push(polska2016)
const dolnoslaskie2016 = new Zestawienie(2016, "dolnośląskie", 2903812, 2324, 226, 2907)
    zestawienie.push(dolnoslaskie2016)
const kujawskopomorskie2016 = new Zestawienie(2016, "kujawsko-pomorskie", 2084524, 1018, 178, 1101)
    zestawienie.push(kujawskopomorskie2016)
const lubelskie2016 = new Zestawienie(2016, "lubelskie", 2135715, 1262, 178, 1484)
    zestawienie.push(lubelskie2016)
const lubuskie2016 = new Zestawienie(2016, "lubuskie", 1017450, 684, 113, 878)
    zestawienie.push(lubuskie2016)
const lodzkie2016 = new Zestawienie(2016, "łódzkie", 2488417 , 4222, 214, 5298)
    zestawienie.push(lodzkie2016)
const malopolskie2016 = new Zestawienie(2016, "małopolskie", 3376329, 3939, 185, 4764)
    zestawienie.push(malopolskie2016)
const mazowieckie2016 = new Zestawienie(2016, "mazowieckie", 5356838, 4078, 508, 4878)
    zestawienie.push(mazowieckie2016)
const opolskie2016 = new Zestawienie(2016, "opolskie", 994489, 754, 99, 859)
    zestawienie.push(opolskie2016)
const podkarpackie2016 = new Zestawienie(2016, "podkarpackie", 2126824, 1682, 141, 2019)
    zestawienie.push(podkarpackie2016)
const podlaskie2016 = new Zestawienie(2016, "podlaskie", 1187587, 686, 120, 834)
    zestawienie.push(podlaskie2016)
const pomorskie2016 = new Zestawienie(2016, "pomorskie", 2311469, 2725, 144, 3357)
    zestawienie.push(pomorskie2016)
const slaskie2016 = new Zestawienie(2016, "śląskie", 4564394, 3650, 257, 4347)
    zestawienie.push(slaskie2016)
const swietokrzyskie2016 = new Zestawienie(2016, "świętokrzyskie", 1254505, 1365, 107, 1724)
    zestawienie.push(swietokrzyskie2016)
const warminskomazurskie2016  = new Zestawienie(2016, "warmińsko-mazurskie", 1437812, 1627, 158, 2025)
    zestawienie.push(warminskomazurskie2016)
const wielkopolskie2016 = new Zestawienie(2016, "wielkopolskie", 3477755, 2316, 249, 2683)
    zestawienie.push(wielkopolskie2016)
const zachodniopomorskie2016 = new Zestawienie(2016, "zachodniopomorskie", 1708889, 1332, 149, 1608)
    zestawienie.push(zachodniopomorskie2016)

//ROK2015
const polska2015 = new Zestawienie(2015, "polska",  38478602 ,  32967, 2938, 39778)
    zestawienie.push(polska2015)
const dolnoslaskie2015 = new Zestawienie(2015, "dolnośląskie",  2908457 , 2280, 185, 2968)
    zestawienie.push(dolnoslaskie2015)
const kujawskopomorskie2015 = new Zestawienie(2015, "kujawsko-pomorskie",  2089992 ,  1008,  153 , 1135)
    zestawienie.push(kujawskopomorskie2015)
const lubelskie2015 = new Zestawienie(2015, "lubelskie",  2147746 ,   3991  , 236 , 4826  )
    zestawienie.push(lubelskie2015)
const lubuskie2015 = new Zestawienie(2015, "lubuskie",  1020307 ,  639 , 92 , 786 )
    zestawienie.push(lubuskie2015)
const lodzkie2015 = new Zestawienie(2015, "łódzkie",  2504136  ,  3991, 236, 4826 )
    zestawienie.push(lodzkie2015)
const malopolskie2015 = new Zestawienie(2015, "małopolskie",  3368336 ,  3839 , 198, 4619 )
    zestawienie.push(malopolskie2015)
const mazowieckie2015 = new Zestawienie(2015, "mazowieckie", 5334511, 4006, 487, 4747)
    zestawienie.push(mazowieckie2015) 
const opolskie2015 = new Zestawienie(2015, "opolskie", 1000858 ,  710 , 102, 808 )
    zestawienie.push(opolskie2015)
const podkarpackie2015 = new Zestawienie(2015, "podkarpackie",  2129187 ,  1703, 136, 2120 )
    zestawienie.push(podkarpackie2015)
const podlaskie2015 = new Zestawienie(2015, "podlaskie",  1191918 ,  690 , 118, 864 )
    zestawienie.push(podlaskie2015)
const pomorskie2015 = new Zestawienie(2015, "pomorskie",  2302077 ,  2675 , 170, 3347 )
    zestawienie.push(pomorskie2015)
const slaskie2015 = new Zestawienie(2015, "śląskie",  4585924 ,  3792 , 255, 4584 )
    zestawienie.push(slaskie2015)
const swietokrzyskie2015 = new Zestawienie(2015, "świętokrzyskie",  1263176 ,  1353 , 108, 1676 )
    zestawienie.push(swietokrzyskie2015)
const warminskomazurskie2015 = new Zestawienie(2015, "warmińsko-mazurskie", 1443967 , 1535, 140, 1869 )
    zestawienie.push(warminskomazurskie2015)
const wielkopolskie2015 = new Zestawienie(2015, "wielkopolskie",  3472579 , 2196, 245, 2523)
    zestawienie.push(wielkopolskie2015)
const zachodniopomorskie2015 = new Zestawienie(2015, "zachodniopomorskie",  1715431 , 1298, 125, 1470)
    zestawienie.push(zachodniopomorskie2015)


    //ROK2014
const polska2014 = new Zestawienie(2014, "polska", 38483957, 34970, 3202, 42545)
zestawienie.push(polska2014)
const dolnoslaskie2014 = new Zestawienie(2014, "dolnośląskie", 2908457, 2466, 242, 3154)
zestawienie.push(dolnoslaskie2014)
const kujawskopomorskie2014 = new Zestawienie(2014, "kujawsko-pomorskie", 2090836, 1044, 179, 1112)
zestawienie.push(kujawskopomorskie2014)
const lubelskie2014 = new Zestawienie(2014, "lubelskie", 2151836, 1408, 195, 1667)
zestawienie.push(lubelskie2014)
const lubuskie2014 = new Zestawienie(2014, "lubuskie",  1020767, 717, 81, 957)
zestawienie.push(lubuskie2014)
const lodzkie2014 = new Zestawienie(2014, "łódzkie",  2508464 , 3986, 256, 4807)
zestawienie.push(lodzkie2014)
const malopolskie2014 = new Zestawienie(2014, "małopolskie",  3364176, 3936, 234, 4805)
zestawienie.push(malopolskie2014)
const mazowieckie2014 = new Zestawienie(2014, "mazowieckie", 5324519, 4385, 518, 5476)
zestawienie.push(mazowieckie2014)
const opolskie2014 = new Zestawienie(2014, "opolskie", 1002575, 738, 104, 857)
zestawienie.push(opolskie2014)
const podkarpackie2014 = new Zestawienie(2014, "podkarpackie",  2128483, 1751, 144, 2184)
zestawienie.push(podkarpackie2014)
const podlaskie2014 = new Zestawienie(2014, "podlaskie",  1193348, 692, 126, 793)
zestawienie.push(podlaskie2014)
const pomorskie2014 = new Zestawienie(2014, "pomorskie",  2298811, 2724, 181, 3476)
zestawienie.push(pomorskie2014)
const slaskie2014 = new Zestawienie(2014, "śląskie", 4593358, 4360, 249, 5324)
zestawienie.push(slaskie2014)
const swietokrzyskie2014 = new Zestawienie(2014, "świętokrzyskie",  1265415, 1308, 130, 1621)
zestawienie.push(swietokrzyskie2014)
const warminskomazurskie2014 = new Zestawienie(2014, "warmińsko-mazurskie", 1445478, 1645, 148, 2052)
zestawienie.push(warminskomazurskie2014)
const wielkopolskie2014 = new Zestawienie(2014, "wielkopolskie",  3469464, 2392, 268, 2808)
zestawienie.push(wielkopolskie2014)
const zachodniopomorskie2014 = new Zestawienie(2014, "zachodniopomorskie", 1717970, 1418, 147, 1717)
zestawienie.push(zachodniopomorskie2014)