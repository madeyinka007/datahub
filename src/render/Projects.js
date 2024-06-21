import { ProjectCard } from "../components/cards";

export default function(){
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-cnt">
                                    <h1>Case Studies</h1>
                                    <span><a href="/">Home</a><i className="bi bi-arrow-right"></i>Case Studies</span>
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
        </>
    )
}