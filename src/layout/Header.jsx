import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuLinks = [
  {
    text: 'Home',
    path: 'portfolio/',
  },
  {
    text: 'Skills',
    path: 'portfolio/skills',
  },
  {
    text: 'About Me',
    path: 'portfolio/about-me',
  },
  {
    text: 'Projects',
    path: 'portfolio/projects',
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          bgcolor: 'transparent',
          color: '#252733',
          boxShadow: 'none',
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              fontFamily: 'Poppins',
              fontWeight: 500,
              letterSpacing: '1.3px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('portfolio/')}
          >
            Bryan
          </Typography>
          <IconButton
            sx={{ width: 40, height: 40 }}
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={() => toggleDrawer(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor='right' open={open} onClose={() => toggleDrawer(false)}>
        <Box
          width='100vw'
          height='100vh'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Box
            width={{ xs: '100%', sm: 400 }}
            height='100%'
            mx='auto'
            textAlign='center'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
          >
            <Button
              onClick={() => toggleDrawer(false)}
              sx={{
                fontSize: '48px !important',
                color: '#252733',
                fontFamily: 'Roboto',
                fontWeight: 200,
                letterSpacing: '10px',
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              Exit
            </Button>
            {menuLinks.map(({ text, path }) => (
              <Button
                key={text}
                sx={{
                  fontSize: '48px !important',
                  color: '#252733',
                  fontFamily: 'Roboto',
                  fontWeight: 200,
                  letterSpacing: '10px',
                  '&:hover': {
                    bgcolor: 'transparent',
                  },
                }}
                onClick={() => {
                  toggleDrawer(false);
                  navigate(path);
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
export default Header;
