import React from 'react'
import SelectObszar from './SelectObszar'
import SelectRok from './SelectRok'
import SelectRokKoncowy from './SelectRokKoncowy'
import SelectRokPoczatkowy from './SelectRokPoczatkowy'
import SelectWskaznik from './SelectWskaznik'
import SelectSort from './SelectSort'

const SelectsContainer = () => (

    <div>
        <SelectObszar />
        <SelectRok /> 
        <SelectRokPoczatkowy />
        <SelectRokKoncowy />
        <SelectWskaznik />
        <SelectSort />
    </div>
    
)


export default  SelectsContainer