import { Link, useParams } from "react-router-dom"
import { Services } from "../constants"
import { Projects } from "../constants/projects"

const Service =  function(){
    const { slug } = useParams()
    const service = Services.find(item => item.slug === slug)
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-cnt">
                                    <h1>Service</h1>
                                    <span><a href="/">Home</a><i className="bi bi-arrow-right"></i>Service</span>
                                    <div className="breadcrumb-video">
                                        <img src="./../assets/img/breadcrumb-video.jpg" alt="breadcrumb" />
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
            <section class="service-details sec-mar-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="service-details-content">
                                <img src="./../assets/img/blog/blog-thumnail.jpg" alt="service-name" />
                                <h3><i><img src={"./../assets/img/icons/"+service.icon+".png"}  alt={service.name} /></i>{service.name}</h3>
                                <span dangerouslySetInnerHTML={{__html:service.content}}></span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            
                            <div className="sidebar-widget sidebar-tab">
                                <h4>More Services</h4>
                                <ul class="category">
                                    { Services.filter(e => e.slug !== slug).map(serve => {
                                        return (
                                            <li><a href="#">{serve.name}<i class="bi bi-arrow-right"></i></a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="sidebar-tab">
                                <div class="questions-form">
                                    <h5>NEED THIS SERVICE?</h5>
                                    <form action="#" method="post">
                                        <input type="text" name="name" placeholder="Business Name :" />
                                        <input type="email" name="email" placeholder="Email Address :" />
                                        <input type="text" name="number" placeholder="Phone Number :" />
                                        <input type="text" value={service.name} disabled placeholder="Service Required :" />
                                        <input type="hidden" name="service" value={service.slug} />
                                        <input type="submit" value="Request Now" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="project-slider">
                <div className="container">
                    <div className="row g-4 project-items">
                        <h4>Related Case Studies</h4>
                        {Projects.filter(e => e.filter === service.type).map((item, index) => {
                            return (
                                <div class="col-md-6 col-lg-4 single-item" key={index}>
                                    <div class="item-img">
                                        <Link to="#"><img src={"./../assets/img/project/"+ item.thumb} alt="" /></Link>
                                    </div>
                                    <div class="item-inner-cnt">
                                        <span>{item.filter}</span>
                                        <h4>{item.name}</h4>
                                        <div class="view-btn">
                                            <Link to="#">view details</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service