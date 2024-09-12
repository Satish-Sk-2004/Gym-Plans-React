import React from 'react';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="navb-items">
          <a href="#"><img src="./images/logo.png" className="fclogo" alt="Logo"/></a>
        </label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#" className="active">Plans</a></li>
          <li><a href="#">Testimonials</a></li>
        </ul>
      </nav>
    </div>
  );
}
