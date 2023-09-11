export default function InputLabel(theme) {

    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme?.palette?.primary?.main,
                    fontFamily: theme?.fontFamily,
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "140%",
                    letterSpacing: "0.13px",
                },
            }
        },
    }
}