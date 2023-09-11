import { Box, Container, Grid, OutlinedInput, Typography, useTheme, InputLabel, InputAdornment, IconButton, MenuItem, Select, } from '@mui/material'
import React, { Fragment } from 'react'
import { calender } from '../assets/icons';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'

const ManageEmployee = () => {
  const { palette, customShadows } = useTheme();

  return (
    <Fragment>
      <Container maxWidth={'sm'} sx={{ pt: 2, pb: 2, boxShadow: 0 }}>
        {/* <Box>
          <Typography variant='h1' sx={{ fontSize: '20px', textAlign: 'center' }}>Employee  Registration  Form</Typography>
        </Box> */}

        <Box sx={{ width: '100%', borderRadius: "35px", backgroundColor: palette?.common?.white, p: 8, boxShadow: customShadows?.z24 }}>
          <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", gap: "24px", width: "100%" }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>First Name*</InputLabel>
                <OutlinedInput fullWidth placeholder='Enter your name' />
              </Box>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>Last Name*</InputLabel>
                <OutlinedInput fullWidth placeholder='Enter your name' />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "flex-start", gap: "24px", width: "100%" }}>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>DOB</InputLabel>
                <OutlinedInput
                  fullWidth
                  placeholder='Enter your  dob'
                  readOnly={true}
                  endAdornment={
                    <InputAdornment>
                      <IconButton>
                        <img src={calender} alt='calender' style={{ width: "14px", height: "14px", flexShrink: 0 }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>Study</InputLabel>
                <Select
                  fullWidth
                  displayEmpty
                  renderValue={(selected) => {
                    if (!selected) {
                      return <Typography variant='caption' style={{ fontSize: "14px", fontWeight: 500, lineHeight: "16px", }}>Select Type</Typography>;
                    }
                    return selected;
                  }}
                  IconComponent={(props) => (<ExpandMoreOutlined color={palette?.dark?.main} sx={{ color: palette?.dark?.main }} {...props} />)}
                >
                  <MenuItem value={'Monthly'}>
                    Monthly
                  </MenuItem>
                  <MenuItem value={'Quarterly'}>
                    Quarterly
                  </MenuItem>
                  <MenuItem value={'Half Yearly'}>
                    Half Yearly
                  </MenuItem>
                  <MenuItem value={'Yearly'}>
                    Yearly
                  </MenuItem>
                </Select>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>Start Dat</InputLabel>
                <OutlinedInput
                  fullWidth
                  placeholder='Start Date'
                  readOnly={true}
                  endAdornment={
                    <InputAdornment>
                      <IconButton>
                        <img src={calender} alt='calender' style={{ width: "14px", height: "14px", flexShrink: 0 }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>End Dat</InputLabel>
                <OutlinedInput
                  fullWidth
                  placeholder='End Date'
                  readOnly={true}
                  endAdornment={
                    <InputAdornment>
                      <IconButton>
                        <img src={calender} alt='calender' style={{ width: "14px", height: "14px", flexShrink: 0 }} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>Current Salar</InputLabel>
                <OutlinedInput fullWidth placeholder='Current Salary' />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
              <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                <InputLabel>Description</InputLabel>
                <OutlinedInput
                  fullWidth
                  multiline={true}
                  rows={7}
                  placeholder='Description'
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Fragment >
  )
}

export default ManageEmployee