'use client'

import React from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import MenuSlider from "@components/pages/menu/menuSlider/menuSlider";

import {usePreloaderStop} from "@hooks/usePreloaderStop";
import {useClearSessionError} from "@hooks/useClearSessionError";

import {MenuFullModel} from "@myTypes/api/menuAPI";

import styles from './wrapperMenu.module.scss'

interface Props {
    menu: MenuFullModel[];
}

const WrapperMenu: React.FC<Props> = ({menu}) => {
    useClearSessionError('menu');
    usePreloaderStop();

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Меню заведения'}/>
            <p className={styles.text}>
                Добро пожаловать в место, где вкус встречается с настроением. Мы собрали меню, которое идеально
                сочетается с атмосферой вечера — ароматные кальяны, душевные чаи, авторские лимонады, прохладные напитки
                и лёгкие десерты. Здесь каждый найдёт то, что подойдёт именно под его вайб — будь то тёплая беседа,
                расслабленный вечер или шумная компания. Выбирай, пробуй, наслаждайся — остальное мы уже подготовили.
            </p>
            <MenuSlider menu={menu}/>
        </SectionWrapper>
    );
};

export default WrapperMenu;