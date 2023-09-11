import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Button(theme) {
  const { palette, customShadows, fontFamily } = theme;

  return {
    MuiButton: {
      styleOverrides: {
        defaultProps: {
          disableElevation: true
        },
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // textAlign: "center",
          gap: "8px",
          borderRadius: "24px",
          border: `1px solid ${palette?.text?.greyLight}`,
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "16px",
          letterSpacing: "-0.24px",
          transition: 'ease 0.4s',
          // textTransform: "capitalize",
          fontFamily: fontFamily,
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "16px",
        },
        sizeSmall: {
          height: 38,
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "12px",
        },
        containedInherit: {
          color: palette?.grey[800],
          boxShadow: customShadows?.z8,
          '&:hover': {
            backgroundColor: palette?.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: customShadows?.primary,
        },
        containedSecondary: {
          boxShadow: customShadows?.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: palette?.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: palette?.action.hover,
          },
        },
      },
    },
  };
}
