'use client'

import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from 'swiper/modules';
import {MenuModel} from "@myTypes/api/menuAPI";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './menu.module.scss';
import Link from "next/link";
import {API_URL_IMAGES} from "@constants/envData";

interface CardSlideProps {
    id: number;
    title: string;
    short_description: string;
    link: string;
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
                pagination={{clickable: false}}
                grabCursor={true}
                modules={[Pagination]}
                className={styles.swiper}
                aria-label="Меню слайдер"
            >
                {
                    shortMenu.map((el) => {
                        return <SwiperSlide key={el.id} className={styles.swiperSlide}>
                            <CardSlide id={el.id}
                                       title={el.title}
                                       short_description={el.short_description}
                                       link={`${API_URL_IMAGES}${el.image_path}mobile/${el.image_preview_name_m}`}
                            />
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </SectionWrapper>
    );
};

export default MenuContent;

const CardSlide: React.FC<CardSlideProps> = ({id, title, short_description, link}) => (
    <Link href={`/menu?id=${id - 1}`}>
        <article className={styles.cardSlide} style={{backgroundImage: `url(${link})`}}>
            <div className={styles.wrapperContentCard}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{short_description}</p>
            </div>
        </article>
    </Link>
)