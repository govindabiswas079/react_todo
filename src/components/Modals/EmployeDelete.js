import React, { Fragment } from 'react';
import MuiDialog from '../MuiDialog/MuiDialog';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeesDetails, setEmployeeDelete, setIsLoading } from '../../store/reducers/AppReducer';
import { Paper, Typography, Box, Grid, Button, useTheme, Backdrop, CircularProgress } from '@mui/material';
import { DeleteEmployee } from '../../service/Services';

const EmployeDelete = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { EmployeeDeleteModal, EmpId, isLoading } = useSelector(state => state?.AppReducer);

  const onEmployeeDele = async () => {
    dispatch(setIsLoading(true));
    await DeleteEmployee(EmpId)
      .then((response) => {
        dispatch(setEmployeesDetails({ data: null, visible: false }));
        dispatch(setEmployeeDelete({ EmpId: null, visible: false }));
      })
      .catch((error) => {
        dispatch(setIsLoading(false));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      })
  }

  return (
    <Fragment>
      <Backdrop open={isLoading} sx={{ zIndex: 99999 }} >
        <Box>
          <CircularProgress color="primary" />
        </Box>
      </Backdrop>
      <MuiDialog
        open={EmployeeDeleteModal}
        onClose={() => dispatch(setEmployeeDelete({ EmpId: null, visible: !EmployeeDeleteModal }))}
        maxWidth={'sm'}
      >
        <Paper sx={{ display: "inline-flex", padding: "32px", flexDirection: "column", gap: "24px", borderRadius: "24px", overflow: 'hidden', }}>
          <Typography variant='h1' sx={{ fontSize: '20px', textAlign: "center", color: palette?.error?.main }}>Employee Delete</Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: "flex-sttar", justifyContent: "flex-start", gap: "12px" }}>
            <Typography variant='h3' sx={{ textAlign: "center", }}>Are you sure, you want to delete ?</Typography>
          </Box>

          <Grid container columnSpacing={{ xs: 0, sm: 2, md: 2, lg: 2, xl: 2 }} rowSpacing={{ xs: 1, sm: 0, md: 0, lg: 0, xl: 0 }}  >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 2, sm: 1, md: 1, lg: 1, xl: 1 }}>
              <Button onClick={() => dispatch(setEmployeeDelete({ EmpId: null, visible: !EmployeeDeleteModal }))} fullWidth size='large' variant="text" color="error" sx={{ borderRadius: '10px', border: 'none' }} >Close</Button>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} order={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }}>
              <Button onClick={() => onEmployeeDele()} fullWidth size='large' variant="contained" color="error" sx={{ borderRadius: '10px', border: 'none' }} >Yes, Delete</Button>
            </Grid>
          </Grid>
        </Paper>
      </MuiDialog>
    </Fragment>
  )
}

export default EmployeDelete