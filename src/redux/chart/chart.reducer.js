import { chartActionTypes } from './chart.actionTypes'
import { generateLabels } from './utils/generateLabels'
import { generateTitle } from './utils/generateTitle'
import { generateData } from './utils/generateData'
import { checkSort } from './utils/checkSort'

const INITIAL_STATE = {
    
    color: '#32a213',
    obszar: 'polska',
    rok: 2018,
    rokPoczatkowy: 2017,
    rokKoncowy: 2018,
    wskaznik: 'liczbaWypadkow',
    rodzajSorta: 'alfabetycznie',
    labelsForTheGraph: generateLabels('polska', 2018, '', '', 'alfabetycznie'),
    dataForTheGraph: generateData('polska' , 2018, 'liczbaWypadkow', '', '', 'alfabetycznie'),
    title: generateTitle('polska' , 2018,'liczbaWypadkow', '', ''),
    values: true,
    average: false,
}


const chartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case chartActionTypes.SELECT_OBSZAR:
            return {
                ...state,
                obszar: action.payload,      
                rok: action.payload !== 'polska' ? 'okres' : state.rok,
                rodzajSorta: checkSort(action.payload, state.rok, state.rodzajSorta),
                title: generateTitle(action.payload , state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy),
                labelsForTheGraph: generateLabels(action.payload , state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                dataForTheGraph: generateData(action.payload , state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                
            }

        case chartActionTypes.SELECT_ROK:
            return {
                ...state,
                rok: action.payload,
                rodzajSorta: checkSort(state.obszar, action.payload, state.rodzajSorta),
                labelsForTheGraph: generateLabels(state.obszar , action.payload , state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                dataForTheGraph: generateData(state.obszar , action.payload , state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                title: generateTitle(state.obszar , action.payload , state.wskaznik, state.rokPoczatkowy, state.rokKoncowy)
            }

        case chartActionTypes.SELECT_ROK_POCZATKOWY:
            return {
                ...state,
                rokPoczatkowy: action.payload,
                rok: 'okres',
                labelsForTheGraph: generateLabels(state.obszar , state.rok, state.wskaznik, action.payload, state.rokKoncowy, state.rodzajSorta),
                dataForTheGraph: generateData(state.obszar , state.rok, state.wskaznik, action.payload, state.rokKoncowy, state.rodzajSorta),
                title: generateTitle(state.obszar , state.rok, state.wskaznik, action.payload, state.rokKoncowy )
            }

        case chartActionTypes.SELECT_ROK_KONCOWY:
            return {
                ...state,
                rokKoncowy: action.payload,
                rok: 'okres',
                labelsForTheGraph: generateLabels(state.obszar , state.rok, state.wskaznik, state.rokPoczatkowy, action.payload, state.rodzajSorta),
                dataForTheGraph: generateData(state.obszar , state.rok, state.wskaznik, state.rokPoczatkowy, action.payload, state.rodzajSorta),
                title: generateTitle(state.obszar , state.rok, state.wskaznik, state.rokPoczatkowy, action.payload )
            }

        case chartActionTypes.SELECT_WSKAZNIK:
            return {
                ...state,
                wskaznik: action.payload,
                labelsForTheGraph: generateLabels(state.obszar , state.rok, action.payload, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                dataForTheGraph: generateData(state.obszar , state.rok, action.payload, state.rokPoczatkowy, state.rokKoncowy, state.rodzajSorta),
                title: generateTitle(state.obszar , state.rok, action.payload, state.rokPoczatkowy, state.rokKoncowy )

            }

        case chartActionTypes.SELECT_SORT:
            return {
                ...state,
                rodzajSorta: action.payload,
                labelsForTheGraph: generateLabels(state.obszar, state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, action.payload),
                dataForTheGraph: generateData(state.obszar, state.rok, state.wskaznik, state.rokPoczatkowy, state.rokKoncowy, action.payload),
            }
        case chartActionTypes.SELECT_COLOR:
            return {
                ...state,
                color: action.payload.hex
            }
        case chartActionTypes.TOGGLE_VALUES:
            return {
                ...state,
                values: !state.values
            }
        case chartActionTypes.TOGGLE_AVG:
            return {
                ...state,
                average: !state.average
            }

        default:
            return {
                ...state
            }
    }

}

export default chartReducer