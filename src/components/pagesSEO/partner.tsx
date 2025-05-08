import React from 'react';
import Markdown from "react-markdown";

import {transformNameToUrl} from "@utils/nameUrlTransform";
import {getFullPathImage} from "@utils/getFullPath";
import {CurrentPartnerModel} from "@myTypes/api/partnersAPI";

import styles from "./style.module.scss";


interface Props {
    partner: CurrentPartnerModel
}

const SEOContentPartnerPage: React.FC<Props> = ({partner}) => {
    return (
        <div className={styles.srr_only}>
            <h1>Табак {partner.name}</h1>

            <section>
                <div>
                    <Markdown>{partner.description}</Markdown>
                </div>
                <img alt={`логотип табака ${partner.name}`}
                     loading={'lazy'}
                     src={getFullPathImage('d', partner.image_path, partner.logo_image_d)}/>
            </section>

            <section>
                <h2> Вкусы табака {partner.name}</h2>
                {partner.tastes.map((taste) => {
                    return <article key={taste.id}>
                        <h3>{taste.name} - {taste.name_ru}</h3>
                        <p>Описание от компании: {taste.description_company}</p>
                        <p>Описание от нашео заведения: {taste.description_lava}</p>
                        <a href={`/partners/${transformNameToUrl(partner.name)}/${transformNameToUrl(taste.name)}`}>
                            Открыть подробное описание вкуса
                        </a>
                    </article>
                })}
            </section>
        </div>
    );
};

export default SEOContentPartnerPage;