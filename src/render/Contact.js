import { useReducer } from "react"
import { ContactReducer, contact_initial } from "../reducer"
import { ACTION_TYPES } from "../types"
import { postData } from "../services"

export default function Contact(){
    const [state, dispatch] = useReducer(ContactReducer, contact_initial)
    const handleChange = (e) => {
        dispatch({
            type:ACTION_TYPES.CONTACT_FIELD,
            payload:{name: e.target.name, value: e.target.value}
        })
    }

    const submit = (e) => {
        e.preventDefault()
        dispatch({type:ACTION_TYPES.CONTACT_START})
        postData('/contacts', state.data)
        .then(data => {
            dispatch({type:ACTION_TYPES.CONTACT_SUCCESS})
        })
        .catch(err => {
            dispatch({type:ACTION_TYPES.CONTACT_ERROR})
        })
    }
    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcrumb-wrapper">
                                <div className="breadcrumb-cnt">
                                    <h1>Contact Us</h1>
                                    <span><a href="/">Home</a><i className="bi bi-arrow-right"></i>Contact Us</span>
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
            <section className="contact-area sec-mar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5">
                            <div className="contact-left">
                                <div className="sec-title layout2">
                                    <span>Get in touch</span>
                                    <h2>Contact us if you have more questions.</h2>
                                </div>
                                <ul className="social-follow">
                                    <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                                <div className="informations">
                                    <div className="single-info">
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="info">
                                            <h3>Location</h3>
                                            <p>168/170, Avenue 01, Old York Drive Rich Mirpur DOHS, Bangladesh</p>
                                        </div>
                                    </div>
                                    <div className="single-info">
                                        <div className="icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="info">
                                            <h3>Phone</h3>
                                            <a href="tel:05661111985">+880 566 1111 985</a>
                                            <a href="tel:06571111576">+880 657 1111 576</a>
                                        </div>
                                    </div>
                                    <div className="single-info">
                                        <div className="icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <div className="info">
                                            <h3>Email</h3>
                                            <a href="tell:info@example.com"><span className="__cf_email__" data-cfemail="523b3c343d12372a333f223e377c313d3f">[email&#160;protected]</span></a>
                                            <a href="tell:info@support.com"><span className="__cf_email__" data-cfemail="0861666e67487b7d7878677a7c266b6765">[email&#160;protected]</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7">
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title="contact-map" src="https://maps.google.com/maps?q=dhaka%20bangladesh&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="getin-touch">
                        <div className="row">
                            <div className="col-md-6 col-lg-7">
                                <div className="contact-form wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <h3>Have Any Questions</h3>
                                    <form onSubmit={submit} method="post">
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text" name="name" placeholder="Enter your name" value={state.data.name} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" name="email" placeholder="Enter your email" value={state.data.email} onChange={handleChange} required />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" name="subject" placeholder="Subject" value={state.data.subject} onChange={handleChange} required />
                                            </div>
                                            <div className="col-12">
                                                <textarea name="msg" cols="30" rows="10" placeholder="Your message" value={state.data.msg} onChange={handleChange} required></textarea>
                                                <input type="submit" value={state.loading ? "Sending" :"Send Message" } />
                                            </div>
                                        </div>
                                        {state.message !== '' && <div className={state.error ? 'error' : 'success'}>{state.message}</div>}
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-5 wow animate fadeInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="call-banner">
                                    <img src="assets/img/call-center.png" alt="contact" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}