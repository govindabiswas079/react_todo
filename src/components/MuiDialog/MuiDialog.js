import React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref,) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const MuiDialog = (props) => {

    return (
        <Dialog
            open={props?.open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth={props?.fullWidth}
            maxWidth={props?.maxWidth}
            onClose={props?.onClose}
            aria-describedby="alert-dialog-slide-description"
        >
            {props?.children}
        </Dialog>
    )
}

MuiDialog.defaultProps = {
    fullWidth: true, maxWidth: 'sm', open: false,
}
export default MuiDialog