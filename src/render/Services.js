import { Link } from "react-router-dom";
import { ServiceCard } from "../components/cards";
const Services =  function(){
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-cnt">
                                    <h1>Services</h1>
                                    <span><Link to="/">Home</Link><i className="bi bi-arrow-right"></i>Services</span>
                                    <div className="breadcrumb-video">
                                        <img src="assets/img/breadcrumb-video.jpg" alt="breadcrumb" />
                                        <div className="video-inner">
                                            <Link className="video-popup" href="https://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fas fa-play"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-grid sec-mar">
                <div className="container">
                    <div className="title-wrap">
                        <div className="sec-title">
                            <span>Services We Offer</span>
                            <h2>Our Services</h2>
                            <p>Our comprehensive range of services is designed to meet the diverse needs of businesses in this digital era.</p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <ServiceCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services