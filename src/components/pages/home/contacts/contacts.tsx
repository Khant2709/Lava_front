import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import {WrapperMail, WrapperMap, WrapperPhone} from "@components/ui/contacts/contacts";

import {ADDRESS_COMPANY, EMAIL_COMPANY, PHONE_COMPANY, TG_COMPANY, YA_LINK_COMPANY} from "@constants/envData";

import styles from './contacts.module.scss';

import yaMap from "@assets/yaMap.webp"


interface Props {
    contacts: {
        phone: string;
        telegram: string;
        email: string;
        address: string;
        address_link: string;
        working_hours: string;
    }
}

const Contacts: React.FC<Props> = ({contacts}) => {
    const {phone, telegram, email, address, address_link, working_hours} = contacts;

    return (
        <SectionWrapper>
            <Title Tag={'h2'} text={'Как нас найти'}/>
            <section className={styles.wrapperContacts}>
                <div className={styles.containerContactsData}>
                    <div className={styles.rowContacts}>
                        <label className={styles.label}>
                            Телефон:
                        </label>
                        <WrapperPhone phoneNumber={phone || PHONE_COMPANY}
                                      telegramNumber={telegram || TG_COMPANY}
                                      customStyle={styles.customStyle}
                        />
                    </div>
                    <div className={styles.rowContacts}>
                        <label className={styles.label}>
                            Почта:
                        </label>
                        <WrapperMail email={email || EMAIL_COMPANY} customStyle={styles.customStyle}/>
                    </div>
                    <div className={styles.rowContacts}>
                        <label className={styles.label}>
                            Адрес:
                        </label>
                        <WrapperMap
                            text={address || ADDRESS_COMPANY}
                            link={address_link || YA_LINK_COMPANY}
                            customStyle={styles.customStyle}
                        />
                    </div>
                    <div className={styles.rowContacts}>
                        <label className={styles.label}>
                            Время работы:
                        </label>
                        <p className={styles.text}>
                            {working_hours || 'Ежедневно с 12:00 до 4:00'}
                        </p>
                    </div>
                </div>
                <a href={address_link || YA_LINK_COMPANY} target={'_blank'} rel={"noopener"}>
                    <div className={styles.map} style={{backgroundImage: `url(${yaMap.src})`}}/>
                </a>
            </section>
        </SectionWrapper>
    );
};

export default Contacts;