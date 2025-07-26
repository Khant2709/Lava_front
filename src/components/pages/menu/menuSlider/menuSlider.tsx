'use client'

import React, {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCreative} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';

import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

import {useWindowWidth} from "@hooks/UseWidth";

import {MenuFullModel, MenuItemModel} from "@myTypes/api/menuAPI";

import defaultBG from "@assets/menu/t1.jpg"

import 'swiper/css';
import 'swiper/css/effect-creative';
import styles from './menuSlider.module.scss';


interface CardProps {
    title: string;
    note: string;
    isDesktop: boolean;
    products: MenuItemModel[];
}

interface MenuProps {
    menu: MenuFullModel[];
    initialSlideIndex?: number;
}

const MenuSlider: React.FC<MenuProps> = ({menu, initialSlideIndex = 0}) => {
    const width = useWindowWidth();
    const swiperRef = useRef<SwiperType | null>(null);

    if (!width) return null;

    return (
        <div className={styles.wrapperSlider}>
            <div className={styles.navigation}>
                <button onClick={() => swiperRef.current?.slidePrev()} className={styles.buttonNav}>
                    <FaAngleLeft className={styles.iconNav}/>
                </button>
                <button onClick={() => swiperRef.current?.slideNext()} className={styles.buttonNav}>
                    <FaAngleRight className={styles.iconNav}/>
                </button>
            </div>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                initialSlide={initialSlideIndex}
                autoHeight={true}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className={styles.swiper}
            >
                {menu.map((el) => {
                    return <SwiperSlide key={el.id} className={styles.slide}>
                        <CardMenu isDesktop={width > 768} title={el.title} products={el.products} note={el.note}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};

export default MenuSlider;

const CardMenu: React.FC<CardProps> = ({isDesktop, title, products, note}) => (
    <div className={styles.cardMenu}>
        {isDesktop && <div className={styles.imageMenu} style={{backgroundImage: `url(${defaultBG.src})`}}/>}

        <div className={styles.descriptionMenu} style={!isDesktop ? {backgroundImage: `url(${defaultBG.src})`} : {}}>
            <div className={styles.wrapperDescription}>
                <p className={styles.title}>{title.toUpperCase()}</p>

                <div className={styles.containerProducts}>
                    {products.map((product) => {
                        return <div className={styles.boxProduct} key={product.id}>
                            <div className={styles.headerProduct}>
                                <p className={styles.name}>{product.name}</p>
                                <p className={styles.price}>{product.price}р</p>
                            </div>
                            <p className={styles.descriptionProduct}>{product.description}</p>
                        </div>
                    })}
                </div>

                {note && <p className={styles.notes}>{note}</p>}
            </div>
        </div>

    </div>
)