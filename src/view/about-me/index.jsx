import { Box, Stack, Typography, styled } from '@mui/material';
import { Fragment } from 'react';

const AboutMeTitle = styled((props) => {
  const { ...others } = props;
  return (
    <Typography
      variant='body1'
      component='h6'
      width='100%'
      textAlign='left'
      pl={{ xs: 0, sm: 8, md: 12, lg: 25 }}
      fontFamily='Roboto'
      fontWeight={500}
      letterSpacing={{ xs: '3.5px', sm: '3.75px', md: '4px' }}
      {...others}
    />
  );
})(() => {});

const AboutMeBody = styled((props) => {
  const { ...others } = props;
  return (
    <Typography
      variant='subtitle1'
      component='h6'
      width='100%'
      textAlign='left'
      fontFamily='Cutive Mono'
      letterSpacing={{ xs: '2px', sm: '2.25px', md: '2.5px' }}
      {...others}
    />
  );
})(() => {});

const AboutMeStackContainer = styled((props) => {
  const { ...others } = props;
  return (
    <Stack
      spacing={2}
      direction='column'
      width={{ xs: 300, sm: 400, md: 500 }}
      {...others}
      mt={2}
      ml='auto'
    />
  );
})(() => {});

const AboutMe = () => {
  return (
    <Fragment>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          width: '100%',
          fontFamily: 'Roboto',
          fontWeight: 500,
          letterSpacing: '20px',
          textAlign: 'left',
        }}
      >
        More...
      </Typography>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          width: '100%',
          fontFamily: 'Roboto',
          fontWeight: 500,
          letterSpacing: '20px',
          textAlign: 'right',
        }}
      >
        ABOUT ME
      </Typography>

      <Box mt={4} width='100%' mb={{ xs: 0, sm: 0, md: 4 }}>
        {/* 01. School Projects */}
        <Box mt={2}>
          <AboutMeTitle>01. School Projects</AboutMeTitle>

          <AboutMeStackContainer>
            <AboutMeBody>
              ReactJS empowered me to build dynamic and interactive user
              interfaces, enhancing the overall user experience and enabling
              seamless data management.
            </AboutMeBody>

            <AboutMeBody>
              I have completed two major projects using ReactJS: Ace Intramurals
              for score updates and schedules, and a capstone project on an
              Internship Program with Attendance Monitoring System.
            </AboutMeBody>
          </AboutMeStackContainer>
        </Box>

        {/* 02. Web Developer Trainee */}
        <Box mt={2}>
          <AboutMeTitle>02. Web Developer Trainee</AboutMeTitle>

          <AboutMeStackContainer>
            <AboutMeBody>
              I effectively utilized diverse tools, including HTML, CSS,
              JavaScript, PHP and Laravel along with MySQL for intern projects,
              consistently meeting project deadlines.
            </AboutMeBody>

            <AboutMeBody>
              The MVC (Model-View-Controller) architecture in Laravel helped me
              separate concerns and organize my codebase, resulting in cleaner
              and more modular code.
            </AboutMeBody>

            <AboutMeBody>
              The most important projects I have worked on during my internship
              include Laravel Skills Validation and a Basic Online Store with
              PayPal Integration.
            </AboutMeBody>
          </AboutMeStackContainer>
        </Box>
      </Box>
    </Fragment>
  );
};
export default AboutMe;
