import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { IndexLayout } from './layouts/IndexLayout';
import { Index } from './pages/Index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = { <IndexLayout /> }>
          <Route path = "/" element = { <Index /> } />
        </Route>
      </Routes>
    </Router>
  );
}

export { App };