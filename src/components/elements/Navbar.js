import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary bg= dark variant=dark">
          <div className="container">
            <Link to="/" className="navbar-brand">
                Welcome to Fashinza    
            </Link>           
                <div>
                    <Link to="/create" className="btn btn-light ml-auto">Create Product </Link>
                </div>
          </div>
      </nav>
    )
}

export default Navbar