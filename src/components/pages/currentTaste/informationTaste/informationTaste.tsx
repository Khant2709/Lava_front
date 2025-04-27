import React from 'react';
import Image from "next/image";

import FireRating from "@components/ui/starRating/fireRating";

import test from "@assets/tabacco/almondicecream.jpg";

import styles from "./informationTaste.module.scss";

interface Props {
    brand: string;
    name: string;
    name_ru: string;
    type: 'Микс' | 'Моно';
    strength: number;
    smokiness: number;
    temp: number;
    category: string[]
}

const InformationTaste: React.FC<Props> = ({brand, name, name_ru, type, strength, smokiness, temp, category}) => {
    return (
        <section className={styles.containerMain}>
            <article className={styles.card}>
                <p className={styles.brand}>{brand}</p>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.name_ru}>{name_ru}</p>
                <div className={styles.box}>
                    <p className={styles.subtitle}>Тип:</p>
                    <p className={styles.valueBox}>{type}</p>
                </div>
                <div className={styles.box}>
                    <p className={styles.subtitle}>Крепость:</p>
                    <FireRating value={strength} size={24}/>
                </div>
                <div className={styles.box}>
                    <p className={styles.subtitle}>Дымность:</p>
                    <FireRating value={smokiness} size={24}/>
                </div>
                <div className={styles.box}>
                    <p className={styles.subtitle}>Жаростойкость:</p>
                    <FireRating value={temp} size={24}/>
                </div>
                <div className={styles.box}>
                    <p className={styles.subtitle}>Категория:</p>
                    <div className={styles.boxCategory}>
                        {category.map((el, i) => {
                            return <p key={i}>{el}</p>
                        })}
                    </div>
                </div>
            </article>
            <Image src={test} alt={'image taste'} className={styles.image}/>
        </section>
    );
};

export default InformationTaste;