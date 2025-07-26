'use client'

import React, {useState, Dispatch, SetStateAction} from 'react';
import Image from 'next/image';

import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import {Swiper as SwiperType} from 'swiper';

import SecondaryButton from "@components/ui/buttons/secondaryButton/secondaryButton";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import styles from './roomInformation.module.scss';

import {ImageItem, roomID, RoomModel} from "@myTypes/api/roomsAPI";
import {getFullPathImage} from "@utils/getFullPath";



interface RoomProps {
    roomData: RoomModel | undefined;
    openModal: (placeId: roomID) => void;
}

interface InformationProps extends RoomModel {
    openModal: (placeId: roomID) => void;
}

const RoomInformation: React.FC<RoomProps> = ({roomData, openModal}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    if (!roomData) return null;

    return (
        <section className={styles.mainContainer}>
            <RoomImages images={roomData.images} thumbsSwiper={thumbsSwiper} setThumbsSwiper={setThumbsSwiper}/>
            <RoomDescription openModal={openModal} {...roomData}/>
        </section>
    );
};

export default RoomInformation;

interface RoomsImagesProps {
    images: ImageItem[] | [];
    thumbsSwiper: SwiperType | null;
    setThumbsSwiper: Dispatch<SetStateAction<SwiperType | null>>;
}

const RoomImages: React.FC<RoomsImagesProps> = ({ images, thumbsSwiper, setThumbsSwiper }) => {
    return (
        <section className={styles.images}>
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                navigation={false}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                aria-label="Слайдер фотографий комнаты"
                className={styles.swiper1}
                onSlideChange={(swiper) => {
                    if (thumbsSwiper && !thumbsSwiper.destroyed) {
                        thumbsSwiper.slideTo(swiper.activeIndex);
                    }
                }}
            >
                {images.map((image, i) => (
                    <SwiperSlide className={styles.slide} key={`image_${i}`}>
                        <Image
                            src={getFullPathImage('d', image.image_path, image.image_name_d)}
                            width={740}
                            height={500}
                            alt={`Изображение комнаты ${i + 1}`}
                            className={styles.imageMain}
                            style={{ objectFit: 'cover' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={15}
                slidesPerView={2.125}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className={styles.swiper2}
            >
                {images.map((image, i) => (
                    <SwiperSlide className={styles.slide} key={`image_2_${i}`}>
                        <Image
                            src={getFullPathImage('m', image.image_path, image.image_name_m)}
                            width={320}
                            height={160}
                            alt={`Миниатюра ${i + 1}`}
                            className={styles.image}
                            style={{ objectFit: 'cover' }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

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