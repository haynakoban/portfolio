import { Box, Paper, Stack, Typography } from '@mui/material';
import { Fragment } from 'react';
import HtmlLogo from '../../assets/HTML_Logo.png';
import CssLogo from '../../assets/CSS_LOGO.png';
import JsLogo from '../../assets/JS_LOGO.png';
import MySQLLogo from '../../assets/MYSQL_LOGO.png';
import PHPLogo from '../../assets/PHP_LOGO.png';
import NodeJsLogo from '../../assets/NODEJS_LOGO.png';
import ReactJsLogo from '../../assets/REACTJS_LOGO.png';
import LaravelLogo from '../../assets/LARAVEL_LOGO.svg';

const skills = [
  {
    logo: HtmlLogo,
    text: 'HTML',
    exp: ['00', 'Years'],
  },
  {
    logo: CssLogo,
    text: 'CSS',
    exp: ['00', 'Years'],
  },
  {
    logo: JsLogo,
    text: 'JS',
    exp: ['00', 'Year'],
  },
  {
    logo: MySQLLogo,
    text: 'MySQL',
    exp: ['00', 'Year'],
  },
  {
    logo: PHPLogo,
    text: 'PHP',
    exp: ['00', 'Year'],
  },
  {
    logo: ReactJsLogo,
    text: 'React',
    exp: ['00', 'Year'],
  },
  {
    logo: NodeJsLogo,
    text: 'Node',
    exp: ['00', 'Year'],
  },
  {
    logo: LaravelLogo,
    text: 'Laravel',
    exp: ['00', 'Year'],
  },
];

const Skills = () => {
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
        SKILLS and
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
        EXPERIENCES
      </Typography>

      <Box mt={6} mb={{ xs: 0, sm: 0, md: 4 }}>
        <Stack spacing={4} direction='column'>
          {skills.map(({ logo, text, exp }) => {
            return (
              <Paper
                key={text}
                sx={{
                  width: { xs: 'calc(100vw - 32px)', sm: '550px' },
                  display: 'flex',
                  border: '1px solid #252733',
                  borderRadius: 3,
                }}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  width={134}
                  px={4}
                  py={2}
                  borderRight='1px solid #252733'
                >
                  <img
                    // className='prog_lang_logos'
                    src={logo}
                    alt={text + ' logo'}
                    loading='lazy'
                    width={70}
                    height={70}
                  />
                  <Typography
                    variant='h6'
                    component='h6'
                    sx={{
                      mt: 0.75,
                      height: '24px',
                      lineHeight: '24px',
                      fontFamily: 'Cutive Mono',
                      letterSpacing: '.5px',
                      textAlign: 'center',
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
                <Box
                  flexGrow={1}
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Typography
                    variant='h4'
                    component='h4'
                    sx={{
                      fontFamily: 'Cutive Mono',
                      letterSpacing: '.1px',
                      textAlign: 'center',
                    }}
                  >
                    {exp[0]}
                  </Typography>
                  <Typography
                    variant='h6'
                    component='h6'
                    sx={{
                      fontFamily: 'Cutive Mono',
                      letterSpacing: '2px',
                      textAlign: 'center',
                    }}
                  >
                    {exp[1]} of Experience
                  </Typography>
                </Box>
              </Paper>
            );
          })}
        </Stack>
      </Box>
    </Fragment>
  );
};
export default Skills;
