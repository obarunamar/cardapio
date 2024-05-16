import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import './BackToMenuButton.css';

const BackToMenuButton = () => {
  return (
    <Link to="pratos" spy={true} smooth={true} duration={500} className="back-to-menu-button">
      <FaArrowUp />
    </Link>
  );
};

export default BackToMenuButton;
