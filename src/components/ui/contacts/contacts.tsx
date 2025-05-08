import React from 'react';
import {FaWhatsapp, FaTelegram} from 'react-icons/fa';

import {formatPhoneNumberWithMask} from "@utils/transformNumber";


import styles from "./contacts.module.scss";

interface PhoneProps {
    phoneNumber: string;
    telegramNumber: string;
    customStyle?: string;
}

interface EmailProps {
    email: string;
    customStyle?: string;

}

interface MapProps {
    text: string;
    link: string;
    customStyle?: string;

}

export const WrapperPhone: React.FC<PhoneProps> = ({phoneNumber, telegramNumber, customStyle}) => (
    <div className={`${styles.wrapperLink} ${customStyle ?? ''}`}>
        <a href={`tel:${phoneNumber}`}>
            {formatPhoneNumberWithMask(phoneNumber)}
        </a>
        <a href={`https://api.whatsapp.com/send?phone=7${phoneNumber}`} style={{display: 'flex'}}>
            <FaWhatsapp size={26} color='#00ce1b'/>
        </a>
        <a href={`https://t.me/${telegramNumber}`} style={{display: 'flex'}}>
            <FaTelegram size={24} color='#48b2ff'/>
        </a>
    </div>
);

export const WrapperMail: React.FC<EmailProps> = ({email, customStyle}) => (
    <div className={`${styles.wrapperLink} ${customStyle ?? ''}`}>
        <a href={`mailto:${email}`}
           target={'_blank'}
           rel={'noopener noreferrer'}>
            {email}
        </a>
    </div>
);

export const WrapperMap: React.FC<MapProps> = ({text, link, customStyle}) => (
    <div className={`${styles.wrapperLink} ${customStyle ?? ''}`}>
        <a href={link} target={'_blank'} rel={"noopener"}>
            {text}
        </a>
    </div>
)