/** @jsx jsx */
import { Link } from 'gatsby';
import { kebabCase, snakeCase, startCase } from 'lodash';
import {
  Alert,
  Button,
  Card,
  Grid,
  Heading,
  Input,
  jsx,
  Label,
  Spinner,
  Text,
} from 'theme-ui';

import { regions } from './lib/regions.json';

export const Banner = (props) => (
  <div
    sx={{
      pb: [4, 5, 6],
      fontWeight: 'bold',
      ul: {
        listStyle: 'none',
        display: 'flex',
        p: 0,
        m: 0,
      },
      li: {
        mr: 3,
      },
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
          <Heading as="h3" sx={{ fontSize: 3 }}>
            {startCase(name)}
          </Heading>
        </Card>
      </Link>
    ))}
  </Grid>
);
