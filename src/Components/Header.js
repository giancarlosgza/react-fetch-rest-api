import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
          <Link to="/" className="navbar-brand">React Router</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/posts" className="nav-link">Posts</Link></li>
              <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
  
export default Header;