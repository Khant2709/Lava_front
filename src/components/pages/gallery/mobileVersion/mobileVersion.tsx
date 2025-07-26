import React from 'react';

import {GalleryModel} from "@myTypes/api/galleryAPI";
import {getFullPathImage} from "@utils/getFullPath";

import styles from "./mobileVersion.module.scss";


interface Props {
    galleryItems: GalleryModel[];
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
                >
                    <div className={styles.card__head}>
                        <p>{el.title}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MobileVersion;