import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    sort : 'default',
    status : 'all'
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers : {
        statusSelected : (state, action) => {
            state.status = action.payload
        },
        sortChanged : (state, action) => {
            state.sort = action.payload
        }
    }
})

export const {statusSelected, sortChanged } = filterSlice.actions
export default filterSlice.reducer