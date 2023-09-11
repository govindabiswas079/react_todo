import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    EmployeesList: null,
}

const AppReducer = createSlice({
    name: 'AppReducer',
    initialState,
    reducers: {
        setEmployeesList: (state, action) => {
            state.EmployeesList = action?.payload?.data
        },
    },

});

export const {
    setEmployeesList,
} = AppReducer.actions;
export default AppReducer.reducer;