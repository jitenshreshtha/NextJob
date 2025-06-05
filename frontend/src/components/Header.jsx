import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
      <Link to='/postjob'>Post Job</Link>
    </div>
  )
}

export default Header