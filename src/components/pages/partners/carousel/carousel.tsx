import React from 'react';
import Image from "next/image";

import {PartnersModel} from "@myTypes/api/partnersAPI";
import {getFullPathImage} from "@utils/getFullPath";

import styles from './carousel.module.scss';


interface CarouselProps {
    partners: PartnersModel[]
}

const Carousel: React.FC<CarouselProps> = ({partners}) => {
    return (
        <section className={styles.carousel}>
            {
                partners.map((partner, i) => {
                    return <div className={styles[`span${i}`]} key={partner.id}>
                        <Image src={getFullPathImage('d', partner.image_path, partner.logo_image_d)}
                               width={300}
                               height={300}
                               alt={partner.name_ru}/>
                    </div>
                })
            }
        </section>
    );
};

export default Carousel;