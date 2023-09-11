import React, { Fragment, useEffect } from 'react';
import { Container, IconButton, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material'
import { more_vert } from '../assets/icons';
import { GetEmployee } from '../service/Services';
import { EmployeeList, Actions } from '../components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesList } from '../store/reducers/AppReducer';

const Dashboard = () => {
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
        <Typography variant='h1'>Employee List</Typography>
        <EmployeeList />       
      </Container>
    </Fragment>
  )
}

export default Dashboard;
