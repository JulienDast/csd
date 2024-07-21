import React from 'react';
import NavbarApp from './components/Nav';
import Background from './assets/images/bg-csd.avif';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Nuisibles from './pages/Nuisibles';
import Contact from './pages/Contact';
import Galerie from './pages/Galerie';

const App = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <NavbarApp />
          <div className="min-h-screen flex items-center justify-center">
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='nuisibles' element={<Nuisibles/>}/>
            <Route path='galerie' element={<Galerie/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
          </div>
      <Footer/>
    </div>
  );
};

export default App;