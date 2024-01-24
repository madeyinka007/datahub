import { useParams } from "react-router-dom"
import { Services } from "../constants"
import Projects from "./Projects"

export default function(){
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
                                <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam eu nibh elementum, accumsan ona neque ac, aliquet nunc. In eu ipsum fringilla, accumsan purus vel, pellentesque risus. Vivamus vehicula nlpurus at eros interdum, in dignissim nulla vestibulum. Nunc sit amet finibus felis, ut egestas lacus. Sedanpellentesque quis magna eu vestibulum. Ut sed commodo neque. Morbi erat nisi, vehicula quis faucibus il</p>
                                <p>ut, hendrerit vel tortor. In pharetra lectus luctus ornare sollicitudin. Pellentesque at neque nec justo sokal porttitor egestas nec eget ex.Etiam suscipit neque elit, hendrerit laoreet quam ultrices id. Proin nec tolde lacinia ligula, sed laoreet ex. Sed nisl ligula, euismod vel justo scelerisque,</p>
                                <p>vestibulum ultricies tellus. volv Pellentesque vel turpis vitae urna tincidunt hendrerit at ut est. Sed eget feugiat felis. Integer sed ornare sem, eget porttitor nisi. Nunc erat sapien, porta laoreet gravida ac, </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
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
                            <div className="sidebar-widget sidebar-tab">
                                <h4>Case Studies</h4>
                                <ul class="category">
                                    { Services.map(serve => {
                                        return (
                                            <li><a href="#">{serve.name}<i class="bi bi-arrow-right"></i></a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}