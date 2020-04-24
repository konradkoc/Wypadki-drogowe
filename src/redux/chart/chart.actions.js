import { chartActionTypes } from './chart.actionTypes'

export const selectObszar = obszar => ({
    type: chartActionTypes.SELECT_OBSZAR,
    payload: obszar,
})

export const selectRok = rok => ({
    type: chartActionTypes.SELECT_ROK,
    payload: rok
})

export const selectRokPoczatkowy = rok => ({
    type: chartActionTypes.SELECT_ROK_POCZATKOWY,
    payload: rok
})

export const selectRokKoncowy = rok => ({
    type: chartActionTypes.SELECT_ROK_KONCOWY,
    payload: rok
})

export const selectWskaznik = wskaznik => ({
    type: chartActionTypes.SELECT_WSKAZNIK,
    payload: wskaznik
})

export const selectSort = rodzajSorta => ({
    type: chartActionTypes.SELECT_SORT,
    payload: rodzajSorta
})

export const selectColor = ( {color} ) => ({
    type: chartActionTypes.SELECT_COLOR,
    payload: color
})
