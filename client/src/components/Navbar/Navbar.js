
import './Navbar.css'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <Link href="/">Verslar</Link>
              </div>
            </div>
            <div className="header-item item-center">
              <div className="menu-overlay"></div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back">
                    <i className="fa fa-angle-left"></i>
                  </div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <ul className="menu-main">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/new">
                      New <i class="fas fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item text-center">
                        <a href="#">
                          <img src="/images/p1.jpg" alt="new Product" />
                          <h4 className="title">Product 1</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src="/images/p2.jpg" alt="new Product" />
                          <h4 className="title">Product 2</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src="/images/p3.jpg" alt="new Product" />
                          <h4 className="title">Product 3</h4>
                        </a>
                      </div>
                      <div class="list-item text-center">
                        <a href="#">
                          <img src="/images/p4.jpg" alt="new Product" />
                          <h4 class="title">Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/shop">
                      Shop <i class="fas fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Men's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 className="title">Beauty</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Women's Fashion</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                        <h4 className="title">Furniture</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Home, Kitchen</h4>
                        <ul>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                          <li>
                            <a href="#">Product List</a>
                          </li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img src="/images/shop1.jpg" alt="shop" />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/blog">
                      Blog<i class="fas fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <a href="#">Standard Layout</a>
                        </li>
                        <li>
                          <a href="#">Grid Layout</a>
                        </li>
                        <li>
                          <a href="#">single Post Layout</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to="/pages">
                      Pages <i class="fas fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link href="/register">Register</Link>
                        </li>
                        <li>
                          <Link href="/FAQ">FAQ</Link>
                        </li>
                        <li>
                          <a href="#">404 Page</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>

                  <li className="login-signup">
                    <Link to="/login">LOGIN</Link>
                  </li>
                  <li className="login-signup">
                    <Link to="/register">SIGNUP</Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <!-- menu end here --> */}
            <div className="header-item item-right">
              <a href="#">
              <i class="fas fa-search"></i>
              </a>

              {/* <a href="#"><FontAwesomeIcon icon="heart" /></a> */}
              <Link to="/sign-in" onClick={() => setIsOpen(true)}>
                Sign in
              </Link>
              {/* <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
              <h2>Modal title</h2>
              <p>Modal content</p>
            </Modal> */}
              <a href="#">
              <i class="fas fa-shopping-cart"></i>
              </a>
              <span className="cart-counter">48</span>

              <Link to="/languages">
              <i class="fas fa-globe"></i>
              </Link>

              {/* <!-- mobile menu trigger --> */}
              <div className="mobile-menu-trigger">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
