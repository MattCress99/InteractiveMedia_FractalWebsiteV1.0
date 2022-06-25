import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer-container">
        <div class='footer-links'>
              <div className='footer-link-wrapper'>
                  <div class='footer-link-items'>
                      <h2>Contact Us</h2>
                        <p>
                            Name: Matthew Cresswell 
                            <br></br>
                            Email: matthewcresswell99@gmail.com
                            <br></br>
                            Phone Number: +27 83 664 2971
                        </p>
                  </div>
              </div>
              <div className='footer-link-wrapper'>
                  <div class='footer-link-items'>
                      <h2>Social Media</h2>
                      <Link to='/instagram' target="_blank">Instagram</Link>
                      <Link to='/facebook' target='_blank'>Facebook</Link>
                      <Link to='/linkedIn' target="_blank">LinkedIn</Link>
                  </div>
              </div>
          </div>
          <section class='social-media'>
              <div class='social-media-wrap'>
                  <div class='footer-logo'>
                      <Link to='/' className='social-logo'>
                          Fractally
                      </Link>
                  </div>
                  <small class='website-rights'>Matthew Cresswell Copyright © 2022</small>
                  <div class='social-icons'>
                      <Link
                          class='social-icon-link instagram'
                          to='/'
                          target='_blank'
                          aria-label='Instagram'
                      >
                          <i class='fab fa-instagram' />
                      </Link>
                      <Link
                          class='social-icon-link facebook'
                          to='/facebook'
                          target='_blank'
                          aria-label='Facebook'
                      >
                          <i class='fab fa-facebook-f' />
                      </Link>
                      <Link
                          class='social-icon-link LinkedIn'
                          to='/'
                          target='_blank'
                          aria-label='LinkedIn'
                      >
                          <i class='fab fa-linkedin' />
                      </Link>
                  </div>
              </div>
          </section>
      </div>
  )
}

export default Footer