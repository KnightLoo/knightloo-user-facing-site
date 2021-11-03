import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';

export default function Carousel(){
    return(
      <section id="gallery"
      className="relative">
        <div className="container items-center mt-20 flex-col">
          
          <h2 className="heading-text text-5xl  text-center lg:text-left mb-10">
            Gallery
          </h2>
          
          
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                centeredSlides: true,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
                spaceBetween: 1,
                centeredSlides: true,
                centerInsufficientSlides: true,
              },
              1025: {
                slidesPerView: 3,
                spaceBetween: 1,
                centeredSlides: true,
                centerInsufficientSlides: true,
              },
            }}
          modules={[Navigation, Pagination]}
          centeredSlides={true}
          loop={true}
          parallax={true}
          onSwiper={(swiper) => console.log(swiper)}
          navigation
          pagination={{clickable: true}}
          >
          
          <SwiperSlide>
          
          <img className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/x.png"/>
          
          </SwiperSlide>
          <SwiperSlide>
           
          <img className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/x.png"/>
          
          </SwiperSlide>
          <SwiperSlide>
           
          <img className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/x.png"/>
          
          </SwiperSlide>
          <SwiperSlide>
           
            <img className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/x.png"/>
           
           </SwiperSlide>
          
        </Swiper>
       
      </div>
    </section>
    );

}