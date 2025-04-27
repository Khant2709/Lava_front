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
            <Title Tag={'h2'} text={'Для досуга'}/>
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
            <h3 className={styles.title}>{title}</h3>
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