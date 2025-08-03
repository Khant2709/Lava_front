import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";

import {AdvantageItemModel, AdvantagesModel} from "@myTypes/api/generalDataTypes";

import styles from './advantages.module.scss';


interface CardAdvantageProps {
    title: string;
    subtitle: string;
    list: AdvantageItemModel[];
}

interface AdvantagesProps {
    advantages: AdvantagesModel[]
}

const Advantages: React.FC<AdvantagesProps> = ({advantages}) => {
    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h2'} text={'Что вас ждёт в Lava Lounge'}/>
            <div className={styles.containerAdvantages}>
                {advantages.map(advantage => {
                    return <CardAdvantage
                        key={advantage.id}
                        title={advantage.title}
                        subtitle={advantage.subtitle}
                        list={advantage.list}
                    />
                })}
            </div>
        </SectionWrapper>
    );
};

export default Advantages;

const CardAdvantage: React.FC<CardAdvantageProps> = ({title, subtitle, list}) => (
    <article className={styles.cardAdvantage}>
        <div className={styles.containerHeaderCard}>
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <ul className={styles.list}>
            {list.map((el) => {
                return <li key={`list_el_${el.id}`}>
                    {el.text}
                </li>
            })}
        </ul>
    </article>
);