/** @jsx jsx */
import { Link } from 'gatsby';
import { kebabCase, snakeCase, startCase } from 'lodash';
import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Input,
  jsx,
  Label,
  Styled,
  Text,
} from 'theme-ui';

import { regions } from './lib/regions.json';

import grow from './assets/grow.jpg';
import donate from './assets/donate.jpg';

export const Banner = (props) => (
  <div
    sx={{
      pb: [4, 5, 6],
      fontWeight: 'bold',
      a: {
        color: 'inherit',
        textDecoration: 'none',
      },
    }}
  >
    {props.children}
  </div>
);

export const Container = ({ wide, ...props }) => (
  <div
    sx={{
      maxWidth: wide ? 'wide' : 'container',
    }}
  >
    {props.children}
  </div>
);

export const Tiles = (props) => (
  <div
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      },
      h2: {
        fontSize: 2,
      },
      img: {
        display: 'block',
        width: 128,
        maxWidth: '100%',
        height: 'auto',
        m: 'auto',
      },
      a: {
        variant: 'styles.navlink',
      },
      ...props.sx,
    }}
  >
    {props.children}
  </div>
);

export const List = (props) => (
  <div
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: 4,
      },
      a: {
        variant: 'styles.navlink',
        fontWeight: 'bold',
      },
      ...props.sx,
    }}
  >
    {props.children}
  </div>
);

export const Call = (props) => (
  <Card
    variant="sunken"
    sx={{ maxWidth: 'narrowPlus', mx: 'auto', mt: [3, 4] }}
  >
    <Heading variant="text.heading" as="h2" sx={{ mb: 1 }}>
      Do the Five!
    </Heading>
    <Text sx={{ color: 'muted' }}>
      The greatest relief and benefit we could get is to be back to doing what
      we love. Help stop coronavirus.
    </Text>
    <Grid
      as="div"
      gap={[2, 3]}
      sx={{
        mt: [null, 3],
        gridTemplateColumns: [null, '1fr 1fr auto'],
        textAlign: 'left',
        alignItems: 'end',
      }}
    >
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="me@email.com"
        />
      </div>
      <div>
        <Label htmlFor="location">Location</Label>
        <Input id="location" placeholder="Orlando, FL" />
      </div>
      <Button type="submit" sx={{ mt: [2, 0] }}>
        Sign Up
      </Button>
    </Grid>
  </Card>
);

export const Region = ({ showAll = false, sx = {}, ...props }) => (
  <Grid
    columns={[1, 2, 4]}
    gap={[3, 4]}
    sx={{
      mt: [4, 5],
      mb: [4, 5],
      ...sx,
      a: {
        WebkitTapHighlightColor: 'transparent',
        transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
        ':hover,:focus': {
          transform: 'scale(1.0625)',
          boxShadow: 'elevated',
        },
      },
    }}
  >
    {showAll && (
      <Link to="/" passHref>
        <Card
          variant="primary"
          sx={{
            bg: 'elevated',
            color: 'primary',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none',
            fontSize: 3,
            fontWeight: 'bold',
          }}
        >
          All Events
        </Card>
      </Link>
    )}
    {Object.entries(regions).map(([name, url]) => (
      <Link to={`regions/${kebabCase(name)}`} key={name}>
        <Card
          variant="event"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.375) 75%),
              url(${url})`,
          }}
        >
          <Styled.h1 as="h3" sx={{ fontSize: 3 }}>
            {startCase(name)}
          </Styled.h1>
        </Card>
      </Link>
    ))}
  </Grid>
);

export const TagLineA = () => (
  <Box sx={{ py: [3, 4, 5] }}>
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      <Styled.h1 as="h3" sx={{ m: 0 }}>
        What is a block?
      </Styled.h1>
      <Styled.p sx={{ m: 0, maxWidth: 600 }}>
        A Block refers to a piece of content or a component. It&lsquo;s a
        section of your content while a document is a collection of blocks.
      </Styled.p>
      <Styled.p sx={{ mb: 0, maxWidth: 600 }}>
        Blocks can be simple like a paragraph of text or even a box with a
        tomato background color. Blocks can be complex like an embedded
        spreadsheet or a chart that fetches live data.
      </Styled.p>
    </Box>
  </Box>
);

export const HeroA = () => (
  <Flex sx={{ alignItems: 'center', py: [3, 4, 5] }}>
    <Box sx={{ pr: 3 }}>
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>HERALDED</Styled.h1>
      <Styled.p sx={{ fontSize: [2, 3, 4], m: 0 }}>
        A list of resources for the Hospitality industry.
        <br />
        ... more resources are coming. In the mean time, follow us on
        Twitter&nbsp;
        <Styled.a
          sx={{
            variant: 'styles.navitem', py: [3, 4, 5],
          }}
          href="https://twitter.com/HeraldedApp"
          rel="noopener"
          rel="noreferrer"
          target="_blank"
        >
          @HeraldedApp
        </Styled.a>
        .
      </Styled.p>
      <Box
        sx={{
          pt: 3,
          p: 0,
          m: 0,
          display: 'grid',
          gridGap: 4,
          gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        }}
      >
        <Link to="/grow">
          <Card
            variant="event"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.375) 75%),
              url(${grow})`,
            }}
          >
            <Styled.h1 as="h3" sx={{ fontSize: 3 }}>
              GROW
            </Styled.h1>
          </Card>
        </Link>
        <Link to="/donate">
          <Card
            variant="event"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.375) 75%),
              url(${donate})`,
            }}
          >
            <Styled.h1 as="h3" sx={{ fontSize: 3 }}>
              DONATE
            </Styled.h1>
          </Card>
        </Link>
      </Box>
    </Box>
  </Flex>
);
