import React from 'react';
import Image from "next/image";

import {WrapperMap, WrapperPhone} from "@components/ui/contacts/contacts";

import close from "@assets/close.png";
import {navbar} from "@constants/navbar";

import {ADDRESS_COMPANY, PHONE_COMPANY, TG_COMPANY, YA_LINK_COMPANY} from "@constants/envData";

import styles from "./mobileMenu.module.scss";

interface MobileMenuProps {
    showNavbar: boolean;
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
    currentPath: string;
    handleNavigation: (link: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({showNavbar, setShowNavbar, currentPath, handleNavigation}) => {
    return (
        <div className={`${styles.mobileMenu} ${showNavbar ? styles.open : ''}`}>
            <div className={styles.mobileMenuContent}>
                <Image
                    alt="close"
                    src={close}
                    className={styles.closeIcon}
                    onClick={() => setShowNavbar(false)}
                />

                <div className={styles.mobileLinks}>
                    {navbar.map((page) => {
                        const isActive = page.link === currentPath;
                        return (
                            <p key={page.id}
                               onClick={() => handleNavigation(page.link)}
                               className={isActive ? styles.activeMobilePage : ''}>
                                {page.name}
                            </p>
                        )
                    })}
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contactsContainer}>
                        <p className={styles.contactsTitle}>Номер</p>
                        <WrapperPhone phoneNumber={PHONE_COMPANY} telegramNumber={TG_COMPANY}/>
                    </div>
                    <div className={styles.contactsContainer}>
                        <p className={styles.contactsTitle}>Адрес</p>
                        <WrapperMap text={ADDRESS_COMPANY} link={YA_LINK_COMPANY}/>
                    </div>
                    <div className={styles.contactsContainer}>
                        <p className={styles.contactsTitle}>Часы работы</p>
                        <p className={styles.contactsText}>С 12:00 до 04:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenu;