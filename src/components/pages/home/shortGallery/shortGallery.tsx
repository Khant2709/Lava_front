'use client'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination} from 'swiper/modules';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";

import g1 from "@assets/gallary/g1.webp";
import g2 from "@assets/gallary/g2.webp";
import g3 from "@assets/gallary/g3.webp";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import styles from './shortGallery.module.scss';


const testGallery = [g1, g2, g3, g1, g2, g3, g1, g2, g3,];

const ShortGallery: React.FC = () => {
    return (
        <SectionWrapper>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className={styles.swiper}
            >
                {testGallery.map((photo, i) => {
                    return <SwiperSlide className={styles.swiperSlide} key={i}>
                        <div style={{'backgroundImage': `url(${photo.src})`}} className={styles.img}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </SectionWrapper>
    );
};

export default ShortGallery;