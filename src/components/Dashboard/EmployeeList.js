import React, { Fragment } from 'react';
import { Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Box, } from '@mui/material'
import { Actions } from './';
import { useDispatch, useSelector } from 'react-redux';

const EmployeeList = () => {
  const { palette } = useTheme();
  const { EmployeesList } = useSelector(state => state?.AppReducer);

  return (
    <Fragment>
      {EmployeesList === null ?
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', height: 200, width: "100%" }}>
          <CircularProgress color="secondary" />
        </Box>
        :
        EmployeesList.length === 0 ?
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center', height: 200, width: "100%" }}>
            <Typography variant='h1' sx={{fontSize: '14px'}}>No Data Found</Typography>
          </Box>
          :
          <TableContainer component={Paper} sx={{ border: `1px solid ${palette?.divider}`, borderRadius: "30px" }}>
            <Table sx={{ minWidth: 650, }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {["Name", "DOB", "Start Date", "End Date", "Description"]?.map((value, index) => (
                    <TableCell key={index} align="left" sx={{ borderBottom: `1px solid ${palette?.divider}` }}>
                      <Typography variant='h3'>
                        {value}
                      </Typography>
                    </TableCell>
                  ))}
                  <TableCell align="left" />
                </TableRow>
              </TableHead>
              <TableBody>
                {EmployeesList?.map((value, index) => (
                  <TableRow key={index} sx={{ borderBottom: `1px solid ${palette?.divider}`, '&:last-child td, &:last-child th': { border: 0 } }}>
                    {[`${value?.FirstName} ${value?.LastName}`, value?.DOB, value?.StartDate, value?.EndDate,]?.map((items, index) => (
                      <TableCell component="th" scope="row" key={index} align="left">
                        <Typography variant='h4'>
                          {items}
                        </Typography>
                      </TableCell>
                    ))}
                    <TableCell align="left">
                      <Typography variant='h4' sx={{ width: "auto", alignSelf: "stretch", WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis', }}>
                        {value?.Description}
                      </Typography>
                    </TableCell>
                    <TableCell align="left">
                      <Actions data={value} _id={value?.id} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      }
    </Fragment>
  )
}

export default EmployeeList

const data = [
  {
    "id": 237,
    "FirstName": "Vaish",
    "LastName": "Walke",
    "DOB": "2023-09-12",
    "Study": "BE",
    "StartDate": "2023-09-16",
    "EndDate": "2023-09-11",
    "CurrentSalary": 0,
    "Description": "fsdfd dfs"
  },
  {
    "id": 238,
    "FirstName": "Vaish",
    "LastName": "Walke",
    "DOB": "2023-09-12",
    "Study": "BE",
    "StartDate": "2023-09-16",
    "EndDate": "2023-09-11",
    "CurrentSalary": 0,
    "Description": "fsdfd dfs"
  }
]