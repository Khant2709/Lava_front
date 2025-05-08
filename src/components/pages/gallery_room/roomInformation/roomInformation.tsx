'use client'

import React from 'react';
import {StaticImageData} from 'next/image';

import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCreative} from 'swiper/modules';

import SecondaryButton from "@components/ui/buttons/secondaryButton/secondaryButton";

import 'swiper/css';
import 'swiper/css/effect-creative';
import styles from './roomInformation.module.scss';

import g1 from "@assets/gallary/g1.webp";
import g2 from "@assets/gallary/g2.webp";
import g3 from "@assets/gallary/g3.webp";
import {roomID, RoomModel} from "@myTypes/api/roomsAPI";


const testPhoto = [g1, g2, g3, g1, g2, g3]

interface RoomProps {
    roomData: RoomModel | undefined;
    openModal: (placeId: roomID) => void;
}

interface InformationProps extends RoomModel{
    openModal: (placeId: roomID) => void;
}

const RoomInformation: React.FC<RoomProps> = ({roomData, openModal}) => {
    if (!roomData) return null;

    return (
        <section className={styles.mainContainer}>
            <RoomImages images={testPhoto}/>
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
                                                         title,
                                                         max_persons,
                                                         amenities,
                                                         description,
                                                         rules,
                                                         openModal
                                                     }) => (
    <article className={styles.containerInfo}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.boxInfo}>
            <p className={styles.label}>Мак. чел.:</p>
            <p className={styles.text}>до {max_persons} человек</p>
        </div>
        <div className={styles.boxInfo}>
            <p className={styles.label}>Удобства:</p>
            <div className={styles.comfortBox}>
                {amenities.map((el, i) => {
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
                {rules.map((el, i) => {
                    return <li key={`condition_${i}`}>{el}</li>
                })}
            </ul>
        </div>
        <SecondaryButton text={'Забронировать'} handleClick={() => openModal(id)}/>
    </article>
);