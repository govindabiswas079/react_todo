import React, { Fragment, useEffect } from 'react';
import { Container, IconButton, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button, } from '@mui/material'
import { more_vert } from '../assets/icons';
import { GetEmployee } from '../service/Services';
import { EmployeeList, Actions } from '../components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesList } from '../store/reducers/AppReducer';
import { EmployeDelete, EmployeDetails } from '../components/Modals';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { EmployeesList } = useSelector(state => state?.AppReducer);

  const GetData = async () => {
    await GetEmployee()
      .then((response) => {
        dispatch(setEmployeesList({ data: response }));
      })
      .catch((error) => {
        dispatch(setEmployeesList({ data: [] }));
        console.log('error', error)
      })
  }

  useEffect(() => {
    GetData()
  }, [EmployeesList]);

  return (
    <Fragment>
      <Container sx={{ pt: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", pt: 1, pb: 2 }}>
          <Typography variant='h1'>Employee List</Typography>
          <Button onClick={() => Navigate("/employee/add")} variant="contained" color="secondary" sx={{ border: "none" }}>Add</Button>
        </Box>
        <EmployeeList />
      </Container>
      <EmployeDetails />
      <EmployeDelete />
    </Fragment>
  )
}

export default Dashboard;
