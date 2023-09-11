import { alpha } from "@mui/material";


export const Palette = ({ colors }) => {

    return {
        mode: 'light',
        common: colors?.common,
        primary: colors?.primary,
        secondary: colors?.secondary,
        info: colors?.info,
        success: colors?.success,
        warning: colors?.warning,
        error: colors?.error,
        grey: colors?.grey,
        divider: alpha(colors?.grey[500], 0.24),
        text: colors?.text,
        background: colors?.background,
        action: colors?.action
    };
}