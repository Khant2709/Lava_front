import React from 'react';
import {FaWhatsapp, FaTelegram, FaInstagram} from 'react-icons/fa';
// import {FaWhatsapp, FaTelegram, FaInstagram, FaVk} from 'react-icons/fa';

import {PHONE_COMPANY, TG_COMPANY} from "@constants/envData";
import {SocialData} from "@components/pages/contacts/wrapperContactsPage";

import styles from './socialIcons.module.scss';

const SocialIcons: React.FC<SocialData> = ({phone, telegram, instagram}) => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}><span>Соцсети</span> Lava Lounge</h2>
            <div className={styles.containerSotials}>
                <a href={`https://api.whatsapp.com/send?phone=${phone || PHONE_COMPANY}`}>
                    <FaWhatsapp size={24}/>
                </a>
                <a href={`https://t.me/${telegram || TG_COMPANY}`}>
                    <FaTelegram size={24}/>
                </a>
                <a href={`https://instagram.com/${instagram}`} target={'_blank'} rel={"noopener"}>
                    <FaInstagram size={24}/>
                </a>
                {/*<a href={`https://vk.com/${vk}`} target={'_blank'} rel={"noopener"}>*/}
                {/*    <FaVk size={24}/>*/}
                {/*</a>*/}
            </div>
        </section>
    );
};

export default SocialIcons;