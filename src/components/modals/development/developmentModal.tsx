'use client'

import React from 'react';
import { GiMagicBroom } from "react-icons/gi";
import {MODE} from "@constants/envData";

import styles from './developmentModal.module.scss';

const DevelopmentModal: React.FC = () => {
    if (MODE !== 'dev') return null;

    return (
        <section className={styles.window}>
            <div className={styles.container}>
                <GiMagicBroom className={styles.icon}/>
                <h2 className={styles.title}>Технические работы</h2>
                <p className={styles.text}>Наши мастера настраивают кальянный сервер/сайт. Пожалуйста, попробуйте позже.</p>
                <p className={styles.subtext}>Приносим извинения за неудобства</p>
            </div>
        </section>
    );
};

export default DevelopmentModal;