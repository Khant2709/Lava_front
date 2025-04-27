import React from 'react';

import styles from './contentArticles.module.scss';
import Link from "next/link";
import {ArticleModel} from "@myTypes/api/articlesAPI";
import {formatDateRU} from "@utils/transformDate";

const TYPE_CATEGORY = {
    'news': 'новинки',
    'tips': 'советы',
    'events': 'события'
}

interface ArticlesProps {
    articles: ArticleModel[];
}

const ContentArticles: React.FC<ArticlesProps> = ({articles}) => {
    return (
        <section className={styles.containerArticles}>
            {articles.map((article) => {
                return <CardArticle key={article.id} {...article}/>
            })}
        </section>
    );
};

export default ContentArticles;


const CardArticle: React.FC<ArticleModel> = ({
                                                 id,
                                                 title,
                                                 category,
                                                 modified_at,
                                                 short_description,
                                                 time_to_read,
                                             }) => (
    <article className={styles.cardArticle}>
        <div className={styles.wrapperBox}>
            <div className={styles.headerBox}>
                <p className={`${styles.category} ${styles[`category_${category}`]}`}>{TYPE_CATEGORY[category]}</p>
                <p className={styles.date}>{formatDateRU(modified_at)}</p>
            </div>
            <h3 className={styles.title}>
                {title}
            </h3>
            <p className={styles.description}>
                {short_description}
            </p>
        </div>

        <div className={styles.footerBox}>
            <p className={styles.timeRead}>Читать {time_to_read} мин</p>
            <Link className={styles.link} href={`/articles/${id}`}>Подробнее →</Link>
        </div>
    </article>
)