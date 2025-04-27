'use client'

import React, {useMemo} from 'react';

import MenuContent from "./menuContent";

import {MenuModel} from "@myTypes/api/menuAPI";

interface MenuProps {
    menu: MenuModel[],
    width: number;
}

const WrapperMenu: React.FC<MenuProps> = ({menu, width}) => {
    const countSlide = useMemo<number>(() => {
        if (!width) return 1;
        if (width > 1100) return 3;
        if (width <= 1100 && width > 768) return 2;
        return 1;
    }, [width])

    if (!width) return null;

    return (
        <MenuContent countSlide={countSlide} shortMenu={menu}/>
    )
};

export default WrapperMenu;