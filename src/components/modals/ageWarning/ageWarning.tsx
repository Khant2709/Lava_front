'use client';

import React, {useEffect, useState} from 'react';
import {FaAddressCard} from 'react-icons/fa';
import {BiLogOut} from 'react-icons/bi';

import styles from './ageWarning.module.scss';

const AgeWarningModal: React.FC = () => {
    const [isAgeConfirmed, setIsAgeConfirmed] = useState<boolean>(true);

    useEffect(() => {
        const age = sessionStorage.getItem('age') as string | null;
        if (age === '18+') {
            setIsAgeConfirmed(true);
        } else {
            setIsAgeConfirmed(false)
        }
    }, []);

    const handleConfirmAge = () => {
        sessionStorage.setItem('age', '18+');
        setIsAgeConfirmed(true);
    };

    const handleRejectAge = () => {
        sessionStorage.setItem('age', 'under');
        alert('Доступ запрещён. Возвращайтесь, когда вам исполнится 18 :)');
        window.location.href = 'https://www.fixiki.ru/series';
    };

    if (isAgeConfirmed) return null;

    return (
        <section
            className={styles.window}
            role="dialog"
            aria-modal="true"
            aria-labelledby="age-check-title"
            aria-describedby="age-check-description"
        >
            <div className={styles.containerModal}>
                <p className={styles.age}>18+</p>
                <h2 id="age-check-title" className={styles.title}>
                    Возрастная проверка
                </h2>
                <p id="age-check-description" className={styles.text}>
                    Данный сайт содержит материалы, предназначенные только для
                    лиц старше 18 лет. Подтвердите свой возраст для
                    продолжения.
                </p>
                <div className={styles.containerButtons}>
                    <button
                        className={styles.successButton}
                        onClick={handleConfirmAge}
                        aria-label="Подтвердить, что вам есть 18 лет"
                    >
                        <FaAddressCard size={24}/>
                        Мне есть 18 лет
                    </button>
                    <button
                        className={styles.outButton}
                        onClick={handleRejectAge}
                        aria-label="Сообщить, что вам меньше 18 лет"
                    >
                        <BiLogOut size={24}/>
                        Мне меньше 18 лет
                    </button>
                </div>
                <p className={styles.subtext}>
                    Курение вредит вашему здоровью
                </p>
            </div>
        </section>
    );
};

export default AgeWarningModal;
