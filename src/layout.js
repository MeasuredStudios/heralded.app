/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui';
import { Link } from 'gatsby';
import { FaTwitter as Twitter } from 'react-icons/fa';

const modes = ['light', 'dark'];

const ColorButton = ({ mode, ...props }) => (
  <button
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ':hover,:focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none',
      },
    }}
  >
    <svg
      viewBox="0 0 32 32"
      width="24"
      height="24"
      fill="currentcolor"
      sx={{
        display: 'block',
      }}
    >
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>
);

export default (props) => {
  const [mode, setMode] = useColorMode();
  const cycleMode = (e) => {
    const i = modes.indexOf(mode);
    const n = (i + 1) % modes.length;
    setMode(modes[n]);
  };
  const title = props.pageContext?.frontmatter?.title;
  let date = props.pageContext?.frontmatter?.date;
  if (date)
    date = new Date(date).toLocaleDateString('en-US', {
      timeZone: 'UTC',
    });

  return (
    <div
      sx={{
        variant: 'styles.root',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          maxWidth: 'wide',
          mx: 'auto',
          px: 3,
          py: 4,
        }}
      >
        <Styled.a
          as={Link}
          to="/"
          sx={{
            variant: 'styles.navitem',
            mr: 3,
            fontWeight: 'bold',
          }}
        >
          Heralded
        </Styled.a>
        <div sx={{ mx: 'auto' }} />
        <ColorButton mode={mode} onClick={cycleMode} />
      </header>
      <main
        sx={{
          width: '100%',
          maxWidth: 'wide',
          px: 3,
          mx: 'auto',
          flex: '1 1 auto',
        }}
      >
        <div
          sx={{
            maxWidth: !!title ? 'container' : null,
          }}
        >
          {title && <Styled.h1>{title}</Styled.h1>}
          {date && (
            <div
              sx={{
                variant: 'text.small',
                fontWeight: 'bold',
              }}
            >
              {date}
            </div>
          )}
          {props.children}
        </div>
      </main>
      <footer
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto',
        }}
      >
        <div
          sx={{
            py: 4,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a
            href="https://twitter.com/HeraldedApp"
            title="Twitter"
            sx={{
              variant: 'styles.navitem',
              ml: 2,
              mr: 3,
            }}
          >
            <Twitter size={24} />
          </a>
        </div>
        <div
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            fontSize: 0,
          }}
        >
          <Styled.a
            as={Link}
            to="/"
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}
          >
            Heralded
          </Styled.a>
          <Styled.a
            as={Link}
            to="/about"
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}
          >
            About
          </Styled.a>
          <Styled.a
            as={Link}
            to="/grow"
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}
          >
            Grow
          </Styled.a>
          <Styled.a
            as={Link}
            to="/support"
            sx={{
              variant: 'styles.navitem',
              mr: 4,
            }}
          >
            Support
          </Styled.a>
          <div sx={{ mx: 'auto' }} />
          <div sx={{ my: 2 }}>
          <Styled.a
              sx={{

              }}
              href="https://www.measuredstudios.com/"
              rel="noopener"
              rel="noreferrer"
              target="_blank"
            >
              Measured Studios
              </Styled.a>
          </div>
        </div>
      </footer>
    </div>
  );
};
