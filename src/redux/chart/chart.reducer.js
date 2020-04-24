import { chartActionTypes } from './chart.actionTypes'
import { generateLabels } from './utils/generateLabels'
import { generateTitle } from './utils/generateTitle'
import { generateData } from './utils/generateData'


const INITIAL_STATE = {
    
    color: 'pink',
    obszar: 'polska',
    rok: 2018,
    rokPoczatkowy: 2017,
    rokKoncowy: 2018,
    wskaznik: 'liczbaWypadkow',
    rodzajSorta: 'alfabetycznie',
    labelsForTheGraph: generateLabels('polska', 2018, '', '', 'alfabetycznie'),
    dataForTheGraph: generateData('polska' , 2018, 'liczbaWypadkow', '', '', 'alfabetycznie'),
    title: generateTitle('polska' , 2018,'liczbaWypadkow', '', ''),

}


const chartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case chartActionTypes.SELECT_OBSZAR:
            return {
                ...state,
                obszar: action.payload,      
                rok: action.payload !== 'polska' ? 'okres' : state.rok ,
                title: generateTitle(action.payload , state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy),
                labelsForTheGraph: generateLabels(action.payload, state.rok, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                dataForTheGraph: generateData(action.payload , state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
            }

        case chartActionTypes.SELECT_ROK:
            return {
                ...state,
                rok: action.payload,
                labelsForTheGraph: generateLabels(state.obszar, action.payload, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                dataForTheGraph: generateData(state.obszar , action.payload , state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                title: generateTitle(state.obszar , action.payload , state.wskaznik, state.rokPoczatkowy, state.rokKoncowy)

            }

        case chartActionTypes.SELECT_ROK_POCZATKOWY:
            return {
                ...state,
                rokPoczatkowy: action.payload,
                rok: 'okres',
                labelsForTheGraph: generateLabels(state.obszar, state.rok, action.payload, state.rokKoncowy, state.rodzajSorta),
                dataForTheGraph: generateData(state.obszar , state.rok, state.wskaznik, action.payload, state.rokKoncowy, state.rodzajSorta),
                title: generateTitle(state.obszar , state.rok, state.wskaznik, action.payload, state.rokKoncowy )
            }

        case chartActionTypes.SELECT_ROK_KONCOWY:
            return {
                ...state,
                rokKoncowy: action.payload,
                rok: 'okres',
                labelsForTheGraph: generateLabels(state.obszar, state.rok, state.rokPoczatkowy, action.payload, state.rodzajSorta),
                dataForTheGraph: generateData(state.obszar , state.rok, state.wskaznik, state.rokPoczatkowy, action.payload, state.rodzajSorta),
                title: generateTitle(state.obszar , state.rok, state.wskaznik, state.rokPoczatkowy, action.payload )
            }

        case chartActionTypes.SELECT_WSKAZNIK:
            return {
                ...state,
                wskaznik: action.payload,
                dataForTheGraph: generateData(state.obszar , state.rok, action.payload, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                title: generateTitle(state.obszar , state.rok, action.payload, state.rokPoczatkowy, state.rokKoncowy )

            }

        case chartActionTypes.SELECT_SORT:
            return {
                ...state,
                rodzajSorta: action.payload,
                labelsForTheGraph: generateLabels(state.obszar, state.rok, state.rokPoczatkowy, state.rokKoncowy, action.payload),
                dataForTheGraph: generateLabels(state.obszar, state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, action.payload),
            }

        default:
            return {
                ...state
            }
    }

}

export default chartReducer