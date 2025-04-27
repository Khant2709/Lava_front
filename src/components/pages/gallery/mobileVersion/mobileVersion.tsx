import React from 'react';
import {StaticImageData} from "next/image";

import styles from "./mobileVersion.module.scss";

interface GalleryItem {
    id: number;
    img: StaticImageData;
    text: string;
    link: string;
}

interface Props {
    galleryItems: GalleryItem[];
    openGallery: (link: string) => void;
}


const MobileVersion: React.FC<Props> = ({galleryItems, openGallery}) => {
    return (
        <section className={styles.container}>
            {galleryItems.map(el => (
                <div
                    key={el.id} className={styles.card}
                    style={{backgroundImage: `url(${el.img.src})`}}
                    onClick={() => openGallery(el.link)}
                >
                    <div className={styles.card__head}>
                        <p>{el.text}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default MobileVersion;