import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { IndexLayout } from './layouts/IndexLayout';
import { BlogsLayout } from './layouts/BlogsLayout';
import { BlogLayout } from './layouts/BlogLayout';

import { Index } from './pages/Index';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/Blog'
import { Perfil } from './pages/Perfil';

import './styles/main.css';
import './styles/media-queries.css';
import './font/flaticon.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <IndexLayout /> }>
          <Route path = "/kikeana" element = { <Index /> } />
        </Route>
        <Route path = '/' element = { <BlogsLayout /> }>
          <Route path = "/Blogs" element = { <Blogs /> } />
        </Route>
        <Route path = '' element = { <BlogLayout /> }>
          <Route path = "/Blog" element = { <Blog /> } />
          <Route path = "/Perfil" element = { <Perfil /> } />
        </Route>
      </Routes>
    </Router>
  );
};

export { App };