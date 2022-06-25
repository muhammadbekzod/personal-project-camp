import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";
import sample from "../../../assets/home/carSample.png";
export default function MultiCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sample} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
