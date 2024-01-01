import { Box, Paper, Stack, Typography } from '@mui/material';
import { Fragment } from 'react';

import PHPLogo from '../../assets/PHP_LOGO.png';
import LaravelLogo from '../../assets/LARAVEL_LOGO.svg';
import ReactJsLogo from '../../assets/REACTJS_LOGO.png';

const projects = [
  {
    link: 'https://github.com/haynakoban/chat-app',
    text: 'We Chat - ReactJS and Firebase Chat App',
    year: '2023',
    icon: ReactJsLogo,
    bgColor: '#202527',
  },
  {
    link: 'https://github.com/haynakoban/weather-app',
    text: 'Today Weather - ReactJS Weather App',
    year: '2023',
    icon: ReactJsLogo,
    bgColor: '#202527',
  },
  {
    link: 'https://github.com/haynakoban/azure-avenue-online-store',
    text: 'Azure Avenue - Laravel E-Commerce Store',
    year: '2023',
    icon: LaravelLogo,
    bgColor: '#74C9ED',
  },
  {
    link: 'https://github.com/haynakoban/capstone-project',
    text: 'Internship Attendance Monitoring System',
    year: '2023',
    icon: ReactJsLogo,
    bgColor: '#202527',
  },
  {
    link: 'https://github.com/haynakoban/laragigs',
    text: 'HiredHub - Laravel Job Listing',
    year: '2023',
    icon: LaravelLogo,
    bgColor: '#74C9ED',
  },
  {
    link: 'https://github.com/haynakoban/cats-do-code',
    text: 'CatsDoCode - Blog Posting',
    year: '2021',
    icon: PHPLogo,
    bgColor: '#FCAEAE',
  },
];
const Projects = () => {
  const openGithubLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <Fragment>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          width: '100%',
          fontFamily: 'Roboto',
          fontWeight: 500,
          letterSpacing: { xs: '7px', sm: '14px', md: '20px' },
          textAlign: 'left',
        }}
      >
        WORKS and
      </Typography>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          width: '100%',
          fontFamily: 'Roboto',
          fontWeight: 500,
          letterSpacing: { xs: '7px', sm: '14px', md: '20px' },
          textAlign: 'right',
          wordBreak: 'break-word',
        }}
      >
        PROJECTS
      </Typography>

      <Box mt={6} mb={{ xs: 0, sm: 0, md: 4 }}>
        <Stack
          spacing={{ xs: 2, sm: 3, md: 4 }}
          direction='row'
          useFlexGap
          flexWrap='wrap'
          justifyContent='center'
        >
          {projects.map(({ link, text, year, icon, bgColor }) => {
            return (
              <div
                key={link}
                onClick={() => openGithubLink(link)}
                style={{ position: 'relative' }}
              >
                <Paper
                  sx={{
                    width: { xs: 'calc(100vw - 32px)', sm: '250px' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '1px solid #252733',
                    borderRadius: 3,
                    py: 4,
                    px: 3,
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'all 500ms ease-in-out',
                    '&::before': {
                      content: '"Check GitHub Repository"',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#fff',
                      fontSize: '14px',
                      letterSpacing: '1px',
                      height: 60,
                      width: '100%',
                      position: 'absolute',
                      left: '0',
                      bottom: '-60px',
                      opacity: '0',
                      bgcolor: '#252733',
                      borderBottomRightRadius: '10px',
                      borderBottomLeftRadius: '10px',
                    },
                    '&:hover::before': {
                      bottom: '0',
                      opacity: '1',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 2.5,
                      bgcolor: bgColor,
                      borderRadius: '50%',
                    }}
                  >
                    <img
                      src={icon}
                      alt={text}
                      loading='lazy'
                      width={28}
                      height={28}
                    />
                  </Box>
                  <Typography
                    variant='subtitle1'
                    component='p'
                    mt={2}
                    textAlign='center'
                    maxHeight={72}
                  >
                    {text}
                  </Typography>
                  <Typography
                    variant='caption'
                    component='p'
                    mt={1}
                    textAlign='center'
                    fontWeight={700}
                  >
                    {year}
                  </Typography>
                </Paper>
              </div>
            );
          })}
        </Stack>
      </Box>
    </Fragment>
  );
};
export default Projects;
