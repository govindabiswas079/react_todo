
// ----------------------------------------------------------------------

export default function Input(theme) {
  const { palette } = theme;

  return {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: palette?.primary?.lighter,
          borderRadius: `16px`,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: "transparent",
            borderWidth: '1.5px',
            borderStyle: 'solid'
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#0078ff",
            borderWidth: '1.5px',
            borderStyle: 'solid',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: palette?.primary?.light,
            borderWidth: '1.5px',
            borderStyle: 'solid'
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
          '& .MuiOutlinedInput-multiline': {
            padding: 1,
          },          
        },
        
        input: {
          fontWeight: 600,
          background: palette?.primary?.lighter,
          borderRadius: `16px`,
          // padding: '15.5px 14px',
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 16px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0
            }
          },
          "&::placeholder": {
            color: palette?.grey[300],
            fontFamily: theme?.fontFamily,
            fontSize: "13px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "140%",
            letterSpacing: "0.13px",
          },
          color: palette?.text?.dark,
          fontFamily: theme?.fontFamily,
          fontSize: "14px",
          fontStyle: "normal",
          lineHeight: "16px",
        },
        inputAdornedStart: {
          paddingLeft: 4
        },
        notchedOutline: {
          // borderRadius: `${theme?.customization?.borderRadius}px`
        }
      }
    },
  };
}
