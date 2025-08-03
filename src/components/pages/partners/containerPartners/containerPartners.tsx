import React from 'react';
import Image from "next/image";

import styles from "./containerPartners.module.scss";
import {PartnersModel} from "@myTypes/api/partnersAPI";
import {getFullPathImage} from "@utils/getFullPath";

interface CardProps extends PartnersModel {
    openPartner: (name: string) => void;
}

interface PartnersProps {
    partners: PartnersModel[];
    openPartner: (name: string) => void;
}


const ContainerPartners: React.FC<PartnersProps> = ({partners, openPartner}) => {
    return (
        <>
            <p className={styles.text}>
                В нашем меню собраны лучшие табачные бренды, каждый из которых предлагает оригинальные вкусы
                и характер. Чтобы вам было проще сориентироваться, мы подготовили удобные карточки — просто выберите
                интересующий бренд,
                и вы перейдёте на страницу с полным списком его вкусов. Исследуйте ароматы, открывайте новинки и
                находите свои любимые сочетания. Выбор — за вами, удовольствие — с нами.
            </p>
            <section className={styles.sectionPartners}>
                {partners.map(partner => {
                    return <CardPartner key={partner.id} {...partner} openPartner={openPartner}/>
                })}
            </section>
        </>
    );
};

export default ContainerPartners;

const CardPartner: React.FC<CardProps> = ({name, short_description, image_path, logo_image_d, openPartner}) => (
    <div className={styles.cardPartner} onClick={() => openPartner(name)}>
        <div className={styles.boxLogo}>
            <Image src={getFullPathImage('d', image_path, logo_image_d)} width={300}
                   height={300} alt={name}/>
        </div>
        <div className={styles.boxInformation}>
            <h3 className={styles.title}>{name.toUpperCase()}</h3>
            <p className={styles.description}>{short_description}</p>
        </div>
    </div>
);