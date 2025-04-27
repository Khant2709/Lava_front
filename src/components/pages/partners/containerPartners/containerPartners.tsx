import React from 'react';
import Image, {StaticImageData} from "next/image";

import styles from "./containerPartners.module.scss";

interface Partner {
    id: number;
    name: string;
    description: string;
    img: StaticImageData;
}

interface CardProps {
    id: number;
    name: string;
    description: string;
    img: StaticImageData;
    openPartner: (name: string) => void;
}

interface PartnersProps {
    text: string;
    partners: Partner[];
    openPartner: (name: string) => void;
}


const ContainerPartners: React.FC<PartnersProps> = ({text, partners, openPartner}) => {
    return (
        <>
            <p className={styles.text}>{text}</p>
            <section className={styles.sectionPartners}>
                {partners.map(partner => {
                    return <CardPartner key={partner.id} {...partner} openPartner={openPartner}/>
                })}
            </section>
        </>
    );
};

export default ContainerPartners;

const CardPartner: React.FC<CardProps> = ({img, name, description, openPartner}) => (
    <div className={styles.cardPartner} onClick={() => openPartner(name)}>
        <div className={styles.boxLogo}>
            <Image src={img} alt={name}/>
        </div>
        <div className={styles.boxInformation}>
            <h3 className={styles.title}>{name}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    </div>
);