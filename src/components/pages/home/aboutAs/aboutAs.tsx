import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import StarRating from "@components/ui/starRating/starRating";

import styles from './aboutAs.module.scss';
import Link from "next/link";


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
            Lava Lounge — это кальянная в Краснодаре с уютной атмосферой, современным интерьером и высоким уровнем
            сервиса. У нас <Link href={'/rooms'}>7 стильных комнат</Link> с индивидуальным дизайном, сплит-системой,
            большим телевизором и Sony PlayStation. Также доступен малый зал на 3 стола для компании.
        </p>
        <p>
            В <Link href={'/menu'}>меню</Link> представлены классические и авторские чаи, домашние лимонады, напитки и
            более <Link href={'/partners'}>200 вкусов табака</Link>. Наши мастера готовят кальяны с особым вниманием к
            качеству, чтобы каждый гость получил идеальный вкус и отдых.
        </p>
        <p>
            Мы гордимся высокой репутацией: 3 года подряд получаем отметку <strong>«Хорошее заведение»</strong> от
            Яндекс.Карт
            и имеем более 400 положительных отзывов на разных платформах. Это подтверждение нашей миссии — создавать
            комфортное
            место, куда хочется возвращаться.
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