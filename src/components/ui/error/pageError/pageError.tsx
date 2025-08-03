'use client'

import React, {useState, useEffect} from 'react';
import {PiSmileyMeltingFill, PiSmileyXEyesFill} from "react-icons/pi";

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import SecondaryButton from "@components/ui/buttons/secondaryButton/secondaryButton";

import {usePreloaderStop} from "@hooks/usePreloaderStop";

import {MAX_ATTEMPTS_RELOAD, SESSION_ERROR_KEY} from "@constants/envData";

import styles from './pageError.module.scss';


interface Props {
    page: string;
}

interface ErrorContentProps {
    attempts: number;
    handleReload: () => void;
}

const PageError: React.FC<Props> = ({page}) => {
    usePreloaderStop();
    const [attempts, setAttempts] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    // Загружаем количество попыток из sessionStorage при монтировании
    useEffect(() => {
        const storedAttempts: string | null = sessionStorage.getItem(`${SESSION_ERROR_KEY}_${page}`);
        if (storedAttempts) {
            setAttempts(Number(storedAttempts));
            if (attempts >= MAX_ATTEMPTS_RELOAD) {
                // Позже добавить логику для отправки уведомления на бек
            }
        }
        setIsLoading(false);
    }, [attempts, page]);

    const handleReload = () => {
        if (attempts < 3) {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            sessionStorage.setItem(`${SESSION_ERROR_KEY}_${page}`, newAttempts.toString());
            location.reload()
        }
    }

    if (isLoading) return null;

    return (
        <SectionWrapper needMarginTop={true}>
            <div className={styles.container}>
                {attempts < 3
                    ? <ErrorContent attempts={attempts} handleReload={handleReload}/>
                    : <CriticalError/>
                }
            </div>
        </SectionWrapper>
    );
};

export default PageError;

const ErrorContent: React.FC<ErrorContentProps> = ({attempts, handleReload}) => (
    <>
        <PiSmileyMeltingFill className={styles.icon}/>
        <h2 className={styles.title}>Ошибка загрузки...</h2>
        <p className={styles.text}>
            Угольки данных не разгорелись. Давайте попробуем разжечь снова.
        </p>
        <p className={styles.info}>(Попытка {attempts} из {MAX_ATTEMPTS_RELOAD})</p>
        <SecondaryButton text={'Обновить'} handleClick={handleReload}/>
    </>
);

const CriticalError: React.FC = () => (
    <>
        <PiSmileyXEyesFill className={styles.icon}/>
        <h2 className={styles.title}>Серьезная ошибка</h2>
        <p className={styles.text}>
            Похоже, проблема глубже, чем мы думали. Мы уже отправили уведомление нашей команде для
            диагностики. Пожалуйста, попробуйте позже.
        </p>
    </>
)