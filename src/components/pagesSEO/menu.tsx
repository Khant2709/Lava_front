import React from 'react';
import {MenuFullModel} from "@myTypes/api/menuAPI";
import styles from "@components/pagesSEO/style.module.scss";

interface Props {
    menu: MenuFullModel[]
}

const SEOContentMenuPage: React.FC<Props> = ({menu}) => {
    return (
        <div className={styles.srr_only}>
            <h1>Меню кальянной Lava Lounge в Краснодаре</h1>
            {menu.map((el) => {
                return <section key={el.title}>
                    <h2>{el.title}</h2>
                    <p>Краткое описание: {el.short_description}</p>
                    {el.products.map((product) => {
                        return <article key={product.name} itemScope itemType="https://schema.org/MenuItem">
                            <h3 itemProp="name">{product.name}</h3>
                            <p itemProp="description">{product.description}</p>
                            <p>
                                Цена: <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
                                <span itemProp="price">{product.price}</span> ₽
                                </span>
                            </p>
                        </article>
                    })}
                </section>
            })}
        </div>
    );
};

export default SEOContentMenuPage;