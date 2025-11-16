import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TrainingPage from './pages/TrainingPage';
import RiskEngineeringPage from './pages/RiskEngineeringPage';
import SectorsPage from './pages/SectorsPage';
import BlogPage from './pages/BlogPage';
import ArticlesPage from './pages/ArticlesPage';
import MediaPage from './pages/MediaPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/risk-engineering" element={<RiskEngineeringPage />} />
          <Route path="/sectors" element={<SectorsPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;