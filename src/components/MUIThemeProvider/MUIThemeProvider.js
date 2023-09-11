import { CssBaseline, StyledEngineProvider, } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import themes from '../../themes';

const MUIThemeProvider = ({ children }) => {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes()}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default MUIThemeProvider