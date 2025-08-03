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
            grabCursor={true}
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
            <SwiperSlide>
                <article className={styles.swiperSlide}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.title} data-swiper-parallax="-300">
                            Кальянная Lava Lounge в Краснодаре
                        </h1>
                        <h2 className={styles.subtitle} data-swiper-parallax="-200">
                            Уютная атмосфера, авторские кальяны и вип комнаты
                        </h2>
                        <p className={styles.text} data-swiper-parallax="-200">
                            Добро пожаловать в Lava Lounge — лучшее место в Краснодаре для расслабления и отдыха. Бронируйте столик онлайн и наслаждайтесь комфортом, музыкой и вкусными кальянами.
                        </p>
                    </div>
                    <MainButton text={'Забронировать'} disabled={false} handleClick={openModal}/>
                </article>
            </SwiperSlide>

            {slides.map((slide) => {
                return <SwiperSlide key={slide.id}>
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
    <article className={styles.swiperSlide}>
        <div className={styles.textContainer}>
            <h2 className={styles.title} data-swiper-parallax="-300">
                {title}
            </h2>
            <h3 className={styles.subtitle} data-swiper-parallax="-200">
                {subtitle}
            </h3>
            <p className={styles.text} data-swiper-parallax="-200">
                {description}
            </p>
        </div>
        <MainButton text={'Забронировать'} disabled={false} handleClick={openModal}/>
    </article>
);