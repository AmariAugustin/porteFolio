import React from 'react';

function AboutMe() {
  const scrollToSection = () => {
    const element = document.getElementById('project-section');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center">
      <div>
        <h1>AMARI Augustin</h1>
        <p>
          Hello, I am Augustin AMARI, a French student in computer science. I am currently in my third year of a Bachelor degree in computer science (Miage) at the University of Evry Val d'Essonne Paris Saclay. This is my portfolio where I will present my school and personal projects, and some of my skills.
        </p>
        <button onClick={scrollToSection} className="btn btn-primary btn-lg">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default AboutMe;
