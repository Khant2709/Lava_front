import React from 'react';
import Image from "next/image";


import {GalleryModel} from "@myTypes/api/galleryAPI";
import {getFullPathImage} from "@utils/getFullPath";

import styles from './desktopVersion.module.scss';
<<<<<<< HEAD
import Link from "next/link";
=======
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce


interface Props {
    galleryItems: GalleryModel[];
<<<<<<< HEAD
}

const DesktopVersion: React.FC<Props> = ({galleryItems}) => {
    return (
        <section className={styles.container}>
            {galleryItems.map(el => (
                <Link key={el.id} className={styles.card}
                      href={el.slug === 'rooms' ? `/${el.slug}` : `/gallery/${el.slug}`}
                >
                    <Image alt={`изобращение категории ${el.title}`}
                           src={getFullPathImage('d', el.image_path, el.image_preview_name_d)} width={1280}
                           height={854}
                    />
                    <div className={styles.card__head}>
                        <h2>{el.title}</h2>
                    </div>
                </Link>
=======
    openGallery: (link: string) => void;
}

const DesktopVersion: React.FC<Props> = ({galleryItems, openGallery}) => {
    return (
        <section className={styles.container}>
            {galleryItems.map(el => (
                <div key={el.id} className={styles.card} onClick={() => openGallery(el.slug)}>
                    <Image alt={'img'} src={getFullPathImage('d', el.image_path, el.image_preview_name_d)} width={1280}
                           height={854}/>
                    <div className={styles.card__head}>
                        <p>{el.title}</p>
                    </div>
                </div>
>>>>>>> a3df344c0a5a9d92b8abd99c451d39f2408a71ce
            ))}
        </section>
    );
};

export default DesktopVersion;