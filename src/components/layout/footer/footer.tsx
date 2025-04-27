'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";


import logo from '@assets/logo.png';
import logoName from '@assets/logoNameFooter.png';

import styles from './footer.module.scss'
import {navbar} from "@constants/navbar";
import {FaMapMarkerAlt, FaPhoneAlt, FaClock, FaEnvelope} from "react-icons/fa";
import {ADDRESS_COMPANY, EMAIL_COMPANY, PHONE_COMPANY, TG_COMPANY, YA_LINK_COMPANY} from "@constants/envData";
import {WrapperMail, WrapperMap, WrapperPhone} from "@components/ui/contacts/contacts";

const Footer: React.FC = () => {
    const pathname = usePathname();
    const currentPath: string = `/${pathname.split('/')[1]}`;


    return (
        <footer className={styles.footer}>
            <div className={styles.firstColumn}>
                <div className={styles.boxLogo}>
                    <Image src={logo} alt={'logo'} className={styles.logo}/>
                    <Image src={logoName} alt={'logoName'} className={styles.logoName}/>
                </div>
                <div className={styles.boxNavbar}>
                    {navbar.map(el => {
                        const isActive = currentPath === el.link;
                        return <Link
                            key={el.id}
                            href={el.link}
                            className={`${isActive ? styles.activeLink : ''}`}
                        >
                            {el.name}
                        </Link>
                    })}
                </div>
            </div>
            <div className={styles.secondColumn}>
                <h3>Контакты</h3>
                <div className={styles.boxContact}>
                    <div className={styles.boxSubtitle}>
                        <FaMapMarkerAlt size={16} color='#6764EAFF'/>
                        <p>Адрес:</p>
                    </div>
                    <WrapperMap text={ADDRESS_COMPANY} link={YA_LINK_COMPANY} customStyle={styles.linkContacts}/>
                </div>
                <div className={styles.boxContact}>
                    <div className={styles.boxSubtitle}>
                        <FaPhoneAlt size={16} color='#6764EAFF'/>
                        <p>Телефон:</p>
                    </div>
                    <WrapperPhone phoneNumber={PHONE_COMPANY} telegramNumber={TG_COMPANY}
                                  customStyle={styles.linkContacts}/>
                </div>
                <div className={styles.boxContact}>
                    <div className={styles.boxSubtitle}>
                        <FaEnvelope size={16} color='#6764EAFF'/>
                        <p>Почта:</p>
                    </div>
                    <WrapperMail email={EMAIL_COMPANY} customStyle={styles.linkContacts}/>
                </div>
                <div className={styles.boxContact}>
                    <div className={styles.boxSubtitle}>
                        <FaClock size={16} color='#6764EAFF'/>
                        <p>Чысы работы:</p>
                    </div>
                    <p className={styles.linkContacts}>Пн - Вс: 12:00 - 04:00</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;