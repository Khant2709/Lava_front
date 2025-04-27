import React from 'react';
import Image from "next/image";

import {navbar} from "@constants/navbar";

import logo from "@assets/logoName.png";
import burger from "@assets/burger.png";

import styles from "./headerContainer.module.scss";


interface HeaderProps {
    width: number;
    handleNavigation: (link: string) => void;
    currentPath: string;
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavigationProps {
    handleNavigation: (link: string) => void;
    currentPath: string;
}

const HeaderContainer: React.FC<HeaderProps> = ({width, handleNavigation, currentPath, setShowNavbar}) => {
    return (
        <div className={styles.wrapperHeader}>
            <div className={styles.containerHeader}>
                <Image alt="logo" src={logo} className={styles.logo} onClick={() => handleNavigation('/')}/>

                {width > 768
                    ? <NavigationDesktop handleNavigation={handleNavigation} currentPath={currentPath}/>
                    :
                    <Image alt="burger" src={burger} className={styles.burger} onClick={() => setShowNavbar(true)}/>
                }
            </div>
        </div>
    );
};

export default HeaderContainer;

const NavigationDesktop: React.FC<NavigationProps> = ({currentPath, handleNavigation}) => (
    <div className={styles.containerNavigation}>
        {navbar.map((page) => {
            const isActive = page.link === currentPath;
            return (
                <p
                    key={page.id}
                    onClick={() => handleNavigation(page.link)}
                    className={isActive ? styles.activePage : styles.defaultPage}
                >
                    {page.name.toUpperCase()}
                </p>
            );
        })}
    </div>
);