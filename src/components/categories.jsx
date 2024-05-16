import React from 'react';
import { Link } from 'react-scroll';
import { category } from '../data/categories';
import './categories.css';

const Categories = () => {
  return (
    <div className="categories-slider">
      {category.categories.map(category => (
        <Link
          key={category.name}
          to={category.target}
          spy={true}
          smooth={true}
          duration={500}
          className="category"
        >
          <div className="icon">{category.icon}</div>
          <div className="name">{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
