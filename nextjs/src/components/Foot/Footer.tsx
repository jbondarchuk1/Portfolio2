'use client';

import React from 'react';
import Icons from '../IconContainer/Icons';

const footerCss = {
    backgroundColor: '#333',
    height: '20em',
    color: 'white',
    textAlign: 'center'
}
const textCss = {
    padding: '20 20 20 20',
    fontSize: '3em',
    paddingTop: '1em',
}

function Footer() {
    return (
      <div className='Footer bg-zinc-800 h-80 text-white text-center shadow-inner'>
        <footer>
            <p style={textCss}>CONTACT</p>
            <Icons isTop={false}></Icons>
        </footer>
      </div>
    );
  }
  
  export default Footer;