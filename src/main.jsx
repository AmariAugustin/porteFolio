import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutMe from './components/AboutMe.jsx'
import Project from './components/Project.jsx'
import Skills from './components/Skills.jsx'
import Navbar from './components/Navbar.jsx'
import SocialMedia from './components/SocialMedia.jsx'
import Experiencies from './components/Experiencies.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutMe />
    <Navbar />
    <Project />
    <Experiencies />
    <Skills />
    <SocialMedia />
  </StrictMode>,
)
