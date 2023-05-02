import React from 'react';
import playStore from "../../images/playstore.png"
import appStore from "../../images/appStore.png"

import './Footer.css';
import {memo} from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h2>Want to know more about us</h2>
           <Link to="/about">Read more</Link>
            
          </div>

        <div className="midFooter">
            <h1>EDUCATION WEBSITE</h1>
            <p>&copy; 2013-2023 Kidimedia. All rights reserved.</p>
            <p>Product names, logos, brands, and other trademarks featured or referred to within the bookwidgets.com website are the property of their respective trademark holders.</p>

            
        </div>

        <div className="rightFooter">
           
            
            
        </div>



    </footer>
    
  );
}

export default memo(Footer);