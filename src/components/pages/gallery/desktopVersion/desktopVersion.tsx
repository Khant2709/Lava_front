import React from 'react';
import Image from "next/image";


import {GalleryModel} from "@myTypes/api/galleryAPI";
import {getFullPathImage} from "@utils/getFullPath";

import styles from './desktopVersion.module.scss';


interface Props {
    galleryItems: GalleryModel[];
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
            ))}
        </section>
    );
};

export default DesktopVersion;