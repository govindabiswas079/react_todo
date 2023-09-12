import { Box, OutlinedInput, Typography, useTheme, InputLabel, MenuItem, Select, TextField, } from '@mui/material'
import React, { Fragment, } from 'react'
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'

const EmployeeForm = ({ value, setValue }) => {
    const { palette } = useTheme();

    const onChange = (event) => {
        setValue({ ...value, [event?.target?.name]: event?.target?.value })
    };

    return (
        <Fragment>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>First Name*</InputLabel>
                    <OutlinedInput
                        name="FirstName"
                        onChange={(event) => onChange(event)}
                        value={value?.FirstName}
                        fullWidth
                        placeholder='Enter your name'
                    />
                </Box>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>Last Name*</InputLabel>
                    <OutlinedInput
                        name="LastName"
                        onChange={(event) => onChange(event)}
                        value={value?.LastName}
                        fullWidth
                        placeholder='Enter your name'
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "flex-start", gap: "24px", width: "100%" }}>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>DOB</InputLabel>
                    <OutlinedInput
                        name="DOB"
                        // InputProps={{inputProps: { min: new Date(), max: new Date()} }}
                        onChange={(event) => onChange(event)}
                        value={value?.DOB}
                        fullWidth
                        type='date'
                        placeholder='Enter your  dob'
                        readOnly={false}
                    
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>Study</InputLabel>
                    <Select
                        name='Study'
                        onChange={(event) => onChange(event)}
                        value={value?.Study}
                        fullWidth
                        displayEmpty
                        renderValue={(selected) => {
                            if (!selected) {
                                return <Typography variant='caption' style={{
                                    color: palette?.grey[300],
                                    fontSize: "13px",
                                    fontStyle: "normal",
                                    fontWeight: 500,
                                    lineHeight: "140%",
                                    letterSpacing: "0.13px",
                                }}>Select Type</Typography>;
                            }
                            return selected;
                        }}
                        IconComponent={(props) => (<ExpandMoreOutlined color={palette?.dark?.main} sx={{ color: palette?.dark?.main }} {...props} />)}
                    >
                        <MenuItem value={'BE'}>
                            BE
                        </MenuItem>
                        <MenuItem value={'BSC'}>
                            BSC
                        </MenuItem>
                        <MenuItem value={'BCOM'}>
                            BCOM
                        </MenuItem>
                        <MenuItem value={'MCOM'}>
                            MCOM
                        </MenuItem>
                    </Select>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>Start Dat</InputLabel>
                    <OutlinedInput
                        name="StartDate"
                        onChange={(event) => onChange(event)}
                        value={value?.StartDate}
                        fullWidth
                        type='date'
                        placeholder='Start Date'
                        readOnly={false}
                    />
                </Box>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>End Dat</InputLabel>
                    <OutlinedInput
                        name="EndDate"
                        onChange={(event) => onChange(event)}
                        value={value?.EndDate}
                        fullWidth
                        type='date'
                        placeholder='End Date'
                        readOnly={false}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>Current Salar</InputLabel>
                    <OutlinedInput
                        type='number'
                        name="CurrentSalary"
                        onChange={(event) => onChange(event)}
                        value={value?.CurrentSalary}
                        fullWidth
                        placeholder='Current Salary'
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row", md: "row", lg: "row", lg: "row" }, alignItems: "center", gap: "24px", width: "100%" }}>
                <Box sx={{ gap: "8px", display: 'flex', flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
                    <InputLabel>Description</InputLabel>
                    <OutlinedInput
                        name="Description"
                        onChange={(event) => onChange(event)}
                        value={value?.Description}
                        fullWidth
                        multiline={true}
                        rows={7}
                        placeholder='Description'
                    />
                </Box>
            </Box>
        </Fragment>
    )
}

export default EmployeeForm