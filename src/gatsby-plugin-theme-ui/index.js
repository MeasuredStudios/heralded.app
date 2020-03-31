import prism from '@theme-ui/prism/presets/theme-ui';

export default {
  initialColorModeName: 'light',
  colors: {
    text: '#000',
    background: '#fafafa',
    primary: 'hsl(240, 100%, 57%)',
    secondary: 'hsl(260, 100%, 57%)',
    accent: '#6166DC',
    muted: '#2c3e50',
    gray: '#555',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#fff',
        secondary: '#fff',
        accent: '#E9DAAC',
        muted: '#111',
        gray: '#73737D',
      },
    },
  },
  fonts: {
    body:
      "'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Ubuntu', 'Roboto', 'Noto', 'Segoe UI', 'Arial', sans-serif",
    monospace: '"Roboto Mono", Menlo, monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [14, 16, 18, 20, 24, 32, 48, 64, 72, 96],
  sizes: {
    container: 768,
    wide: 1280,
  },
  text: {
    heading: {
      fontSize: 2,
      fontWeight: 'heading',
      lineHeight: 'heading',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
      my: 2,
    },
    small: {
      fontSize: 0,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  prism,
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 2,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.4s',
    },
    a: {
      color: 'primary',
      ':hover,:focus': {
        color: 'secondary',
      },
    },
    h1: {
      variant: 'text.heading',
      my: 6,
    },
    h2: {
      variant: 'text.heading',
      mt: 5,
      mb: 3,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h4: {
      variant: 'text.heading',
    },
    h5: {
      variant: 'text.heading',
    },
    h6: {
      variant: 'text.heading',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      bg: 'muted',
      p: 3,
      borderRadius: 8,
      overflowX: 'auto',
      variant: 'prism',
    },
    code: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
    },
    hr: {
      border: 0,
      my: 4,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      py: 2,
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      py: 2,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    blockquote: {
      fontWeight: 'bold',
      mx: 0,
      px: 3,
      my: 5,
      borderLeft: '4px solid',
    },
    div: {
      '&.footnotes': {
        variant: 'text.small',
      },
    },
    navlink: {
      variant: 'text.caps',
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus': {
        color: 'primary',
      },
    },
    navitem: {
      variant: 'styles.navlink',
      display: 'inline-flex',
      alignItems: 'center',
      fontWeight: 'bold',
    },
  },
  forms: {
    input: {
      bg: 'elevated',
      color: 'text',
      fontFamily: 'inherit',
      borderRadius: 'base',
      boxShadow: 'small',
      transition: 'box-shadow .125s ease-in-out',
      border: 0,
      ':hover,:focus': {
        boxShadow: 'card',
      },
      '::-webkit-input-placeholder': {
        color: 'placeholder',
      },
      '::-moz-placeholder': {
        color: 'placeholder',
      },
      ':-ms-input-placeholder': {
        color: 'placeholder',
      },
      '&[type="search"]::-webkit-search-decoration': {
        display: 'none',
      },
    },
    label: {
      color: 'text',
      fontWeight: 'medium',
    },
    hidden: {
      position: 'absolute',
      height: '1px',
      width: '1px',
      overflow: 'hidden',
      clip: 'rect(1px, 1px, 1px, 1px)',
      whiteSpace: 'nowrap',
    },
  },
  cards: {
    primary: {
      bg: 'elevated',
      color: 'text',
      p: [3, 4],
      borderRadius: 'extra',
      boxShadow: 'card',
      overflow: 'hidden',
      input: {
        boxShadow: 'none !important',
      },
    },
    sunken: {
      bg: 'sunken',
      p: [3, 4],
      borderRadius: 'extra',
      'input, a': {
        bg: 'header',
        boxShadow: 'none !important',
      },
    },
    interactive: {
      variant: 'cards.primary',
      WebkitTapHighlightColor: 'transparent',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':hover,:focus': {
        transform: 'scale(1.0625)',
        boxShadow: 'elevated',
      },
    },
    event: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 196,
      color: 'white',
      textAlign: 'center',
      textShadow: '0 1px 4px rgba(0, 0, 0, 0.375)',
      textDecoration: 'none',
      backgroundColor: 'black',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 'extra',
      overflow: 'hidden',
      position: 'relative',
      p: 3,
      height: '100%',
    },
  },
};
