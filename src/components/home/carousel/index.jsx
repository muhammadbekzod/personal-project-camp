import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./styles.css";
import sample from '../../../assets/home/Rectangle.png'
import sampleTesing from '../../../assets/home/Rectangle2.png'
import sampleTesing1 from '../../../assets/home/Rectangle.png'
export default function CarouselPage() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
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
                    <img src={sampleTesing} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sampleTesing1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sampleTesing} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sampleTesing} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sampleTesing} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sampleTesing} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sampleTesing} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={sampleTesing} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
