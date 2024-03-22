import React from 'react';
import { Link } from 'react-router-dom';
import MJLog from '../../Assest/MJLogo.png'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-sticky sticky-top shadow" style={{backgroundColor:'#212428'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to='/' style={{color:'#BACFC6'}}><img src={MJLog} style={{width:'15%',height:'15%'}}/></Link>
    <button className="navbar-toggler bg-info " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon navbar-toggler-icon-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 p-3 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/' style={{color:'#BACFC6'}}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/features' style={{color:'#BACFC6'}}>FEATURES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/portfolio' style={{color:'#BACFC6'}}>PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/resume' style={{color:'#BACFC6'}}>RESUME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact' style={{color:'#BACFC6'}}>CONTACT</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
  );
}

export default Navbar;
