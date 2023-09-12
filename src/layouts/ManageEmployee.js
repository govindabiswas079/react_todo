import { Backdrop, CircularProgress, Box, Container, Typography, useTheme, Grid, Button, } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setIsLoading } from '../store/reducers/AppReducer';
import { EmployeeForm } from '../components/EmployeeForm';
import { CreateEmployee, UpdateEmployee } from '../service/Services'

const ManageEmployee = () => {
  const Navigate = useNavigate();
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state?.AppReducer);
  const { palette, customShadows } = useTheme();
  const [value, setValue] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: ""
  });

  const onSubmit = async () => {
    dispatch(setIsLoading(true));
    if (_id === "add") {
      await CreateEmployee(value)
        .then((response) => {
          Navigate(-1)
          localStorage.clear()
        })
        .catch((error) => {
          console.log(error)
          dispatch(setIsLoading(false));
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        })

    } else {
      await UpdateEmployee(value, _id)
        .then((response) => {
          Navigate(-1)
          localStorage.clear()
        })
        .catch((error) => {
          console.log(error)
          dispatch(setIsLoading(false));
        })
        .finally(() => {
          dispatch(setIsLoading(false));
        })
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('employeeData');
    if (data) {
      const dataPars = JSON.parse(data)
      setValue({
        ...value,
        FirstName: dataPars?.FirstName,
        LastName: dataPars?.LastName,
        DOB: dataPars?.DOB,
        Study: dataPars?.Study,
        StartDate: dataPars?.StartDate,
        EndDate: dataPars?.EndDate,
        CurrentSalary: dataPars?.CurrentSalary,
        Description: dataPars?.Description,
      })
    }
  }, []);

  return (
    <Fragment>
      <Backdrop open={isLoading} sx={{ zIndex: 99999 }} >
        <Box>
          <CircularProgress color="primary" />
        </Box>
      </Backdrop>

      <Container maxWidth={'sm'} sx={{ pt: 2, pb: 2, boxShadow: 0 }}>
        <Box sx={{ pt: 2, pb: 2 }}>
          <Typography variant='h1' sx={{ fontSize: '20px', textAlign: 'center' }}>Employee  Registration  Form</Typography>
        </Box>

        <Box sx={{ width: '100%', borderRadius: "35px", backgroundColor: palette?.common?.white, p: 8, boxShadow: customShadows?.z24 }}>
          <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", gap: "24px", width: "100%" }}>


            <EmployeeForm value={value} setValue={setValue} />

            <Grid container columnSpacing={{ xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }} rowSpacing={{ xs: 1, sm: 0, md: 0, lg: 0, xl: 0 }}  >
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 2, sm: 1, md: 1, lg: 1, xl: 1 }}>
                <Button onClick={() => { Navigate(-1) }} fullWidth size='large' variant="text" color="error" sx={{ borderRadius: '10px', border: 'none' }} >Cancel</Button>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
                <Button onClick={() => { onSubmit() }} fullWidth size='large' variant="contained" color="primary" sx={{ borderRadius: '10px', border: 'none' }} >Save</Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Fragment >
  )
}

export default ManageEmployee