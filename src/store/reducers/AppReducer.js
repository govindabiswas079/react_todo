import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    EmployeesList: null,
    EmployeesDetailsModal: false,
    EmployeeDeleteModal: false,
    EmployeesData: null,
    EmpId: null,
    isLoading: false,
}

const AppReducer = createSlice({
    name: 'AppReducer',
    initialState,
    reducers: {
        setEmployeesList: (state, action) => {
            state.EmployeesList = action?.payload?.data
        },
        setEmployeesDetails: (state, action) => {
            state.EmployeesData = action?.payload?.data
            state.EmployeesDetailsModal = action?.payload?.visible
        },
        setEmployeeDelete: (state, action) => {
            state.EmployeeDeleteModal = action?.payload?.visible
            state.EmpId = action?.payload?.EmpId
        },
        setIsLoading: (state, action) => {
            state.isLoading = action?.payload
        },
    },

});

export const {
    setEmployeesList,
    setEmployeesDetails,
    setEmployeeDelete,
    setIsLoading
} = AppReducer.actions;
export default AppReducer.reducer;