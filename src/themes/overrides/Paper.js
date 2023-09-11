// ----------------------------------------------------------------------

export default function Paper({ palette }) {

  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
        // boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: palette?.common?.white
          // boxShadow: 'rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px'
        },
        rounded: {
          borderRadius: "24px"
        }
      }
    },
  };
}
