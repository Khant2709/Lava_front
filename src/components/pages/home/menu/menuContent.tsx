'use client'

import React from 'react';
// import {StaticImageData} from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import bgDefault from '@assets/bgMenu.webp'

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './menu.module.scss';
import {MenuModel} from "@myTypes/api/menuAPI";

interface CardSlideProps {
    title: string;
    short_description: string;
}

interface MenuProps {
    countSlide: number;
    shortMenu: MenuModel[];
}

const MenuContent: React.FC<MenuProps> = ({countSlide, shortMenu}) => {
    return (
        <SectionWrapper>
            <Title Tag={'h2'} text={'Меню'}/>
            <Swiper
                slidesPerView={countSlide}
                spaceBetween={32}
                pagination={{clickable: true}}
                modules={[Pagination]}
                className={styles.swiper}
                aria-label="Меню слайдер"
            >
                {
                    shortMenu.map((el) => {
                        return <SwiperSlide key={el.id} className={styles.swiperSlide}>
                            <CardSlide title={el.title} short_description={el.short_description}/>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </SectionWrapper>
    );
};

export default MenuContent;

const CardSlide: React.FC<CardSlideProps> = ({title, short_description}) => (
    <article className={styles.cardSlide} style={{backgroundImage: `url(${bgDefault.src})`}}>
        <div className={styles.wrapperContentCard}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{short_description}</p>
        </div>
    </article>
)