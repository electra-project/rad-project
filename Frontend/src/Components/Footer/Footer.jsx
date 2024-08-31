import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="social-icons">
          <a href="#!" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-google"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-github"></i></a>
        </section>

        <section className="news">
          <form action="">
            <div className="row">
              <div className="col">
                <p><strong>Sign up for our newsletter</strong></p>
              </div>
              <div className="col">
                <input type="email" placeholder="Email address" className="email-input" />
              </div>
              <div className="col">
                <button type="submit" className="btn">Subscribe</button>
              </div>
            </div>
          </form>
        </section>

        <section className="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.</p>
        </section>

        <section className="links">
          <div className="link-column">
            <h5 className="link-title">Links</h5>
            <ul>
              <li><a href="#!">Link 1</a></li>
              <li><a href="#!">Link 2</a></li>
              <li><a href="#!">Link 3</a></li>
              <li><a href="#!">Link 4</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h5 className="link-title">Links</h5>
            <ul>
              <li><a href="#!">Link 1</a></li>
              <li><a href="#!">Link 2</a></li>
              <li><a href="#!">Link 3</a></li>
              <li><a href="#!">Link 4</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h5 className="link-title">Links</h5>
            <ul>
              <li><a href="#!">Link 1</a></li>
              <li><a href="#!">Link 2</a></li>
              <li><a href="#!">Link 3</a></li>
              <li><a href="#!">Link 4</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h5 className="link-title">Links</h5>
            <ul>
              <li><a href="#!">Link 1</a></li>
              <li><a href="#!">Link 2</a></li>
              <li><a href="#!">Link 3</a></li>
              <li><a href="#!">Link 4</a></li>
            </ul>
          </div>
        </section>
      </div>

      <div className="copyright">
        © 2020 Copyright:
        <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;
