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
import support from './assets/donate.jpg';

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
      <Styled.a
        href={`${url[1]}`}
        rel="noopener noreferrer"
        target="_blank"
        key={name}
      >
        <Card
          variant="event"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.375) 75%),
              url(${url[0]})`,
          }}
        >
          <Styled.h1 as="h3" sx={{ fontSize: 3 }}>
            {startCase(name)}
          </Styled.h1>
        </Card>
      </Styled.a>
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
  <Flex sx={{ flexDirection: 'column', py: [3, 4, 5] }}>
    <Box sx={{ pr: 3 }}>
      <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>HERALDED</Styled.h1>
      <Styled.p sx={{ fontSize: [2, 3, 4], m: 0 }}>
        A list of resources for the service industry.
        <br />
        ... which has moved to its proper place &nbsp;
        <Styled.a
          sx={{
            variant: 'styles.navitem',
            py: [3, 4, 5],
          }}
          href="https://www.orlandoservicerelief.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Orlando Service Relief
        </Styled.a>
        .
      </Styled.p>
      {/* <Box
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
        <Link to="/support">
          <Card
            variant="event"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.375) 75%),
              url(${support})`,
            }}
          >
            <Styled.h1 as="h3" sx={{ fontSize: 3 }}>
              SUPPORT
            </Styled.h1>
          </Card>
        </Link>
      </Box> */}
    </Box>
    <Box sx={{ pr: 3 }}>
      <Card
        variant="event"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.375) 75%),
              url(${'https://images.unsplash.com/photo-1532375672241-878084a41e96?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&ixid=eyJhcHBfaWQiOjF9'})`,
        }}
      >
        <Styled.a
          sx={{
            variant: 'styles.navitem',
          }}
          href="https://www.orlandoservicerelief.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          {startCase('Orlando')}
        </Styled.a>
      </Card>
    </Box>
  </Flex>
);

export const HeroBGNewsletter = () => (
  <Box
    sx={{
      py: 4,
    }}
  >
    <Flex sx={{ alignItems: 'center', py: [3, 4, 5] }}>
      <Box sx={{ pr: 3 }}>
        <Styled.h6
          sx={{ mb: 1, textTransform: 'uppercase', color: 'secondary' }}
        >
          Coming Soon
        </Styled.h6>
        <Styled.h1 sx={{ fontSize: [5, 6, 8], m: 0 }}>Some product</Styled.h1>
        <Styled.p sx={{ fontSize: [2, 3, 4], m: 0, color: 'secondary' }}>
          This is a hero, with some convincing copy and a call to action.
        </Styled.p>
        <Styled.p sx={{ mt: [3, 4, 4], mb: 2 }}>
          Sign up for project updates and releases.
        </Styled.p>
        <Flex>
          <Input
            sx={{
              maxWidth: '18rem',
            }}
            placeholder={'hello@example.com'}
          />
          <Button
            sx={{
              color: '#471091',
              backgroundColor: '#acaedf',
              ml: 3,
              fontWeight: 600,
            }}
          >
            Subscribe
          </Button>
        </Flex>
      </Box>
    </Flex>
  </Box>
);
