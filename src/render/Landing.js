import { useTranslation } from "react-i18next"
import { ProjectCard } from "../components/cards"
import { PartnerCard, ServiceCard, TeamCard, TestimonialCard } from "../components/swiper"
import { Link } from "react-router-dom"
import { PlanSelectModal } from "../components/Modal"
import { useState } from "react"
import { useThemeContext } from "../context/ThemeContext"

function Landing(){
    const { t } = useTranslation()
    const [open, setIsOpen] = useState(false)
    const {setPlan} = useThemeContext()

    function handlePlanSelect(plan){
        setIsOpen(true)
        setPlan(plan)
    }

    return (
        <><section className="hero-area">
        <div className="ken-burns-slideshow">
            <img src="assets/img/hero-banner.jpg" alt="hero-banner" />
        </div>
        <div className="verticale-social">
            <ul className="vertical-media">
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://www.linkedin.com/">Linkedin</a></li>
            </ul>
        </div>
        <div className="hero-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1>Bring your brand<span>to spotlight.</span></h1>
                            <p>Partner with us to create a powerful online presence that engages your audience and drives growth. Let's transform your vision into a digital masterpiece.</p>
                            <div className="buttons">
                                <div className="cmn-btn">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <a href="about.html">{t('About')}</a>
                                </div>
                                <div className="cmn-btn layout-two">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <a href="#">{t('See_Projects')}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    </section>
    <section className="services-area sec-mar">
        <div className="container">
            <div className="title-wrap wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="sec-title">
                    <span>{t('Offering')}</span>
                    <h2>Services</h2>
                    <p>Our comprehensive range of services is designed to meet the diverse needs of businesses in the digital age. From stunning website designs to strategic marketing campaigns, we are your trusted partner in achieving online success.</p>
                    {/* <p>We are a full stack software development agency that can help your business from branding through marketing through development to launch.</p> */}
                </div>
            </div>
            <ServiceCard />
        </div>
    </section>
    <section className="about-area sec-mar-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 or-2 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="sec-title layout2">
                        <span>Get To Know Us</span>
                        <h2>About Us</h2>
                    </div>
                    <div className="about-left mb-3">
                        <h3>Let's Create Something Amazing Together.</h3>
                        <p>As a full-service digital agency, we are dedicated to helping our clients navigate the dynamic digital landscape with cutting-edge solutions and strategic insights that drives long-term growth.</p>
                        {/* <p>Our digital solutions support businesses in the realignment of, or new investment in technology, business processes and models to become more relevant to consumers and drive long-term growth.</p> */}
                        
                        {/* <div className="company-since">
                            <div className="company-logo">
                                <img src="assets/img/logo-dark.svg" alt="logo-dark" />
                            </div>
                            <strong>#1</strong>
                            <h4>Best Creative IT Agency And Solutions <span>Since 2005.</span></h4>
                        </div> */}
                    </div>
                    <div className="about-left mb-3">
                        <p>Our strategy is centered around understanding your business, your goals, and your audience. We believe that a successful digital presence is built on a solid foundation of research, planning, and execution.</p>
                        <div class="buttons-group">
                            <span>Learn More</span>
                        </div>
                        {/* <p>From designing your overall digital strategy, to Digital Communication, to implementing game-changers like Cloud, AI, Mobility and Digital Engineering, we guide you through the jungle of digital possibilities with a structured and result-oriented approach.</p> */}
                    </div>
                    
                </div>
                <div className="col-lg-6 or-1 wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="about-right">
                        <div className="banner-1">
                            <img src="assets/img/about-baner-1.jpg" alt="about-image" />
                        </div>
                        <div className="banner-2">
                            <img src="assets/img/about-baner-2.jpg" alt="about-banner" />
                            <div className="banner2-inner">
                                <div className="play">
                                    <a className="video-popup" href="https://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="features-area">
        <div className="container">
            <div className="title-wrap  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="sec-title white">
                    <span>Trust in Numbers</span>
                    <h2>Company Stats</h2>
                    <p>Over 10 years of service in the digital space has imbued us with solid experience. The numbers are here to prove it.</p>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="single-feature">
                        <div className="feature-inner">
                            <div className="icon">
                                <img src="assets/img/icons/feature-icon-1.png" alt="feature-icon-1" />
                            </div>
                            <span className="counter">150</span><sup>+</sup>
                            <h4>Project Completed</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="single-feature">
                        <div className="feature-inner">
                            <div className="icon">
                                <img src="assets/img/icons/feature-icon-2.png" alt="feature-icon-2" />
                            </div>
                            <span className="counter">250</span><sup>+</sup>
                            <h4>Satisfied Clients</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="single-feature">
                        <div className="feature-inner">
                            <div className="icon">
                                <img src="assets/img/icons/feature-icon-3.png" alt="feature-icon-3" />
                            </div>
                            <span className="counter">50</span><sup>+</sup>
                            <h4>Team Members</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
                    <div className="single-feature">
                        <div className="feature-inner">
                            <div className="icon">
                                <img src="assets/img/icons/feature-icon-4.png" alt="feature-icon-4" />
                            </div>
                            <span className="counter">28</span><sup>+</sup>
                            <h4>Technology Partners</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="project-area sec-mar">
        <div className="container">
            <div className="title-wrap">
                <div className="sec-title">
                    <span>Case Study</span>
                    <h2>Projects</h2>
                    <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
                </div>
            </div>
            <ProjectCard />
        </div>
    </section>
    <section className="our-partner">
        <div className="container">
            <PartnerCard />
        </div>
    </section>
    <section className="priceing-plan sec-mar">
        <div className="container">
            <div className="title-wrap">
                <div className="sec-title">
                    <span>Getting Started</span>
                    <h2>Pricing Plan</h2>
                    <p>We have bundled your business needs into three plans. Choose which ever plan suites your business need. You may choose to upgrade an existing plan later.</p>
                </div>
            </div>
            {/* <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    <div className="price-table-tab">
                        <ul className="nav nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Pay Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pay Yearly</button>
                            </li>
                        </ul>
                    </div>
                </div>      
            </div> */}
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="price-box">
                                <h3>Basic</h3>
                                <span>Business Starter</span>
                                <strong>₦350k</strong>
                                <ul className="item-list">
                                    <li><i className="bi bi-check"></i>Custom Designed Landing Page</li>
                                    <li><i className="bi bi-check"></i>10 Pages Responsive Website</li>
                                    <li><i className="bi bi-check"></i>Content Management System</li>
                                    <li><i className="bi bi-check"></i>Google Analytics Integration</li>
                                    <li><i className="bi bi-check"></i>Social Media Integration</li>
                                    <li><i className="bi bi-check"></i>Search Engine Optimization</li>
                                    <li><i className="bi bi-check"></i>Domain Name 1 Yr</li>
                                    <li><i className="bi bi-check"></i>Hosting (AWS) 1 Yr</li>
                                </ul>
                                <div className="price-btn">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <Link onClick={() => handlePlanSelect('Basic Plan')}>Choose Plan</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="price-box">
                                <h3>Standard</h3>
                                <span>Shopping Mart</span>
                                <strong>₦500k</strong>
                                <ul className="item-list">
                                    <li><i className="bi bi-check"></i>Custom Designed Landing Page</li>
                                    <li><i className="bi bi-check"></i>15 Pages Responsive Website</li>
                                    <li><i className="bi bi-check"></i>Woo Commerce Integration</li>
                                    <li><i className="bi bi-check"></i>Payment Gateway Integration</li>
                                    <li><i className="bi bi-check"></i>Maximum of 100 Products Upload</li>
                                    <li><i className="bi bi-check"></i>All Basic Plan Features</li>
                                    <li><i className="bi bi-check"></i>Domain Name 1 Yr</li>
                                    <li><i className="bi bi-check"></i>Hosting (AWS) 1 Yr</li>
                                </ul>
                                <div className="price-btn">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <Link onClick={() => handlePlanSelect('Standard Plan')}>Choose Plan </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="price-box">
                                <h3>Premium</h3>
                                <span>Custom Development</span>
                                <strong>TBD</strong>
                                <ul className="item-list">
                                    <li><i className="bi bi-check"></i>Basic And Standard Plan</li>
                                    <li><i className="bi bi-check"></i>User Requested Modules</li>
                                    <li><i> - </i></li>
                                    <li><i> - </i></li>
                                    <li><i> - </i></li>
                                    <li><i> - </i></li>
                                    <li><i> - </i></li>
                                    <li><i> - </i></li>
                                </ul>
                                <div className="price-btn">
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <Link onClick={() => handlePlanSelect('Premium Plan')}>Choose Plan</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PlanSelectModal open={open} onClose={() => setIsOpen(!open)} />
    </section>
    <section className="testimonial-area">
        <div className="container-fluid p-0">
            <div className="title-wrap">
                <div className="sec-title white">
                    <span>Testimonial</span>
                    <h2>Client Say About Us</h2>
                    <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
                </div>
            </div>
            <TestimonialCard />
        </div>
    </section>
    <section className="our-team sec-mar">
        <div className="container">
            <div className="title-wrap  wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="sec-title">
                    <span>Our Team</span>
                    <h2>Meet Our Team</h2>
                    <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
                </div>
            </div>
            <TeamCard />
        </div>
    </section>
    <section className="blog-area">
        <div className="container">
            <div className="title-wrap -6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="sec-title">
                    <span>All Blog</span>
                    <h2>Latest Post</h2>
                    <p>Curabitur sed facilisis erat. Vestibulum pharetra eros eget fringilla porttitor. on Duis a orci nunc. Suspendisse ac convallis sapien, quis commodo libero.</p>
                </div>
            </div>
            <div className="row gy-4">
                <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                    <div className="single-blog">
                        <div className="blog-thumb">
                            <a href="blog-details.html"><img src="assets/img/blog/blog-1.jpg" alt="blog-1" /></a>
                            <div className="tag">
                                <a href="project.html">UI/UX</a>
                            </div>
                        </div>
                        <div className="blog-inner">
                            <div className="author-date">
                                <a href="#">By, Admin</a>
                                <a href="#">22.02.2022</a>
                            </div>
                            <h4><a href="blog-details.html">Quisque malesuada sapien and Donec sed nunc.</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                    <div className="single-blog">
                        <div className="blog-thumb">
                            <a href="blog-details.html"><img src="assets/img/blog/blog-2.jpg" alt="blog-2" /></a>
                            <div className="tag">
                                <a href="project.html">Software</a>
                            </div>
                        </div>
                        <div className="blog-inner">
                            <div className="author-date">
                                <a href="#">By, Admin</a>
                                <a href="#">22.02.2022</a>
                            </div>
                            <h4><a href="blog-details.html">Suspendisse pretium magna qu nisl egestas porttitor.</a></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow animated fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                    <div className="single-blog">
                        <div className="blog-thumb">
                            <a href="blog-details.html"><img src="assets/img/blog/blog-3.jpg" alt="blog-3" /></a>
                            <div className="tag">
                                <a href="project.html">Dashbord</a>
                            </div>
                        </div>
                        <div className="blog-inner">
                            <div className="author-date">
                                <a href="#">By, Admin</a>
                                <a href="#">22.02.2022</a>
                            </div>
                            <h4><a href="blog-details.html">In a augue sit amet erat Suspel eleifend suscipit issen.</a></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></>
    )
}

export default Landing