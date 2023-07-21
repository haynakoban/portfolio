import { Fragment } from 'react';
import { Box } from '@mui/material';

import Header from './Header';
import SocialMedia from '../components/SocialMedia';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          flexDirection: {
            xs: 'column',
            sm: 'column',
            md: 'row',
          },
        }}
      >
        <Box width={40} maxWidth={40}></Box>

        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            px: {
              xs: 0,
              sm: 4,
              md: 10,
            },
          }}
        >
          {children}
        </Box>

        <SocialMedia />
      </Box>
    </Fragment>
  );
};
export default MainLayout;
