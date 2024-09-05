import React from 'react'

export const Navigation = () => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check"/>
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="navb-items"><a href="#"><img src="./images/logo.png" class="fclogo" alt="Logo"/></a></label>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#" class="active">Plans</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
      </nav>
    </div>
  )
}
