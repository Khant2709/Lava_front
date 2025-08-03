import React from 'react';

import {GalleryModel} from "@myTypes/api/galleryAPI";
import {getFullPathImage} from "@utils/getFullPath";

import styles from "./mobileVersion.module.scss";
import Link from "next/link";


interface Props {
    galleryItems: GalleryModel[];
}

const MobileVersion: React.FC<Props> = ({galleryItems}) => {
    return (
        <section className={styles.container}>
            {galleryItems.map(el => (
                <Link href={el.slug === 'rooms' ? `/${el.slug}` : `/gallery/${el.slug}`}
                    key={el.id} className={styles.card}
                    style={{backgroundImage: `url(${getFullPathImage('m', el.image_path, el.image_preview_name_m)})`}}
                >
                    <div className={styles.card__head}>
                        <p>{el.title}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default MobileVersion;