import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import './styles/main.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

