import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import AppRoutes from './routes';
import MainLayout from './layout';
import { Container } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Router>
        <Container maxWidth='lg'>
          <MainLayout>
            <AppRoutes />
          </MainLayout>
        </Container>
      </Router>
    </div>
  );
}

export default App;
