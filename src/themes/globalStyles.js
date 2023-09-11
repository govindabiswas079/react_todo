// @mui
import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

// ----------------------------------------------------------------------

export default function GlobalStyles({ theme: { palette } }) {

  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
          backgroundColor: palette?.common?.background,
          scrollBehavior: "smooth",
        },
        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          backgroundColor: palette?.common?.background,
          scrollBehavior: "smooth",
        },
        '#root': {
          width: '100%',
          height: '100%',
          backgroundColor: palette?.common?.background,
          scrollBehavior: "smooth",
        },
      }}
    />
  );

  return inputGlobalStyles;
}
