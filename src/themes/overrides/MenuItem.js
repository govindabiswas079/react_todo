export default function MenuItem(theme) {

    return {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    background: theme?.colors?.white,
                    borderRadius: `0px`,
                    color: theme?.palette?.primary?.main,
                    fontWeight: 500,
                    padding: '15.5px 14px',
                    fontFamily: theme?.fontFamily,
                    fontSize: "14px",
                    fontStyle: "normal",
                    lineHeight: "140%",
                },
            },
        },
    }
}