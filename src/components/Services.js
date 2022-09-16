import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Services = () => {
    return ( 
        <section className="services" id='services'>
            <header className="section-header">
                <h5 className='section-title'>SERVICES</h5>
                <h1>What Can I Do For You?</h1>
                <p className="intro">Below are some of the services I am happy to perform for you. Please feel free to browse my services and contact me.</p>
            </header>
            <main className="services-container">
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                          
                          slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                          
                          slidesPerView: 2,
                        },
                        // when window width is >= 1024px
                        1024: {
                            
                            slidesPerView: 3,
                        }
                      }}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={100}
                    slidesPerView={1}
                    
                    pagination={{clickable: true}}
                >
                    <SwiperSlide>

                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="service-content">
                                <h3>Web Development</h3>
                                <p>Build websites from scratch, with new technologies. Ensure their accessibility and responsiveness. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className="service-content">
                                <h3>Design to Code</h3>
                                <p>Translate figma and adobeXd files into truly functional websites. You have full freedom to design your website.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                            <div className="service-content">
                                <h3>Responsive Websites</h3>
                                <p>Your site works perfectly on the desktop version, but everything breaks on the mobile version? I'll make sure it's responsive and everything will be in the right pixel.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-item">
                            <div className="service-icon">
                                <i className="fas fa-bug"></i>
                            </div>
                            <div className="service-content">
                                <h3>Debugging</h3>
                                <p>You have tedious bugs in your code, which make your HTML5, CSS3, JS code non-functional, don't worry I can solve them for you. </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </main>
        </section>
    );
}
 
export default Services;