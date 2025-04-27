import React from 'react';


import styles from './desktopVersion.module.scss';
import Image, {StaticImageData} from "next/image";

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

const DesktopVersion: React.FC<Props> = ({galleryItems, openGallery}) => {
    return (
        <section className={styles.container}>
            {galleryItems.map(el => (
                <div key={el.id} className={styles.card} onClick={() => openGallery(el.link)}>
                    <Image alt={'img'} src={el.img}/>
                    <div className={styles.card__head}>
                        <p>{el.text}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default DesktopVersion;