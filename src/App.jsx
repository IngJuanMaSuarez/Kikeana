import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { IndexLayout } from './layouts/IndexLayout';
import { BlogsLayout } from './layouts/BlogsLayout';
import { BlogLayout } from './layouts/BlogLayout';

import { Index } from './pages/Index';
import { Blogs } from './pages/Blogs';
import { QueEsAmigurumi } from './pages/QueEsAmigurumi'
import { MaterialesUsados } from './pages/MaterialesUsados';
import { ComoBanoMiAmigurumi } from './pages/ComoBanoMiAmigurumi';
import { Festividades } from './pages/Festividades';
import { PrimerSorteoYLive } from './pages/PrimerSorteoYLive';
import { Perfil } from './pages/Perfil';
import { Galeria } from './pages/Galeria';

import './styles/main.css';
import './styles/media-queries.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <IndexLayout /> }>
          <Route path = "/" element = { <Index /> } />
        </Route>
        <Route path = '/' element = { <BlogsLayout /> }>
          <Route path = "/Blogs" element = { <Blogs /> } />
        </Route>
        <Route path = '' element = { <BlogLayout /> }>
          <Route path = "/QueEsAmigurumi" element = { <QueEsAmigurumi /> } />
          <Route path = "/MaterialesUsados" element = { <MaterialesUsados /> } />
          <Route path = "/ComoBanoMiAmigurumi" element = { <ComoBanoMiAmigurumi /> } />
          <Route path = "/Festividades" element = { <Festividades /> } />
          <Route path = "/PrimerSorteoYLive" element = { <PrimerSorteoYLive /> } />
          <Route path = "/Galeria" element = { <Galeria /> } />
          <Route path = "/Perfil" element = { <Perfil /> } />
        </Route>
      </Routes>
    </Router>
  );
};

export { App };