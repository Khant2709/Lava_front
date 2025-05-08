import React from 'react';
import styles from "./style.module.scss";
import {TasteFullModel} from "@myTypes/api/tastesAPI";
import {getFullPathImage} from "@utils/getFullPath";


interface Props {
    taste: TasteFullModel
}

const SEOContentTastePage: React.FC<Props> = ({taste}) => {
    return (
        <div className={styles.srr_only}>
            <h1>Вкус {taste.name} ({taste.name_ru}) от бренда {taste.companyName}</h1>
            <img
                src={getFullPathImage('d', taste.image_path, taste.image_name_d)}
                alt={`Изображение вкуса ${taste.name_ru} (${taste.name}) от ${taste.companyName}`}
                style={{display: 'none'}}
            />
            <section>
                <h2>Основные характеристики вкуса {taste.name} ({taste.name_ru})</h2>
                <p>Производитель: {taste.companyName}</p>
                <p>Тип вкуса: {taste.type}</p>
                <p>Крепость: {taste.strength} из 10</p>
                <p>Дымность: {taste.smokiness} из 10</p>
                <p>Жаростойкость: {taste.temp} из 10</p>
                <p>Категории: {taste.categories.join(', ')}</p>
            </section>

            <section>
                <h2>Описание вкуса {taste.name} ({taste.name_ru})</h2>
                <p>Описание от производителя: {taste.description_company}</p>
                <p>Описание от наших мастеров: {taste.description_lava}</p>
            </section>
        </div>
    );
};

export default SEOContentTastePage;