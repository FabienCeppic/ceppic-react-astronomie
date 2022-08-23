import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import Layout from './pages/Layout';
import Apropos from './pages/Apropos';
import AjouterArticle from './pages/AjouterArticle';
import Articles from './pages/Articles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="apropos" element={<Apropos />} />
          <Route path="ajouterArticle" element={<AjouterArticle />} />
          <Route path="articles" element={<Articles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
