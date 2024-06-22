import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';

// Lazy-loaded components
const Mhero = React.lazy(() => import('./components/mhero'));
const ImgGallery = React.lazy(() => import('./components/ImgGallery'));
const Amenities = React.lazy(() => import('./components/Amenities'));
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <br />
        <Suspense fallback={<div>Loading...</div>}>
          <Element name="mhero">
            <Mhero />
          </Element>
          <br />
          <Element name="imgGallery">
            <ImgGallery />
          </Element>
          <br />
          <Element name="amenities">
            <Amenities />
          </Element>
          <br />
          <Element name="aboutUs">
            <AboutUs />
          </Element>
          <Element name="Footer">
          <Footer />
          </Element>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
