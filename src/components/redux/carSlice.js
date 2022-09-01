import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars:["Model S","Model 3","Model X","Model Y","Solor Roof","Solor Panals"]
}
 
const catSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCar = state => state.car.cars

export default catSlice.reducer