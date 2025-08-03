import React from 'react';
import styles from "@components/pagesSEO/style.module.scss";
import {GeneralDataModel} from "@myTypes/api/generalDataTypes";

interface Props {
    data: GeneralDataModel
}

const SEOContentContactsPage: React.FC<Props> = ({data}) => {
    return (
        <div className={styles.srr_only}>
            <h1>Контакты кальянной Lava Lounge в Краснодаре</h1>
            <p>Мы всегда рады новым гостям и партнерам. Приходите к нам или свяжитесь удобным способом.</p>
            <p>Lava Lounge — уютная кальянная в Краснодаре с атмосферой комфорта. Мы находимся по адресу {data.address}</p>
            <section>
                <section>
                    <h2>Контакты</h2>
                    <address>
                        <p>Телефон: +7{data.phone}</p>
                        <p>Почта: {data.email}</p>
                        <p>Адрес: {data.address}</p>
                    </address>
                    <time dateTime="12:00">
                        <p>Время работы: {data.working_hours}</p>
                    </time>

                    <h3>Написать нам в социальных сетях</h3>
                    <a href={`https://t.me/${data.telegram}`}>
                        Написать в Telegram Lava Lounge
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=7${data.phone}`}>
                        Написать в whatsapp Lava Lounge
                    </a>

                    <h3>Наше расположение на карте</h3>
                    <a href={data.address_link}>
                        Открыть яндекс карты с нашим заведением
                    </a>
                </section>
            </section>
            <p>
                Приглашаем вас на вдохновляющее партнерство с нашей кальянной!
            </p>
            <p>
                Мы предлагаем уникальную возможность сотрудничества, которая принесет пользу обеим сторонам. Наши гости
                наслаждаются атмосферой и качеством обслуживания, что делает нашу кальянную местом притяжения для
                любителей кальяна. Мы открыты к обсуждению идей и готовы создать уникальное партнерство, которое поможет
                привлечь новых клиентов и укрепить вашу репутацию. Давайте вместе создадим волшебное место для отдыха и
                наслаждения кальяном!
            </p>
            <p>
                Свяжитесь с нами для дополнительной информации и деталей сотрудничества.
            </p>
        </div>
    );
};

export default SEOContentContactsPage;