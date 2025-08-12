import { createTheme } from '@mui/material/styles';

const readCSSVar = (name: string) => (
    getComputedStyle(document.documentElement).getPropertyValue(name).trim()
)

const baseTheme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: readCSSVar('--brand-TELUS'),
            light: readCSSVar('--brand-light'),
            dark: readCSSVar('--brand-dark'),
            contrastText: readCSSVar('--typography-color-contrast'),
        },
        secondary: {
            main: readCSSVar('--brand-TELUS'),
        },
        text: {
            primary: readCSSVar('--typography-color'),
            secondary: readCSSVar('--typography-color'),
            disabled: readCSSVar('--typography-color-disabled'),
        },
        grey: {
            900: readCSSVar('--grey-900'),
            800: readCSSVar('--grey-800'),
            700: readCSSVar('--grey-700'),
            600: readCSSVar('--grey-600'),
            500: readCSSVar('--grey-500'),
            400: readCSSVar('--grey-400'),
            300: readCSSVar('--grey-300'),
            200: readCSSVar('--grey-200'),
            100: readCSSVar('--grey-100'),
            50: readCSSVar('--grey-050'),
            A100: readCSSVar('--grey-thunder'),
            A200: readCSSVar('--grey-thunder'),
            A400: readCSSVar('--grey-thunder'),
            A700: readCSSVar('--grey-thunder'),
        },
        getContrastText: (background: string) => {
            // Custom logic for contrast text
            const luminance = parseInt(background.replace('#', ''), 16) > 0xffffff / 2 ? '#000' : '#fff';
            return luminance;
        },
        divider: readCSSVar('--grey-mystic'),
    }
});

//Remove this - we will use HTML elements 
baseTheme.typography = {
    fontFamily: readCSSVar('--font-family'), // Use CSS variable
    hero: {
        fontWeight: '400',
        fontSize: '48px',
        lineHeight: '120%',
    },
    h1: {
        fontSize: readCSSVar('--modular-font-size'),
        lineHeight: '130%',
    },
    h2: {
        fontSize: readCSSVar('--modular-font-size'),
        lineHeight: '135%',
        fontWeight: 'bold',
    },
    h3: {
        fontSize: readCSSVar('--modular-font-size'),
        lineHeight: '135%',
    },
    h4: {
        fontSize: readCSSVar('--modular-font-size'),
        fontWeight: 'bold',
        lineHeight: '140%',
    },
    h5: {
        fontSize: readCSSVar('--modular-font-size'),
        fontWeight: 'bold',
        lineHeight: '150%',
    },
    h6: {
        fontSize: readCSSVar('--modular-font-size'),
        fontWeight: 'bold',
        lineHeight: '150%',
    },
    body1: {
        fontSize: readCSSVar('--modular-font-size'),
    },
    body2: {
        fontSize: readCSSVar('--modular-font-size'),
    },
    button: {
        fontWeight: 700,
        fontSize: readCSSVar('--base-font-size'),
        lineHeight: '144%',
        textAlign: 'center',
    },
    overline: {
        fontSize: '12px',
        textDecoration: 'capitalize'
    }
}
baseTheme.components = {
    MuiCssBaseline: {
        styleOverrides: {
        },
    },
    MuiLink: {
        styleOverrides: {
            root: {
                fontSize: 'inherit',
                color: readCSSVar('--brand-TELUS'), // Default link color
                '&:hover': {
                    color: readCSSVar('--brand-dark'), // Hover color
                },
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                padding: '0.5rem 1.5rem',
                borderRadius: '100rem',
                lineHeight: '160%',
            }
        }
    },
    MuiTypography: {
        styleOverrides: {
            root: {
            }
        },
        defaultProps: {
            variantMapping: {
                hero: 'h1',
                h1: 'h1',
                h2: 'h2',
                h3: 'h3',
                h4: 'h4',
                h5: 'h5',
                h6: 'h6',
                body1: 'p',
                body2: 'p',
            },
        },
    },
}

export default baseTheme;

//Custom types
declare module '@mui/material/styles' {
    interface TypographyVariants {
        hero: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        hero?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        hero: true;
    }
}