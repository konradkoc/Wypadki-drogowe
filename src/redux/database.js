export const zestawienie = []
export const years = [ 2019, 2018,2017,2016,2015,2014,2013,2012,2011,2010 ]

export const dataForCounter = {
    '_2019' : {
        liczbaWypadkow: 30288,
        liczbaZabitych: 2909,
        liczbaRannych: 35477,
    },
    '_2018' : {
        liczbaWypadkow: 31674,
        liczbaZabitych: 2862,
        liczbaRannych: 37359,
    },
    '_2017' : {
        liczbaWypadkow: 32760,
        liczbaZabitych: 2831,
        liczbaRannych: 37359,
    },
    '_2016' : {
        liczbaWypadkow: 33664,
        liczbaZabitych: 3026,
        liczbaRannych: 40766,
    },
    '_2015' : {
        liczbaWypadkow: 32967,
        liczbaZabitych: 2938,
        liczbaRannych: 39778,
    },
    '_2014' : {
        liczbaWypadkow: 34970,
        liczbaZabitych: 3202,
        liczbaRannych: 42545,
    },
    '_2013' : {
        liczbaWypadkow: 35847,
        liczbaZabitych: 3357,
        liczbaRannych: 44059,
    },
    '_2012' : {
        liczbaWypadkow: 37046,
        liczbaZabitych: 3571,
        liczbaRannych: 45792,
    },'_2011' : {
        liczbaWypadkow: 40065,
        liczbaZabitych: 4189,
        liczbaRannych: 49501,
        
    },'_2010' : {
        liczbaWypadkow: 38832,
        liczbaZabitych: 3907,
        liczbaRannych: 48952,
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

//ROK 2019
const polska2019 = new Zestawienie(2019, "polska", 38386476, 30288, 2909, 35477)
    zestawienie.push(polska2019)
const dolnoslaskie2019 = new Zestawienie(2019, "dolnośląskie", 2899986, 1929, 215, 2275)
    zestawienie.push(dolnoslaskie2019)
const kujawskopomorskie2019 = new Zestawienie(2019, "kujawsko-pomorskie", 2074517, 940, 211, 974)
    zestawienie.push(kujawskopomorskie2019)
const lubelskie2019 = new Zestawienie(2019, "lubelskie", 2112216, 1139, 170, 1233)
    zestawienie.push(lubelskie2019)
const lubuskie2019 = new Zestawienie(2019, "lubuskie", 1013031, 660, 92, 775)
    zestawienie.push(lubuskie2019)
const lodzkie2019 = new Zestawienie(2019, "łódzkie", 2460170 , 3351, 239, 4047)
    zestawienie.push(lodzkie2019)
const malopolskie2019 = new Zestawienie(2019, "małopolskie",  3404863, 3136 , 176, 3716)
    zestawienie.push(malopolskie2019)
const mazowieckie2019 = new Zestawienie(2019, "mazowieckie", 5411446, 3802, 469, 4391)
    zestawienie.push(mazowieckie2019)
const opolskie2019 = new Zestawienie(2019, "opolskie", 984345, 614, 73, 703)
    zestawienie.push(opolskie2019)
const podkarpackie2019 = new Zestawienie(2019, "podkarpackie", 2127462, 1481, 157, 1708)
    zestawienie.push(podkarpackie2019)
const podlaskie2019 = new Zestawienie(2019, "podlaskie", 1179430, 585, 106, 620)
    zestawienie.push(podlaskie2019)
const pomorskie2019 = new Zestawienie(2019, "pomorskie", 2337769, 2297, 160, 2775)
    zestawienie.push(pomorskie2019)
const slaskie2019 = new Zestawienie(2019, "śląskie", 4524091, 2965, 199, 3561)
    zestawienie.push(slaskie2019)
const swietokrzyskie2019 = new Zestawienie(2019, "świętokrzyskie", 1237369, 1056, 131, 1241)
    zestawienie.push(swietokrzyskie2019)
const warminskomazurskie2019 = new Zestawienie(2019, "warmińsko-mazurskie", 1425967, 1218, 103, 1486)
    zestawienie.push(warminskomazurskie2019)
const wielkopolskie2019 = new Zestawienie(2019, "wielkopolskie",  3495470, 3894, 279, 4566)
    zestawienie.push(wielkopolskie2019)
const zachodniopomorskie2019 = new Zestawienie(2019, "zachodniopomorskie", 1698344, 1221, 129, 1406)
    zestawienie.push(zachodniopomorskie2019)

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

//ROK2013
const polska2013 = new Zestawienie(2013, "polska", 38533299, 35847, 3357, 44059)
zestawienie.push(polska2013)
const dolnoslaskie2013 = new Zestawienie(2013, "dolnośląskie", 2914362, 2586, 223, 3385)
zestawienie.push(dolnoslaskie2013)
const kujawskopomorskie2013 = new Zestawienie(2013, "kujawsko-pomorskie", 2096404, 1182, 179, 1365)
zestawienie.push(kujawskopomorskie2013)
const lubelskie2013 = new Zestawienie(2013, "lubelskie", 2165651, 1497, 250, 1795)
zestawienie.push(lubelskie2013)
const lubuskie2013 = new Zestawienie(2013, "lubuskie",  1023317, 747, 94, 1019)
zestawienie.push(lubuskie2013)
const lodzkie2013 = new Zestawienie(2013, "łódzkie",  2524651 , 3830, 263, 4733)
zestawienie.push(lodzkie2013)
const malopolskie2013 = new Zestawienie(2013, "małopolskie",  3354077, 3764, 221, 4659)
zestawienie.push(malopolskie2013)
const mazowieckie2013 = new Zestawienie(2013, "mazowieckie", 5301760, 4579, 562, 5511)
zestawienie.push(mazowieckie2013)
const opolskie2013 = new Zestawienie(2013, "opolskie", 1010203, 791, 97, 923)
zestawienie.push(opolskie2013)
const podkarpackie2013 = new Zestawienie(2013, "podkarpackie",  2129951, 1807, 151, 2251)
zestawienie.push(podkarpackie2013)
const podlaskie2013 = new Zestawienie(2013, "podlaskie",  1198690, 738, 135, 874)
zestawienie.push(podlaskie2013)
const pomorskie2013 = new Zestawienie(2013, "pomorskie",  2290070, 2641, 174, 3405)
zestawienie.push(pomorskie2013)
const slaskie2013 = new Zestawienie(2013, "śląskie", 4615870, 4529, 267, 5506)
zestawienie.push(slaskie2013)
const swietokrzyskie2013 = new Zestawienie(2013, "świętokrzyskie",  1273995, 1399, 143, 1727)
zestawienie.push(swietokrzyskie2013)
const warminskomazurskie2013 = new Zestawienie(2013, "warmińsko-mazurskie", 1450697, 1621, 154, 1968)
zestawienie.push(warminskomazurskie2013)
const wielkopolskie2013 = new Zestawienie(2013, "wielkopolskie",  3462196, 2633, 289, 3126)
zestawienie.push(wielkopolskie2013)
const zachodniopomorskie2013 = new Zestawienie(2013, "zachodniopomorskie", 1721405, 1503, 155, 1812)
zestawienie.push(zachodniopomorskie2013)

    //ROK2012
const polska2012 = new Zestawienie(2012, "polska", 38538447, 37046, 3571, 45792)
zestawienie.push(polska2012)
const dolnoslaskie2012 = new Zestawienie(2012, "dolnośląskie", 2916577, 3211, 238, 4263)
zestawienie.push(dolnoslaskie2012)
const kujawskopomorskie2012 = new Zestawienie(2012, "kujawsko-pomorskie", 2098370, 1319, 222, 1486)
zestawienie.push(kujawskopomorskie2012)
const lubelskie2012 = new Zestawienie(2012, "lubelskie", 2171857, 1623, 241, 1877)
zestawienie.push(lubelskie2012)
const lubuskie2012 = new Zestawienie(2012, "lubuskie",  1023158, 803, 99, 1086)
zestawienie.push(lubuskie2012)
const lodzkie2012 = new Zestawienie(2012, "łódzkie",  2533681 , 3903, 295, 4844)
zestawienie.push(lodzkie2012)
const malopolskie2012 = new Zestawienie(2012, "małopolskie",  3346796, 3902, 253, 4775)
zestawienie.push(malopolskie2012)
const mazowieckie2012 = new Zestawienie(2012, "mazowieckie", 5285604, 4509, 584, 5384)
zestawienie.push(mazowieckie2012)
const opolskie2012 = new Zestawienie(2012, "opolskie", 1013950, 798, 82, 977)
zestawienie.push(opolskie2012)
const podkarpackie2012 = new Zestawienie(2012, "podkarpackie",  2128687, 1801, 184, 2247)
zestawienie.push(podkarpackie2012)
const podlaskie2012 = new Zestawienie(2012, "podlaskie",  1200982, 767, 131, 970)
zestawienie.push(podlaskie2012)
const pomorskie2012 = new Zestawienie(2012, "pomorskie",  2283500, 2763, 179, 3568)
zestawienie.push(pomorskie2012)
const slaskie2012 = new Zestawienie(2012, "śląskie", 4626357, 4675, 336, 5707)
zestawienie.push(slaskie2012)
const swietokrzyskie2012 = new Zestawienie(2012, "świętokrzyskie",  1278116, 1393, 136, 1713)
zestawienie.push(swietokrzyskie2012)
const warminskomazurskie2012 = new Zestawienie(2012, "warmińsko-mazurskie", 1452596, 1607, 145, 2066)
zestawienie.push(warminskomazurskie2012)
const wielkopolskie2012 = new Zestawienie(2012, "wielkopolskie",  3455477, 2565, 315, 3085)
zestawienie.push(wielkopolskie2012)
const zachodniopomorskie2012 = new Zestawienie(2012, "zachodniopomorskie", 1722739, 1407, 131, 1744)
zestawienie.push(zachodniopomorskie2012)

//ROK2011
const polska2011 = new Zestawienie(2011, "polska", 38200037, 40065, 4189, 49501)
zestawienie.push(polska2011)
const dolnoslaskie2011 = new Zestawienie(2011, "dolnośląskie", 2877840, 2948, 258, 3948)
zestawienie.push(dolnoslaskie2011)
const kujawskopomorskie2011 = new Zestawienie(2011, "kujawsko-pomorskie", 2069543, 1336, 234, 1463)
zestawienie.push(kujawskopomorskie2011)
const lubelskie2011 = new Zestawienie(2011, "lubelskie", 2151895, 1798, 252, 2250)
zestawienie.push(lubelskie2011)
const lubuskie2011 = new Zestawienie(2011, "lubuskie",  1011024, 823, 122, 1086)
zestawienie.push(lubuskie2011)
const lodzkie2011 = new Zestawienie(2011, "łódzkie",  2534357 , 4266, 322, 5231)
zestawienie.push(lodzkie2011)
const malopolskie2011 = new Zestawienie(2011, "małopolskie",  3310094, 4364, 312, 5425)
zestawienie.push(malopolskie2011)
const mazowieckie2011 = new Zestawienie(2011, "mazowieckie", 5242911, 5130, 712, 6148)
zestawienie.push(mazowieckie2011)
const opolskie2011 = new Zestawienie(2011, "opolskie", 1028585, 836, 99, 1001)
zestawienie.push(opolskie2011)
const podkarpackie2011 = new Zestawienie(2011, "podkarpackie",  2103505, 2104, 224, 2620)
zestawienie.push(podkarpackie2011)
const podlaskie2011 = new Zestawienie(2011, "podlaskie",  1188329, 816, 152, 1006)
zestawienie.push(podlaskie2011)
const pomorskie2011 = new Zestawienie(2011, "pomorskie",  2240319, 2910, 222, 3711)
zestawienie.push(pomorskie2011)
const slaskie2011 = new Zestawienie(2011, "śląskie", 4635882, 5031, 347, 6111)
zestawienie.push(slaskie2011)
const swietokrzyskie2011 = new Zestawienie(2011, "świętokrzyskie",  1266014, 1516, 179, 1855)
zestawienie.push(swietokrzyskie2011)
const warminskomazurskie2011 = new Zestawienie(2011, "warmińsko-mazurskie", 1427241, 1647, 179, 2098)
zestawienie.push(warminskomazurskie2011)
const wielkopolskie2011 = new Zestawienie(2011, "wielkopolskie",  3419426, 2996, 405, 3663)
zestawienie.push(wielkopolskie2011)
const zachodniopomorskie2011 = new Zestawienie(2011, "zachodniopomorskie", 1693072, 1544, 170, 1885)
zestawienie.push(zachodniopomorskie2011)

//ROK2010
const polska2010 = new Zestawienie(2010, "polska", 38200037, 38832, 3907, 48952)
zestawienie.push(polska2010)
const dolnoslaskie2010 = new Zestawienie(2010, "dolnośląskie", 2877121, 2294, 241, 3098)
zestawienie.push(dolnoslaskie2010)
const kujawskopomorskie2010 = new Zestawienie(2010, "kujawsko-pomorskie", 2069575, 1490, 228, 1799)
zestawienie.push(kujawskopomorskie2010)
const lubelskie2010 = new Zestawienie(2010, "lubelskie", 2154892, 1820, 256, 2288)
zestawienie.push(lubelskie2010)
const lubuskie2010 = new Zestawienie(2010, "lubuskie",  1010705, 845, 108, 1113)
zestawienie.push(lubuskie2010)
const lodzkie2010 = new Zestawienie(2010, "łódzkie",  2538451 , 4157, 320, 5226)
zestawienie.push(lodzkie2010)
const malopolskie2010 = new Zestawienie(2010, "małopolskie",  2354932, 4003, 235, 5046)
zestawienie.push(malopolskie2010)
const mazowieckie2010 = new Zestawienie(2010, "mazowieckie", 6181837, 5190, 655, 6339)
zestawienie.push(mazowieckie2010)
const opolskie2010 = new Zestawienie(2010, "opolskie", 1029894, 836, 107, 1028)
zestawienie.push(opolskie2010)
const podkarpackie2010 = new Zestawienie(2010, "podkarpackie",  2102742, 1961, 202, 2571)
zestawienie.push(podkarpackie2010)
const podlaskie2010 = new Zestawienie(2010, "podlaskie",  1189175, 847, 146, 1125)
zestawienie.push(podlaskie2010)
const pomorskie2010 = new Zestawienie(2010, "pomorskie",  2235511, 2660, 198, 3406)
zestawienie.push(pomorskie2010)
const slaskie2010 = new Zestawienie(2010, "śląskie", 4638462, 5015, 352, 6132)
zestawienie.push(slaskie2010)
const swietokrzyskie2010 = new Zestawienie(2010, "świętokrzyskie",  1268271, 1574, 197, 2017)
zestawienie.push(swietokrzyskie2010)
const warminskomazurskie2010 = new Zestawienie(2010, "warmińsko-mazurskie", 1427587, 1725, 168, 2338)
zestawienie.push(warminskomazurskie2010)
const wielkopolskie2010 = new Zestawienie(2010, "wielkopolskie",  3414185, 2930, 343, 3624)
zestawienie.push(wielkopolskie2010)
const zachodniopomorskie2010 = new Zestawienie(2010, "zachodniopomorskie", 1693520, 1485, 151, 1802)
zestawienie.push(zachodniopomorskie2010)