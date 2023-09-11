import { Palette } from './palette';
import shadows from './shadows';
import { Typography } from './typography';
import customShadows from './customShadows';
import componentsOverride from './overrides';
import { createTheme } from '@mui/material';
import { colors } from './colors';

export default function ThemeProvider() {
    const color = colors;

    const themeOption = {
        colors: color,
        fontFamily: "Montserrat"
    };

    const themeOptions = {
        direction: 'ltr',
        fontFamily: "Montserrat",
        shape: { borderRadius: 6 },
        shadows: shadows(themeOption),
        customShadows: customShadows(themeOption),
        palette: Palette(themeOption),
        typography: Typography(themeOption),
        mixins: {
            toolbar: {
                minHeight: '75px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '75px'
                }
            }
        },
    }

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);


    return theme
}
