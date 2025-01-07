import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AboutMe from './components/aboutMe'
import Project from './components/Project'
import Skills from './components/Skills'
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AboutMe />
    <Project />
    <Skills />
  </StrictMode>,
)