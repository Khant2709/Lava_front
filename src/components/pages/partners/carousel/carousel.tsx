import React from 'react';
import Image from "next/image";

import styles from './carousel.module.scss';
import {PartnersModel} from "@myTypes/api/partnersAPI";
import {getFullPathImage} from "@utils/getFullPath";


interface CarouselProps {
    partners: PartnersModel[]
}

const Carousel: React.FC<CarouselProps> = ({partners}) => {
    return (
        <section className={styles.carousel}>
            {
                partners.map((partner) => {
                    return <div className={styles[`span${partner.id}`]} key={partner.id}>
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