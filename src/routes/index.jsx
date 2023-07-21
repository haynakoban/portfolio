import { Routes, Route } from 'react-router-dom';

import Home from '../view';
import Skills from '../view/skills';
import AboutMe from '../view/about-me';
import Projects from '../view/projects';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='portfolio/' element={<Home />} />
      <Route path='portfolio/skills' element={<Skills />} />
      <Route path='portfolio/about-me' element={<AboutMe />} />
      <Route path='portfolio/projects' element={<Projects />} />
    </Routes>
  );
};

export default AppRoutes;
