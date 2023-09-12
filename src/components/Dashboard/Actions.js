import React, { Fragment, useState } from 'react';
import { IconButton, Box, Typography, useTheme, } from '@mui/material'
import { more_vert, } from '../../assets/icons';
import Menu from '@mui/material/Menu';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEmployeeDelete, setEmployeesDetails } from '../../store/reducers/AppReducer';

const Actions = ({ data, _id }) => {
  const dispatch = useDispatch();
  const { EmployeesDetailsModal, EmployeeDeleteModal } = useSelector(state => state?.AppReducer)
  const Navigate = useNavigate();
  const { palette } = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{ width: "30px", height: '30px', display: 'flex', alignItems: "center", justifyContent: 'center' }}
      >
        <img src={more_vert} alt='more_vert' style={{
          width: "4px",
          height: "16px",
          flexShrink: 0,
        }} />
      </IconButton>

      <Menu
        elevation={0}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Box onClick={() => { handleClose(); dispatch(setEmployeesDetails({ data, visible: !EmployeesDetailsModal })) }} role={'button'} sx={{ pt: 1, pb: 1, cursor: 'pointer', display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderBottom: `1px solid ${palette?.divider}`, '&:hover': { backgroundColor: palette?.primary?.lighter, transition: 'ease 0.3s' } }}>
          <RemoveRedEyeIcon sx={{ color: palette?.grey?.greyDark, fontSize: '18px' }} />
          <Typography variant='body'>View</Typography>
        </Box>
        <Box onClick={() => { handleClose(); localStorage.setItem('employeeData', JSON.stringify(data)); Navigate(`/employee/${_id}`) }} role={'button'} sx={{ pt: 1, pb: 1, cursor: 'pointer', display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", borderBottom: `1px solid ${palette?.divider}`, '&:hover': { backgroundColor: palette?.primary?.lighter, transition: 'ease 0.3s' } }}>
          <EditIcon sx={{ color: palette?.grey?.greyDark, fontSize: '18px' }} />
          <Typography variant='body'>Edit</Typography>
        </Box>
        <Box onClick={() => { handleClose(); dispatch(setEmployeeDelete({ EmpId: _id, visible: !EmployeeDeleteModal })) }} role={'button'} sx={{ pt: 1, pb: 1, cursor: 'pointer', display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", '&:hover': { backgroundColor: palette?.primary?.lighter, transition: 'ease 0.3s' } }}>
          <DeleteIcon style={{ color: palette?.grey?.greyDark, fontSize: '18px' }} />
          <Typography variant='body'>Delete</Typography>
        </Box>
      </Menu>

    </Fragment>
  )
}

export default Actions