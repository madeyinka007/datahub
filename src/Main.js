import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './render/Landing';
import Header from './common/Header';
import Footer from './common/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Referral from './render/Referral';
import NotFound from './render/NotFound';
import Contact from './render/Contact';
import About from './render/About';
import Services from './render/Services';
import Service from './render/Service';
import Projects from './render/Projects';
import Project from './render/Project';
import ScrollTop from './render/ScrollTop';

function App() {
  return (
    <>
      <ThemeProvider>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <ScrollTop />
            <Header />
            <main className="creasoft-wrap">
              <div className="line_wrap">
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
                <div className="line_item"></div>
              </div>
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/service/:slug" element={<Service />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/project/:slug" element={<Project />} />
                <Route path="/referral" element={<Referral />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/service/*" element={<NotFound />} />
              </Routes>
              <Footer />
            </main>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
