'use client'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Parallax, Pagination, Navigation} from 'swiper/modules';

import MainButton from "@components/ui/buttons/mainButton/mainButton";

import {PromotionsModel} from "@myTypes/api/generalDataTypes";

import {useBookingModalStore} from "../../../../stores/bookingModalStore";

import bgImage from '@assets/bgSliderMain.webp';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './bannerSlider.module.scss';

interface BannerSliderProps {
    slides: PromotionsModel[];
}

interface SlideContentProps {
    title: string;
    subtitle: string;
    description: string;
    openModal: () => void;
}

const BannerSlider: React.FC<BannerSliderProps> = ({slides}) => {
    const {openModal} = useBookingModalStore();
    return (
        <Swiper
            className={styles.swiper}
            speed={600}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
        >
            <div
                slot="container-start"
                className={styles.parallaxBg}
                style={{'backgroundImage': `url(${bgImage.src})`}}
                data-swiper-parallax="-23%"
            />
            {slides.map((slide) => {
                return <SwiperSlide key={slide.id} className={styles.swiperSlide}>
                    <SlideContent
                        {...slide}
                        openModal={() => openModal()}
                    />
                </SwiperSlide>
            })}
        </Swiper>
    );
};

export default BannerSlider;

const SlideContent: React.FC<SlideContentProps> = ({title, subtitle, description, openModal}) => (
    <>
        <div className={styles.textContainer}>
            <p className={styles.title} data-swiper-parallax="-300">
                {title}
            </p>
            <p className={styles.subtitle} data-swiper-parallax="-200">
                {subtitle}
            </p>
            <p className={styles.text} data-swiper-parallax="-200">
                {description}
            </p>
        </div>
        <MainButton text={'Забронировать'} disabled={false} handleClick={openModal}/>
    </>
);