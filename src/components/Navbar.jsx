import React from 'react';

function Navbar(){
    return (
        <>
    <nav id="navbar-example2" className="navbar px-3 mb-3 sticky-top d-flex justify-content-center" style={{ backgroundColor: 'transparent' }}>
        <ul className="nav nav-pills rounded-pill bg-light p-2 shadow">
            <li className="nav-item">
                <a className="nav-link text-dark" href="#scrollspyHeading1">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#scrollspyHeading">Projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#scrollspyHeading3">Experiencies</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#scrollspyHeading4">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#scrollspyHeading5">Social Media</a>
            </li>
        </ul>
    </nav>
</>

    );
}

export default Navbar;