import React from 'react';

import styles from './descriptionTaste.module.scss';

interface Props {
    descriptionCompany: string;
    descriptionLava: string;
}

const DescriptionTaste: React.FC<Props> = ({descriptionCompany, descriptionLava}) => {
    return (
        <section className={styles.container}>
            <h3 className={styles.subtitle}>Описание от <span>производителя</span>:</h3>
            <p className={styles.text}>
                {descriptionCompany}
            </p>
            <h3 className={styles.subtitle}>Описание от <span>наших мастеров</span>:</h3>
            <p className={styles.text}>
                {descriptionLava}
            </p>
            <h3 className={styles.subtitle}>Советы по <span>работе</span>:</h3>
            <ul className={styles.list}>
                <li>
                    Кури сам по себе, если хочешь мягкий, ненавязчивый и сладкий вкус — отлично идёт в
                    качестве &quot;чего-то
                    лёгкого&quot;.
                </li>
                <li>
                    Не перегревай, чтобы не потерялась сливочная нежность — лучше средняя жара и плавный старт.
                </li>
                <li>
                    Подходит на первую чашу дня — лёгкий, не душит, хорошо раскрывается с утра или на чилл-вечер.
                </li>
                <li>
                    Отлично держит вкус — можно курить долго, не скатывается в мыльность или горечь.
                </li>
            </ul>
            <h3 className={styles.subtitle}>Идеи для <span>миксов</span>:</h3>
            <ul className={styles.list}>
                <li>
                    Almond Icecream + Вишня <span>(Десерт с вишенкой: мягкое мороженое + лёгкая кислинка.)</span>
                </li>
                <li>
                    Almond Icecream + Кокос <span>(Что-то вроде &quot;рафаэлки&quot; или тропического десерта.)</span>
                </li>
                <li>
                    Almond Icecream + Мята / Холодок <span>(Освежающий сливочный вкус, как настоящее мороженое из морозилки.)</span>
                </li>
                <li>
                    Almond Icecream + Табачная
                    база <span>(Для тех, кто любит &quot;вкусно, но с характером&quot;.)</span>
                </li>
            </ul>
        </section>
    );
};

export default DescriptionTaste;