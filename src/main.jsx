import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './main.css';
import Root from './components/Root';
import Home from './components/pages/Home';
import Characters from './components/pages/Characters';
import Transports from './components/pages/Transports';
import Species from './components/pages/Species';
import Planets from './components/pages/Planets';
import ErrorPage from './components/pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="characters" element={<Characters />} />
        <Route path="species" element={<Species />} />
        <Route path="ships-vehicles" element={<Transports />} />
        <Route path="planets" element={<Planets />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </>,
  ),
  {
    basename: import.meta.env.BASE_URL,
  },
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
