import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/vite-project/">
              <Element name="mhero">
                <Mhero />
              </Element>
            </Route>
            <Route path="/vite-project/imgGallery">
              <Element name="imgGallery">
                <ImgGallery />
              </Element>
            </Route>
            <Route path="/vite-project/amenities">
              <Element name="amenities">
                <Amenities />
              </Element>
            </Route>
            <Route path="/vite-project/aboutUs">
              <Element name="aboutUs">
                <AboutUs />
              </Element>
            </Route>
            <Route path="/vite-project/footer">
              <Element name="Footer">
                <Footer />
              </Element>
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
