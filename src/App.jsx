import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { IndexLayout } from './layouts/IndexLayout';
import { BlogsLayout } from './layouts/BlogsLayout';

import { Index } from './pages/Index';
import { Blogs } from './pages/Blogs';
import { Blog } from './pages/Blog'

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <IndexLayout /> }>
          <Route path = "/" element = { <Index /> } />
        </Route>
        <Route path = '' element = { <BlogsLayout /> }>
          <Route path = "/Blogs" element = { <Blogs /> } />
          <Route path = "/Blog" element = { <Blog /> } />
        </Route>
      </Routes>
    </Router>
  );
};

export { App };