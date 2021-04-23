import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {

    const linkStyle = {
        color: 'white',
    };

  return (
    <div>
        <nav>
            <h3 className="logo"><a className="logoLink" href="/">Logo</a></h3>
            <ul className="navLinks">
                <Link to='/about' style={{textDecoration:'none'}}>
                    <li style={linkStyle} className="menuItem">About</li>
                </Link>
                <Link to='/shop' style={{textDecoration:'none'}}>
                    <li style={linkStyle} className="menuItem">Shop</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Nav;
