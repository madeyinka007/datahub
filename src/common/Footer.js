import { Link } from "react-router-dom"
import { useThemeContext } from "../context/ThemeContext"

export default function Footer(){
    const {changeLanguage } = useThemeContext()
    return (
        <>
            <section className="subscribe-newsletter sec-mar-top">
                <div className="container">
                    <div className="news-letter-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="subscribe-cnt">
                                    <span>Get In Touch</span>
                                    <h3>Subscribe Our</h3>
                                    <strong>Newsletter</strong>
                                </div>
                            </div>
                            <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                                <div className="subscribe-form">
                                    <form action="#" method="post">
                                        <input type="email" name="email" placeholder="Type Your Email" />
                                        <input type="submit" value="connect" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link to="/"><img src="./../assets/img/logo.svg" alt="logo" /></Link>
                                    </div>
                                    <p>Integer purus odio, placerat nec ande rhoncus in, ullamcorper nec dolor. on aptent taciti sociosqu.</p>
                                    <ul className="social-media-icons">
                                        <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <div className="footer-widget">
                                    <h4>Our Services</h4>
                                    <ul className="footer-menu">
                                        <li><a href="service-details.html">Strategy &amp; Research</a></li>
                                        <li><a href="service-details.html">Web Development</a></li>
                                        <li><a href="service-details.html">Web Solution</a></li>
                                        <li><a href="service-details.html">Digital Merketing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <div className="footer-widget">
                                    <h4>Quick Links</h4>
                                    <ul className="footer-menu">
                                        <li><a href="about.html">Help & Support</a></li>
                                        <li><Link to="/referral">Become a Referrer</Link></li>
                                        <li><a href="project.html">Privacy Policy</a></li>
                                        <li><a href="blog.html">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                                <div className="footer-widget">
                                    <h4>Contacts</h4>
                                    <div className="number">
                                        <div className="num-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="phone">
                                            <a href="tel:05661111985">+880 566 1111 985</a>
                                            {/* <a href="tel:06571111576">+880 657 1111 576</a> */}
                                        </div>
                                    </div>
                                    <div className="office-mail">
                                        <div className="mail-icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <div className="email">
                                            <a href="tell:info@example.com"><span className="__cf_email__" data-cfemail="7a13141c153a1f021b170a161f54191517">info@example.com</span></a>
                                            {/* <a href="tell:info@support.com"><span className="__cf_email__" data-cfemail="91f8fff7fed1e2e4e1e1fee3e5bff2fefc">info@example.com</span></a> */}
                                        </div>
                                    </div>
                                    <div className="address">
                                        <div className="address-icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <p>168/170, Avenue 01, Mirpur DOHS, Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-4 col-lg-4 col-xl-5">
                                <div className="copy-txt">
                                    <span>Copyright 2024 | All rights reserverd.</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                                <ul className="footer-bottom-menu">
                                    {/* <li><a href="#">English</a></li>
                                    <li><a href="#">Français</a></li> */}
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                    <li style={{listStyle:'none'}}> 
                                        {/* <label>language</label> */}
                                        <select onChange={(e) => {changeLanguage(e.target.value)}}>
                                            <option value="en">English</option>
                                            <option value="fr">Français</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
        </>
    )
}