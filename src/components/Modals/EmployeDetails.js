import React, { Fragment } from 'react';
import MuiDialog from '../MuiDialog/MuiDialog';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesDetails, setEmployeeDelete } from '../../store/reducers/AppReducer';
import { Paper, Typography, Box, Grid, Button } from '@mui/material';


const EmployeDetails = () => {
  const dispatch = useDispatch();
  const { EmployeesData, EmployeesDetailsModal, EmployeeDeleteModal } = useSelector(state => state?.AppReducer);

  return (
    <Fragment>
      <MuiDialog
        open={EmployeesDetailsModal}
        onClose={() => dispatch(setEmployeesDetails({ data: null, visible: !EmployeesDetailsModal }))}
        maxWidth={'sm'}
      >
        <Paper sx={{ display: "inline-flex", padding: "32px", flexDirection: "column", gap: "24px", borderRadius: "24px", overflow: 'hidden', }}>
          <Typography variant='h1' sx={{ fontSize: '20px', textAlign: "center" }}>Employee Details</Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-sttar", justifyContent: "flex-start", gap: "12px" }}>
            <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
              <Typography variant='h3'>Name:</Typography>
              <Typography variant='h4'>
                {EmployeesData?.FirstName} {EmployeesData?.LastName}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
              <Typography variant='h3'>DOB:</Typography>
              <Typography variant='h4'>
                {EmployeesData?.DOB}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
              <Typography variant='h3'>Study:</Typography>
              <Typography variant='h4'>
                {EmployeesData?.Study}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
              <Typography variant='h3'>Start Date:</Typography>
              <Typography variant='h4'>
                {EmployeesData?.StartDate}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
              <Typography variant='h3'>End Date:</Typography>
              <Typography variant='h4'>
                {EmployeesData?.EndDate}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
              <Typography variant='h3'>Current Salary:</Typography>
              <Typography variant='h4'>
                {EmployeesData?.CurrentSalary}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: "10px" }}>
              <Typography variant='h3'>Description:</Typography>
              <Typography variant='h4'>
                {EmployeesData?.Description}
              </Typography>
            </Box>
          </Box>

          <Grid container columnSpacing={{ xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }} rowSpacing={{ xs: 1, sm: 0, md: 0, lg: 0, xl: 0 }}  >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 2, sm: 1, md: 1, lg: 1, xl: 1 }}>
              <Button onClick={() => dispatch(setEmployeesDetails({ data: null, visible: !EmployeesDetailsModal }))} fullWidth size='large' variant="text" color="error" sx={{ borderRadius: '10px', border: 'none' }} >Close</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
              <Button onClick={() => dispatch(setEmployeeDelete({ EmpId: EmployeesData?.id, visible: !EmployeeDeleteModal }))} fullWidth size='large' variant="contained" color="error" sx={{ borderRadius: '10px', border: 'none' }} >Delete</Button>
            </Grid>
          </Grid>
        </Paper>
      </MuiDialog>
    </Fragment>
  )
}

export default EmployeDetails