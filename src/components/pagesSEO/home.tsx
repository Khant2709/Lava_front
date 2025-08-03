import React from 'react';
import styles from './style.module.scss';
import {AdvantagesModel, ContactsModel, PromotionsModel} from "@myTypes/api/generalDataTypes";
import {MenuModel} from "@myTypes/api/menuAPI";

interface Props {
    promotions: PromotionsModel[];
    advantages: AdvantagesModel[];
    menu: MenuModel[];
    mapsRating: {
        name: string;
        rating: number;
        reviewsCount: number;
        link: string;
    }[]
    contacts: ContactsModel
}

const SEOContentHomePage: React.FC<Props> = ({promotions, advantages, menu, mapsRating, contacts}) => {
    return (
        <div className={styles.srr_only}>
            <h1>Кальянная Lava Lounge в Краснодаре – атмосферный отдых и дымные кальяны</h1>

            <section>
                <h2>Наши акции и новинки</h2>
                {promotions.map((promotion) => {
                    return <article key={promotion.id}>
                        <h3>{promotion.title}</h3>
                        <p>{promotion.subtitle}</p>
                        <p>{promotion.description}</p>
                        <p>Забронировать</p>
                    </article>
                })}
            </section>

            <section>
                <h2>Для досуга</h2>
                {advantages.map((advantage) => {
                    return <article key={advantage.id}>
                        <p><strong>{advantage.title}</strong> {advantage.subtitle}</p>
                        <ul>
                            {advantage.list.map((el) => {
                                return <li key={`element_${el.id}`}>{el.text}</li>
                            })}
                        </ul>
                    </article>
                })}
            </section>

            <section>
                <h2>Меню заведения</h2>
                {menu.map((el) => {
                    return <article key={el.title}>
                        <h3>
                            <a href={'/menu'} title={`Посмотреть меню категории ${el.title}`}>{el.title}</a>
                        </h3>
                        <p>{el.short_description}</p>
                    </article>
                })}
            </section>

            <section>
                <h2>Почему нас выбирают</h2>
                <p>
                    Добро пожаловать в нашу кальянную, где царит уют и расслабляющая атмосфера! У нас семь стильных
                    комнат с уникальным дизайном и небольшой зал на три стола. В каждой комнате — сплит-система, большой
                    телевизор, Sony PlayStation с играми и настольные игры. В меню — разнообразные чаи, авторские
                    напитки и широкий выбор табака, а наши профессиональные мастера обеспечат идеальный кальян для
                    вашего отдыха.
                </p>
                <p>
                    Наша кальянная заслужила высокую репутацию, получив звание &quot;хорошее заведение&quot; от Яндекса
                    три года
                    подряд, и множество положительных отзывов от гостей. Мы гордимся высокими оценками на различных
                    платформах, ведь это лучшая награда за нашу работу. Мы всегда уделяем внимание качеству и стараемся
                    создать место, которое запоминается, благодаря тщательно отобранным ингредиентам и обученному
                    персоналу.
                </p>

                <h3>У нас хорошие отзывы</h3>
                {mapsRating.map((rating) => {
                    return <article key={rating.name}>
                        <h4>
                            <a href={rating.link} title={`Ссылка на ${rating.name}`}>
                                {rating.name}
                            </a>
                        </h4>
                        <p>Рейтинг: {rating.rating}</p>
                        <p>Колличество отзывов: {rating.reviewsCount}</p>
                    </article>
                })}
            </section>

            <section>
                <h2>Контакты</h2>
                <p>Телефон: +7{contacts.phone}</p>
                <a href={`https://t.me/${contacts.telegram}`}>
                    Написать в Telegram Lava Lounge
                </a>
                <a href={`https://api.whatsapp.com/send?phone=7${contacts.phone}`}>
                    Написать в whatsapp Lava Lounge
                </a>
                <p>Почта: {contacts.email}</p>
                <p>Адрес: {contacts.address}</p>
                <a href={contacts.address_link}>
                    Открыть яндекс карты с нашим заведением
                </a>
                <p>Время работы: {contacts.working_hours}</p>
            </section>
        </div>
    );
};

export default SEOContentHomePage;