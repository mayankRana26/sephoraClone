// Navbar.js
import React, { useState } from 'react';
import MakeUpPRoducts from './components/MekUp';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [desplayMakeUpProducts, setdesplayMakeUpProduct] = useState(false)
  const [desplaySkinCarePRoducts, setdesplaySkinCarePRoducts] = useState(false)

  return (
    <div>

      <nav>
        <ul>
          <li><a href="" className='navItem'>HOME</a></li>
          <li><a href="/Sale" className='navItem'>SALE</a></li>
          <li onMouseEnter={() => {
            setdesplayMakeUpProduct(true)
          }} onMouseLeave={() => {
            setdesplayMakeUpProduct(false)
          }}><a href="/Makeup" className='navItem'>MAKEUP</a>
            {desplayMakeUpProducts === true ?
              <div className='dropDown'>
                <div><NavLink to='/makeup-foundation-products'>Face</NavLink></div>
                <div>Eye</div>
                <div>Lip</div>
                <div>Nail</div>
              </div> : ''}
          </li>
          <li onMouseEnter={() => {
            setdesplaySkinCarePRoducts(true)
          }} onMouseLeave={() => {
            setdesplaySkinCarePRoducts(false)
          }}><a href="/Skincare" className='navItem'>SKINCARE</a>
            {desplaySkinCarePRoducts === true ?
              <div className='dropDown'>
                <div><NavLink to='/Moisturizers-products'>Moisturizers</NavLink></div>
                <div>CLEANSERS</div>
                <div>TOOL & TREATMENTS</div>
                <div>MASKS</div>
              </div>
              : ''}</li>
          <li><a href="/Fragrance" className='navItem'>FRAGRANCE</a></li>
          <li><a href="/Haircare" className='navItem'>HAIRCARE</a></li>
          <li><a href="/Tools&Brushes" className='navItem'>TOOLS & BRUSHES</a></li>
          <li><a href="/Bath&Body" className='navItem'>BATH & BODY</a></li>
          <li><a href="/Brands" className='navItem'>BRANDS</a></li>
        </ul>
      </nav>

    </div>
  );
};

export default Navbar;
