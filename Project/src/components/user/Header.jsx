import React, { useState, useEffect } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import '../../App.css';

const Header = ({ isAuthenticated, OpenSidebar }) => { 
  const [showSignUpOptions, setShowSignUpOptions] = useState(false);

  // Toggle the visibility of the sign-up options
  const toggleSignUpOptions = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };

  useEffect(() => {
    console.log("Header component mounted");
  }, []);

  
}

export default Header;
