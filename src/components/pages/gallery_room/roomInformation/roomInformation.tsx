'use client'

import React from 'react';
import {StaticImageData} from 'next/image';

import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCreative} from 'swiper/modules';

import SecondaryButton from "@components/ui/buttons/secondaryButton/secondaryButton";

import 'swiper/css';
import 'swiper/css/effect-creative';
import styles from './roomInformation.module.scss';

type RoomId = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface RoomProps {
    roomData: {
        id: RoomId;
        name: string;
        max_people: number;
        description: string;
        comfort: string[];
        conditions: string[];
        images: StaticImageData[];
    } | undefined;
    openModal: (placeId: RoomId) => void;
}

interface InformationProps {
    id: RoomId;
    name: string;
    max_people: number;
    description: string;
    comfort: string[];
    conditions: string[];
    openModal: (placeId: RoomId) => void;
}

const RoomInformation: React.FC<RoomProps> = ({roomData, openModal}) => {
    if (!roomData) return null;

    return (
        <section className={styles.mainContainer}>
            <RoomImages images={roomData.images}/>
            <RoomDescription openModal={openModal} {...roomData}/>
        </section>
    );
};

export default RoomInformation;

const RoomImages = ({images}: { images: StaticImageData[] }) => (
    <Swiper
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
        aria-label="Слайдер фотографий комнаты"
        className={styles.swiper}
    >
        {images.map((image, i) => {
            return <SwiperSlide className={styles.slide} key={`image_${i}`}>
                <div className={styles.image} style={{backgroundImage: `url(${image.src})`}}/>
            </SwiperSlide>

        })}
    </Swiper>
);

const RoomDescription: React.FC<InformationProps> = ({
                                                         id,
                                                         name,
                                                         max_people,
                                                         comfort,
                                                         description,
                                                         conditions,
                                                         openModal
                                                     }) => (
    <article className={styles.containerInfo}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.boxInfo}>
            <p className={styles.label}>Мак. чел.:</p>
            <p className={styles.text}>до {max_people} человек</p>
        </div>
        <div className={styles.boxInfo}>
            <p className={styles.label}>Удобства:</p>
            <div className={styles.comfortBox}>
                {comfort.map((el, i) => {
                    return <p className={styles.comfortItem} key={`comfort_${i}`}>{el}</p>
                })}
            </div>
        </div>
        <div className={styles.boxInfo}>
            <p className={styles.label}>Описание:</p>
            <p className={styles.text}>{description}</p>
        </div>
        <div className={styles.boxInfo}>
            <p className={styles.label}>Условия:</p>
            <ul className={styles.conditionsBox}>
                {conditions.map((el, i) => {
                    return <li key={`condition_${i}`}>{el}</li>
                })}
            </ul>
        </div>
        <SecondaryButton text={'Забронировать'} handleClick={() => openModal(id)}/>
    </article>
);