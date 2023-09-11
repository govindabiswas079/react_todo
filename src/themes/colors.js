import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS0078ff
const GREY = {
    grey: "#EFEFEF",
    greyDark: "#7D7D7D",
    0: '#FFFFFF',
    100: '#F9FAFB',
    200: '#F4F6F8',
    300: '#7E98BA',
    400: '#556E9A',
    500: '#919EAB',
    600: '#637381',
    700: '#454F5B',
    800: '#212B36',
    900: '#161C24',
};

const PRIMARY = {
    lighter: '#F8FBFF',
    light: '#76B0F1',
    main: '#263857',
    dark: '#314363',
    darker: '#061B64',
    contrastText: '#fff',
};

const SECONDARY = {
    lighter: '#D6E4FF',
    light: '#84A9FF',
    main: '#3366FF',
    dark: '#1939B7',
    darker: '#091A7A',
    contrastText: '#fff',
};

const INFO = {
    lighter: '#D0F2FF',
    light: '#74CAFF',
    main: '#1890FF',
    dark: '#0C53B7',
    darker: '#04297A',
    contrastText: '#fff',
};

const SUCCESS = {
    lighter: '#E9FCD4',
    light: '#AAF27F',
    main: '#54D62C',
    dark: '#229A16',
    darker: '#08660D',
    contrastText: GREY[800],
};

const WARNING = {
    lighter: '#FFF7CD',
    light: '#FFE16A',
    main: '#FFC107',
    dark: '#B78103',
    darker: '#7A4F01',
    contrastText: GREY[800],
};

const ERROR = {
    lighter: '#FFE7D9',
    light: '#FFA48D',
    main: '#F34A4A',
    dark: '#B72136',
    darker: '#7A0C2E',
    contrastText: '#fff',
};

const TEXT = {
    dark: '#314363',
    white: "#FFFFFF",
    primary: "#0038FF",
    secondary: GREY[600],
    disabled: 'rgba(202, 202, 202, 0.72)',
    error: "#F34A4A",
    info: "#FFCA40",
    success: 'rgba(24, 188, 70, 1)',
    greyDark: 'rgba(32, 28, 28, 0.72)',
    greyLight: 'rgba(15, 14, 14, 0.42)',
}

export const colors = {
    common: { background: '#F8F8F8', black: '#000', white: '#fff' },
    primary: PRIMARY,
    secondary: SECONDARY,
    info: INFO,
    success: SUCCESS,
    warning: WARNING,
    error: ERROR,
    grey: GREY,
    divider: "#D5D5D5",
    text: TEXT,
    background: {
        paper: '#fff',
        default: GREY[100],
        neutral: GREY[200],
    },
    action: {
        active: GREY[600],
        hover: alpha(GREY[500], 0.08),
        selected: alpha(GREY[500], 0.16),
        disabled: alpha(GREY[500], 0.8),
        disabledBackground: alpha(GREY[500], 0.24),
        focus: alpha(GREY[500], 0.24),
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};