import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Typography } from '@mui/material';

import Profile from '../assets/ban.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          fontFamily: 'Poppins',
          fontWeight: 500,
          fontStyle: 'italic',
          letterSpacing: '1.5px',
          textAlign: 'center',
        }}
      >
        Kumusta?
      </Typography>

      <Typography
        variant='body1'
        component='h6'
        sx={{
          mt: 0.5,
          fontFamily: 'Poppins',
          fontWeight: 500,
          letterSpacing: { xs: '0.5px', sm: '0.75px', md: '1px' },
          textAlign: 'center',
        }}
      >
        ( “Hello” or “How are you?” in English )
      </Typography>

      <Typography
        variant='h6'
        component='h6'
        sx={{
          mt: 6,
          fontFamily: 'Poppins',
          fontWeight: 300,
          letterSpacing: '4px',
          textAlign: 'center',
        }}
      >
        I’m Bryan Cortez, a web developer who is passionate about creating
        websites which are both functional and effective using ReactJS and
        Laravel.
      </Typography>

      <Button
        variant='text'
        sx={{
          mt: 6,
          textDecoration: 'underline',
          color: '#252733',
          fontWeight: 700,
          letterSpacing: '1.5px',
        }}
        onClick={() => navigate('about-me')}
      >
        LEARN MORE
      </Button>

      <Avatar
        alt='Ban’s Picture'
        src={Profile}
        sx={{
          mt: 6,
          width: { xs: 300, sm: 350, md: 400 },
          height: { xs: 300, sm: 350, md: 400 },
          border: '1px solid rgba(0, 0, 0, .3)',
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          mb: { xs: 0, sm: 0, md: 4 },
        }}
      />
    </Fragment>
  );
};
export default Home;
