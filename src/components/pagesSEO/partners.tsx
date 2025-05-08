import React from 'react';

import {transformNameToUrl} from "@utils/nameUrlTransform";
import {getFullPathImage} from "@utils/getFullPath";

import {PartnersModel} from "@myTypes/api/partnersAPI";

import styles from "./style.module.scss";


interface Props {
    partners: PartnersModel[];
}

const SEOContentPartnersPage: React.FC<Props> = ({partners}) => {
    return (
        <div className={styles.srr_only}>
            <h1>Партнёры кальянной Lava Lounge — табачные бренды, с которыми мы работаем</h1>
            <p>
                Мы сотрудничаем с ведущими табачными брендами, чтобы предложить нашим гостям лучшие вкусы и высокое
                качество.
                В карточках вы найдёте краткое описание и сможете перейти к полному списку вкусов каждого бренда.
                Откройте для себя новые ароматы и любимые сочетания вместе с Lava Lounge.
            </p>
            <section>
                <h2>Наши партнеры</h2>
                {partners.map((partner) => {
                    return <article key={partner.id}>
                        <h3>{partner.name}</h3>
                        <img alt={partner.name} src={getFullPathImage('m', partner.image_path, partner.logo_image_m)}/>
                        <p>{partner.description}</p>
                        <a href={`/partners/${transformNameToUrl(partner.name)}`}>
                            Подробнее о бренде
                        </a>
                    </article>
                })}
            </section>
        </div>
    );
};

export default SEOContentPartnersPage;