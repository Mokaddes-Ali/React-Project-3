import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavBar from './Components/NavBar/NavBar';
import HeroSection from './Components/HeroSection/HeroSection';
import Footer from './Components/Footer/Footer';
import FooterInner from './Components/FooterInner/FooterInner';
import OurService from './Components/OurService/OurService';
import ClientReview from './Components/ClientReview/ClientReview';
import ServiceSecurity from './Components/ServiceSecurity/ServiceSecurity';
import FreeServiceTrail from './Components/FreeServiceTrail/FreeServiceTrail';
import Serviceprice from './Components/Serviceprice/Serviceprice';
import DataSecurity from './Components/DataSecurity/DataSecurity';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <NavBar />
  <HeroSection />
  <OurService />
  <ServiceSecurity />
  <DataSecurity />
  <ClientReview />
  <Serviceprice />
  <FreeServiceTrail />
  <FooterInner />
  <Footer />
  </React.StrictMode>
);



reportWebVitals();
