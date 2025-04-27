import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import StarRating from "@components/ui/starRating/starRating";

import styles from './aboutAs.module.scss';


interface MapsRatings {
    name: string;
    rating: number;
    reviewsCount: number;
    link: string;
}

interface AboutProps {
    mapsRating: MapsRatings[]
}

const AboutAs: React.FC<AboutProps> = ({mapsRating}) => {
    return (
        <SectionWrapper>
            <Title Tag={'h2'} text={'Почему нас выбирают'}/>
            <ContainerDescription/>
            <ContainerRatings mapsRating={mapsRating}/>
        </SectionWrapper>
    );
};

export default AboutAs;

const ContainerDescription: React.FC = () => (
    <div className={styles.containerDescription}>
        <p>
            Добро пожаловать в нашу кальянную, где царит уют и расслабляющая атмосфера! У нас семь стильных комнат с
            уникальным дизайном и небольшой зал на три стола. В каждой комнате — сплит-система, большой телевизор, Sony
            PlayStation с играми и настольные игры. В меню — разнообразные чаи, авторские напитки и широкий выбор
            табака, а наши профессиональные мастера обеспечат идеальный кальян для вашего отдыха.
        </p>
        <p>
            Наша кальянная заслужила высокую репутацию, получив звание <strong>&quot;хорошее заведение&quot;</strong> от
            Яндекса
            три года подряд, и
            множество положительных отзывов от гостей. Мы гордимся высокими оценками на различных платформах, ведь это
            лучшая награда за нашу работу. Мы всегда уделяем внимание качеству и стараемся создать место, которое
            запоминается, благодаря тщательно отобранным ингредиентам и обученному персоналу.
        </p>
    </div>
);

const ContainerRatings: React.FC<AboutProps> = ({mapsRating}) => (
    <section className={styles.containerRatings} aria-labelledby="platformRatings">
        {mapsRating.map((el, i) => {
            return <a key={i} href={el.link} target={'_blank'} rel={"noopener"}>
                <article className={styles.cardRating}>
                    <div className={styles.boxRating}>
                        <p>{el.rating}</p>
                        <StarRating value={el.rating}/>
                    </div>
                    <p className={styles.nameMap}>{el.name}</p>
                    <p className={styles.reviews}>{el.reviewsCount} отзывов</p>
                </article>
            </a>
        })}
    </section>
)