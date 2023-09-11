import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Menu(theme) {

    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    '& .MuiPaper-root': {
                        borderRadius: 6,
                        marginTop: theme.spacing(1),
                        minWidth: 180,
                        boxShadow: theme?.customShadows?.card,
                        '& .MuiMenu-list': {
                            padding: '4px 0',
                        },
                    },
                }
            },
        },
    };
}
