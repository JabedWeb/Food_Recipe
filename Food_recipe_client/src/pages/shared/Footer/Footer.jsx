/* eslint-disable no-unused-vars */
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLinkedinIn, FaYoutubeSquare, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='bg-dark pt-5 pb-3 text-light'>
      <div className="footer_container container">
      <div className="d-flex justify-content-between flex-wrap footer-section">
      <div className="footer-column">
        <h2>Food Recipe</h2>
        <p>we are here to provide a good food and ensure your good health</p>
      </div>
      <div className="footer-column">
        <h3>Follow Link</h3>
        <ul>
          <li>Privacy and Policy</li>
          <li>Terms and Conditions</li>
          <li>Disclaimer</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Social Connect</h3>
        <ul className='list-unstyled'>
         <li> <Link className='text-decoration-none text-light' to={'/'}><FaFacebook></FaFacebook> Facebook</Link></li>
         <li> <Link className='text-decoration-none text-light' to={'/'}><FaTwitter></FaTwitter> Twitter</Link></li>
          <li><Link className='text-decoration-none text-light' to={'/'}><FaLinkedinIn></FaLinkedinIn> LinkDin</Link></li>
          <li><Link className='text-decoration-none text-light' to={'/'}><FaYoutube></FaYoutube> Youtube</Link></li>
        </ul>
      </div>
    </div>
    <div className='mt-5'>
      <div className="text-center">
        <p>&copy; 2023 My Website</p>
      </div>
    </div>
      </div>
  </footer>
  )
}
