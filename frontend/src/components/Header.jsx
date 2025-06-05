import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

function Header() {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  const checkSession = async () => {
    try {
      const response = await fetch("http://localhost:5000/checkSession", {
        credentials: 'include'
      });
      const data = await response.json();
      setIsLoggedIn(data.loggedIn);

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkSession();
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/logout",{
        method:'POST',
        credentials:'include'
      });
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(false);
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/signup'>Signup</Link>
      {isloggedIn ? (
        <Link to='/' onClick={handleLogout}>Logout</Link>
      ) : (
        <Link to='/login'>Login</Link>
      )}

      <Link to='/postjob'>Post Job</Link>
    </div>
  )
}

export default Header