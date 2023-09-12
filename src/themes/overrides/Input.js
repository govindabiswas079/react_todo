
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
          "& input::placeholder": {
            color: "green"
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


// export const styles = theme => {
//   const borderColor =
//     theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
// 
//   return {
//     /* Styles applied to the root element. */
//     root: {
//       position: 'relative',
//       '& $notchedOutline': {
//         borderColor,
//       },
//       '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
//         borderColor: theme.palette.text.primary,
//         // Reset on touch devices, it doesn't add specificity
//         '@media (hover: none)': {
//           borderColor,
//         },
//       },
//       '&$focused $notchedOutline': {
//         borderColor: theme.palette.primary.main,
//         borderWidth: 2,
//       },
//       '&$error $notchedOutline': {
//         borderColor: theme.palette.error.main,
//       },
//       '&$disabled $notchedOutline': {
//         borderColor: theme.palette.action.disabled,
//       },
//     },
//     /* Styles applied to the root element if the component is focused. */
//     focused: {},
//     /* Styles applied to the root element if `disabled={true}`. */
//     disabled: {},
//     /* Styles applied to the root element if `error={true}`. */
//     error: {},
//     /* Styles applied to the `NotchedOutline` element. */
//     notchedOutline: {}
// 
//   };
// };