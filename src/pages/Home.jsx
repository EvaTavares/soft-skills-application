import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slide_image_1 from "../assets/images/eva-avatar.png";
import slide_image_2 from "../assets/images/jonas-avatar.png";
import slide_image_3 from "../assets/images/img_3.jpg";
import slide_image_4 from "../assets/images/marsel-avatar.png";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1 className="heading">Atividade - Feedback</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
        speed={1000} // Adicione isto
        freeMode={true} // Adicione isto
        freeModeMomentum={true} // Adicione isto
        slideToClickedSlide={true} // Adicione isto
      >
        {/* Eva */}
        <SwiperSlide>
          <div className="slide_img">
            <img src={slide_image_1} alt="slide_image" />
          </div>

          <div className="redes">
            <button className="linkedin">
              <Link
                to="https://www.linkedin.com/in/evatavares/"
                target="_blank"
              >
                Linkedin
              </Link>
            </button>

            <button className="soft-skills">
              <Link to={"/evaPage"} target="_self">
                Soft Skills
              </Link>
            </button>
            <button className="github">
              <Link to="https://github.com/EvaTavares" target="_blank">
                GitHub
              </Link>
            </button>
          </div>
        </SwiperSlide>
        {/* Jonas */}
        <SwiperSlide>
          <div className="slide_img">
            <img src={slide_image_2} alt="slide_image" />
          </div>
          <div className="redes">
            <button className="linkedin">
              <a
                href="https://www.linkedin.com/in/jonas-ag-silva/"
                target="_blank"
              >
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <Link to="/jonasPage" target="_self">
                Soft Skills
              </Link>
            </button>
            <button className="github">
              <a href="https://github.com/jonas-amilton" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        {/* Roberto */}
        <SwiperSlide>
          <div className="slide_img">
            <img src={slide_image_3} alt="slide_image" />
          </div>
          <div className="redes">
            <button className="linkedin">
              <a
                href="https://www.linkedin.com/in/roberto-carvalho-aa8143249/"
                target="_blank"
              >
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <Link to="/robertoPage" target="_self">
                Soft Skills
              </Link>
            </button>
            <button className="github">
              <a href="https://github.com/Roberto1501" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>
        {/* Marsel */}
        <SwiperSlide>
          <div className="slide_img">
            <img src={slide_image_4} alt="slide_image" />
          </div>
          <div className="redes">
            <button className="linkedin">
              <a
                href="https://www.linkedin.com/in/marseljr-dev/"
                target="_blank"
              >
                Linkedin
              </a>
            </button>
            <button className="soft-skills">
              <Link to="/marselPage" target="_self">
                Soft Skills
              </Link>
            </button>
            <button className="github">
              <a href="https://github.com/Marseljrdev" target="_blank">
                GitHub
              </a>
            </button>
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Home;
