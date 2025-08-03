import React from 'react';
import Image from "next/image";


import {GalleryModel} from "@myTypes/api/galleryAPI";
import {getFullPathImage} from "@utils/getFullPath";

import styles from './desktopVersion.module.scss';
import Link from "next/link";


interface Props {
    galleryItems: GalleryModel[];
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
            ))}
        </section>
    );
};

export default DesktopVersion;