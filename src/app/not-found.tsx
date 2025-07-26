'use client'

import React from 'react';
import {useRouter} from "next/navigation";
import {GiMeltingIceCube} from "react-icons/gi";

import SecondaryButton from "@components/ui/buttons/secondaryButton/secondaryButton";

import {usePreloaderStop} from "@hooks/usePreloaderStop";

import styles from "../styles/notFoundPage.module.scss";


const NotFoundPage: React.FC = () => {
    usePreloaderStop();
    const router = useRouter();

    return (
        <div className={styles.containerMain}>
            <div className={styles.container}>
                <div className={styles.containerTitle}>
                    <h1 className={styles.title}>404</h1>
                    <div>
                        <GiMeltingIceCube className={styles.icon}/>
                        <GiMeltingIceCube className={styles.icon}/>
                        <GiMeltingIceCube className={styles.icon}/>
                    </div>
                </div>
                <h2 className={styles.text}>Угольки этой страницы потухли или не найдены.</h2>
                <SecondaryButton text={'На главную'} handleClick={() => router.push('/')}/>
            </div>
        </div>
    );
};

export default NotFoundPage;