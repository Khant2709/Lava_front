import React from 'react';
import {FaMapMarkerAlt, FaPhoneAlt, FaClock} from 'react-icons/fa';
import {formatPhoneNumberWithMask} from "@utils/transformNumber";
import {ADDRESS_COMPANY, PHONE_COMPANY, YA_LINK_COMPANY} from "@constants/envData";

import styles from './containerContacts.module.scss';
import {ContactsData} from "@components/pages/contacts/wrapperContactsPage";


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
            <p className={styles.title}>
                Мы всегда рады новым гостям и партнерам. Приходите к нам или свяжитесь удобным
                способом.
            </p>
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