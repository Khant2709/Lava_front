'use client'

import React, {useMemo} from 'react';

import MenuContent from "./menuContent";

import {MenuModel} from "@myTypes/api/menuAPI";
import {useRouter} from "next/navigation";
import {useWindowWidth} from "@hooks/UseWidth";

interface MenuProps {
    menu: MenuModel[],
}

const WrapperMenu: React.FC<MenuProps> = ({menu}) => {
    const router = useRouter();
    const width = useWindowWidth();

    const countSlide = useMemo<number>(() => {
        if (!width) return 1.25;
        if (width > 1100) return 3.25;
        if (width <= 1100 && width > 768) return 2.25;
        return 1.25;
    }, [width])

    const openMenu = (id: number) => {
        router.push(`/menu?id=${id - 1}`)
    }

    return (
        <MenuContent countSlide={countSlide} shortMenu={menu} openMenu={openMenu}/>
    )
};

export default WrapperMenu;