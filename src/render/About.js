import { PartnerCard, TeamCard } from "../components/swiper";

export default function(){
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-cnt">
                                    <h1>About Us</h1>
                                    <span><a href="/">Home</a><i className="bi bi-arrow-right"></i>About Us</span>
                                    <div className="breadcrumb-video">
                                        <img src="assets/img/breadcrumb-video.jpg" alt="breadcrumb" />
                                        <div className="video-inner">
                                            <a className="video-popup" href="https://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="why-choose sec-mar wow animate fadeIn" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-choose-left">
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
                        <div className="col-lg-6">
                            <div className="why-choose-right">
                                <div className="sec-title layout2">
                                    <span>Get To Know Us</span>
                                    <h3>All your digital needs under one roof.</h3>
                                </div>
                                <p style={{paddingBottom:'20px'}}>Our digital solutions support businesses in the realignment of, or new investment in technology, business processes and models to become more relevant to consumers and drive long-term growth.</p>
                                <p>From designing your overall digital strategy, to Digital Communication, to implementing game-changers like Cloud, AI, Mobility and Digital Engineering, we guide you through the jungle of digital possibilities with a structured and result-oriented approach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area sec-mar-bottom wow animate slideInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 or-2">
                            <div className="sec-title layout2">
                                <span>Why Choose Us</span>
                                <h3>Strategic. Holistic. Impactful.</h3>
                            </div>
                            <div className="about-left">
                                <p style={{paddingBottom:'20px'}}>Today’s technologies are reshaping the world, creating both enormous growth opportunities and essential threats at the same time.</p>
                               
                                <p style={{paddingBottom:'20px'}}>Utilizing the very best of technology, creativity and data, we help organizations evolve quickly to seize the opportunities while effectively mitigating the risks that this reality presents.</p>
                                
                                <p>Our experts can guide and support you in the integration of digital technology into all areas of your business to achieve greater productivity,enhanced security and, unassailable competitive edge.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 or-1">
                            <div className="why-choose-left">
                                <div className="choose-banner1">
                                    <img src="assets/img/why-1.jpg" alt="" />
                                </div>
                                <div className="choose-banner2">
                                <img src="assets/img/why-2.jpg" alt="" />
                                <img src="assets/img/why-3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-partner">
                <div className="container">
                    <PartnerCard />
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
        </>
    )
}