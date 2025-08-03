import React from 'react';

import {GalleryModel} from "@myTypes/api/galleryAPI";
import {getFullPathImage} from "@utils/getFullPath";

import styles from "./mobileVersion.module.scss";
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce


interface Props {
    galleryItems: GalleryModel[];
<<<<<<< HEAD
}

const MobileVersion: React.FC<Props> = ({galleryItems}) => {
    return (
        <section className={styles.container}>
            {galleryItems.map(el => (
                <Link href={el.slug === 'rooms' ? `/${el.slug}` : `/gallery/${el.slug}`}
                    key={el.id} className={styles.card}
                    style={{backgroundImage: `url(${getFullPathImage('m', el.image_path, el.image_preview_name_m)})`}}
=======
    openGallery: (link: string) => void;
}

const MobileVersion: React.FC<Props> = ({galleryItems, openGallery}) => {
    return (
        <section className={styles.container}>
            {galleryItems.map(el => (
                <div
                    key={el.id} className={styles.card}
                    style={{backgroundImage: `url(${getFullPathImage('m', el.image_path, el.image_preview_name_m)})`}}
                    onClick={() => openGallery(el.slug)}
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce
                >
                    <div className={styles.card__head}>
                        <p>{el.title}</p>
                    </div>
<<<<<<< HEAD
                </Link>
=======
                </div>
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce
            ))}
        </section>
    );
};

export default MobileVersion;