import React from 'react';

import {META_DATA} from "../../metadata/constants";
import {ArticleModel} from "@myTypes/api/articlesAPI";

import styles from "./style.module.scss";


interface Props {
    articles: ArticleModel[];
}

const SEOContentArticlesPage: React.FC<Props> = ({articles}) => {
    return (
        <div className={styles.srr_only}>
            <h1>Статьи о кальянах, табаках и культуре курения — Lava Lounge Краснодар</h1>
            <p>
                В этом разделе вы найдёте свежие публикации от команды Lava Lounge — полезные советы, обзоры табаков,
                рекомендации по уходу за кальяном и наши мысли о кальянной культуре. Мы регулярно публикуем материалы о трендах,
                новинках и мероприятиях, связанных с миром кальянов.
            </p>

            {articles.map((article) => {
                return <article key={article.id}>
                    <h2>{article.title}</h2>
                    <p>Краткое описание: {article.short_description}</p>
                    <p>Примерное время чтения в минутах {article.time_to_read}</p>
                    <a href={`${META_DATA.url}/articles/${article.id}`}>Читать статью полностью</a>
                </article>
            })}
        </div>
    );
};

export default SEOContentArticlesPage;