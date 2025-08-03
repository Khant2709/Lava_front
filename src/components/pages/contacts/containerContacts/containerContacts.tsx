import React from 'react';
import {FaMapMarkerAlt, FaPhoneAlt, FaClock} from 'react-icons/fa';
import {formatPhoneNumberWithMask} from "@utils/transformNumber";
import {ADDRESS_COMPANY, PHONE_COMPANY, YA_LINK_COMPANY} from "@constants/envData";

import styles from './containerContacts.module.scss';
import {ContactsData} from "@components/pages/contacts/wrapperContactsPage";
import Link from "next/link";


interface CardProps {
    icon: React.ReactNode;
    title: string;
    text: string;
    typeLink?: string;
    link?: string;
    linkText?: string;
}

const ContainerContacts: React.FC<ContactsData> = ({phone, address, address_link, working_hours}) => {
    const devContactsData = [
        {
            icon: <FaMapMarkerAlt size={24} color='#6764EAFF'/>,
            title: 'Адрес',
            text: address || ADDRESS_COMPANY,
            typeLink: 'map',
            link: address_link || YA_LINK_COMPANY,
            linkText: 'Построить маршрут',
        },
        {
            icon: <FaPhoneAlt size={24} color='#6764EAFF'/>,
            title: 'Телефон',
            text: phone || PHONE_COMPANY,
            typeLink: 'tel',
            link: phone || PHONE_COMPANY,
            linkText: 'Позвонить сейчас',
        },
        {
            icon: <FaClock size={24} color='#6764EAFF'/>,
            title: 'Часы работы',
            text: working_hours || 'Пн-Вс: 12:00 - 04:00',
        },
    ];

    return (
        <>
            <div className={styles.containerText}>
                <p>
                    Наша кальянная <Link href={'/'}>Lava Lounge</Link> находится в Краснодаре, в районе Панорама, по
                    адресу: ул.Восточно-Кругликовская, 34. Мы работаем ежедневно с 12:00 до 04:00, чтобы вы могли
                    отдохнуть в любое удобное время. Забронировать столик или уточнить детали вы можете по телефону
                    +7 (953) 117-66-55.
                </p>

                <p>
                    До нас легко добраться как на автомобиле, так и на общественном транспорте — рядом остановка и
                    удобный выезд на ул. 40 лет Победы.
                </p>

                <p>
                    Мы всегда рады гостям и с удовольствием подскажем, как добраться. Если вы ищете уютную кальянную в
                    Краснодаре с вечерним графиком и удобным расположением — приходите в Lava Lounge!
                </p>
            </div>
            <section className={styles.containerMain}>
                {devContactsData.map((el, i) => {
                    return <CardContact key={i} {...el}/>
                })}
            </section>
        </>

    );
};

export default ContainerContacts;

const CardContact: React.FC<CardProps> = ({icon, title, text, typeLink, link, linkText}) => (
    <article className={styles.card}>
        <div className={styles.wrapperIcon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{typeLink && typeLink === 'tel' ? formatPhoneNumberWithMask(text) : text}</p>
        {typeLink && typeLink === 'map'
            ? <a href={link} target={'_blank'} rel={"noopener"} className={styles.link}>{linkText}</a>
            : <a href={`tel:${link}`} className={styles.link}>{linkText}</a>
        }
    </article>
)