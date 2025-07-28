import React from 'react';
import Image from "next/image";
import Link from "next/link";

import {navbar} from "@constants/navbar";

import logo from "@assets/logoName.png";
import burger from "@assets/burger.png";

import styles from "./headerContainer.module.scss";


interface HeaderProps {
    width: number;
    currentPath: string;
    setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavigationProps {
    currentPath: string;
}

const HeaderContainer: React.FC<HeaderProps> = ({width, currentPath, setShowNavbar}) => {
    return (
        <div className={styles.wrapperHeader}>
            <div className={styles.containerHeader}>
                <Link href={'/'}>
                    <Image alt={'Логотип кальянной Lava Lounge'} src={logo} className={styles.logo}/>
                </Link>
                {width && width > 900
                    ? <NavigationDesktop currentPath={currentPath}/>
                    :
                    <Image alt={'Открыть меню'} src={burger} className={styles.burger}
                           onClick={() => setShowNavbar(true)}/>
                }
            </div>
        </div>
    );
};

export default HeaderContainer;

const NavigationDesktop: React.FC<NavigationProps> = ({currentPath}) => (
    <div className={styles.containerNavigation}>
        {navbar.map((page) => {
            const isActive = page.link === currentPath;
            return (
                <Link key={page.id}
                      href={page.link}
                      className={isActive ? styles.activePage : styles.defaultPage}
                >
                    {page.name.toUpperCase()}
                </Link>
            );
        })}
    </div>
);