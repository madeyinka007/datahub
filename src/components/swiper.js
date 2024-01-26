import { useRef } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, A11y, Scrollbar, Navigation, Pagination} from 'swiper/modules'
import { Partners, Services, Team, Testimonies } from '../constants'

 export function ServiceCard(){
    const swiperRef = useRef(null)

    return (
        <>
            <div className="swiper services-slider">
                    <div className="swiper-wrapper">
                        <Swiper 
                            modules={[Navigation, A11y, Autoplay, Scrollbar]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper
                            }}
                            className='services-slider'
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            autoplay={{delay:5000}}
                            speed={1000}
                            breakpoints={{
                                320: {slidesPerView:1},
                                576: {slidesPerView:2},
                                992: {slidesPerView:3}
                            }} 
                        >
                        {Services.map((service, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide wow animate" data-wow-delay="200ms" data-wow-duration="1500ms">
                                        <div className="single-service">
                                            <span>0{index + 1}</span>
                                            <div className="icon">
                                                <img src={`assets/img/icons/${service.icon}.png`} alt="service-icon" />
                                            </div>
                                            <h4>{service.name}</h4>
                                            <p>{service.desc}</p>
                                            <div className="read-btn">
                                                <a href="service-details.html">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="swiper-pagination d-md-none d-md-block"></div>
            </div>
            <div className="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}></div>
            <div className="swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}></div>
        </>
    )
}

export function PartnerCard(){
    const swiperRef = useRef(null)
    return (
        <>
            <div className="row align-items-center">
                <div className="col-lg-3">
                    <div className="sec-title white layout2">
                        <span>Satisfied Client</span>
                        <h2>Our Partner</h2>
                        <div className="-partnerslider-navigator">
                            <div className="swiper-button-prev-c" onClick={() => swiperRef.current?.slideNext()}><i className="bi bi-chevron-left"></i></div>
                            <div className="swiper-button-next-c" onClick={() => swiperRef.current?.slidePrev()}><i className="bi bi-chevron-right"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="swiper partner-slider">
                        <div className="swiper-wrapper">
                            <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                onBeforeInit={(pswiper) => {
                                    swiperRef.current = pswiper
                                }}
                                className={"partner-slider"}
                                loop={true}
                                slidesPerView={5}
                                spaceBetween={20}
                                breakpoints={{
                                    320:{slidesPerView:2},
                                    576: {slidesPerView:3},
                                    992: {slidesPerView:4},
                                    1200: {slidesPerView:5}
                                }}
                            >
                            {Partners.map((partner, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="swiper-slide">
                                            <div className="single-partner">
                                                <img src={`${"assets/img/partner/"+partner.image}`} alt={partner.name} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export function TestimonialCard(){
    const swiperRef = useRef(null)
    return (
        <>
            <div className="swiper testimonial-slider">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, A11y, Autoplay]}
                        onBeforeInit={(pswiper) => {
                            swiperRef.current = pswiper
                        }}
                        slidesPerView={2}
                        spaceBetween={30}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{delay:5000}}
                        speed={1000}
                        //className={'swiper-slide-active'}
                        //pagination={{clickable:true}}
                        breakpoints={{
                            320:{slidesPerView:1},
                            576:{slidesPerView:2},
                            992:{slidesPerView:2},
                            1400:{slidesPerView:2},
                            1800:{slidesPerView:2}
                        }}
                    >
                    {Testimonies.map((item, index) => {
                         return (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide swiper-slide-active">
                                    <div className="single-testimonial">
                                        <div className="quote">
                                            <i className="fas fa-quote-right"></i>
                                        </div>
                                        <h5>{item.name}</h5>
                                        <span>{item.role}</span>
                                        {/* <div className="stars">
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                            <a href="#"><i className="fas fa-star"></i></a>
                                        </div> */}
                                        <p>{item.message}</p>
                                        <div className="reviewer">
                                            <img src={`${"assets/img/"+item.image}`} alt={item.name} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                         )
                    })}

                    </Swiper>
                </div>
                <div className="swiper-pagination d-md-none d-md-block"></div>
            </div>
            <div className="swiper-button-next" onClick={() => swiperRef.current?.slideNext()}></div>
            <div className="swiper-button-prev" onClick={() => swiperRef.current?.slidePrev()}></div>
        </>
    )
}

export function TeamCard(){
    return (
        <div className="swiper team-slider">
            <div className="swiper-wrapper">
                <Swiper
                    modules={[Pagination]}
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{clickable:true}}
                    breakpoints={{
                        320:{slidesPerView:1},
                        576:{slidesPerView:2},
                        992:{slidesPerView:3}
                    }}
                >
                    {Team.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="swiper-slide wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="single-team">
                                        <div className="member-img">
                                            <img src={"assets/img/team/"+item.image} alt={item.name} />
                                            <svg width="185" height="299" viewBox="0 0 167 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.25412 0.814453C1.68125 2.62384 0 5.61553 0 8.99991V269H167C167 269 47 269 66.5 112.171C75.5581 39.3209 20.2679 8.22409 4.25412 0.814453Z" fill="#191A1C" />
                                            </svg>            
                                            <ul className="team-social">
                                                <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="team-inner">
                                            <h4>{item.name}</h4>
                                            <span>{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}