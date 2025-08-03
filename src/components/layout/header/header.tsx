'use client'

import React, {useState} from 'react';
import {usePathname} from "next/navigation"

import MobileMenu from "./parts/mobileMenu/mobileMenu";
import HeaderContainer from "./parts/headerContainer/headerContainer";

import {useWindowWidth} from "@hooks/UseWidth";


const Header: React.FC = () => {
    const width: number | undefined = useWindowWidth();
    const pathname = usePathname();
    const currentPath: string = `/${pathname.split('/')[1]}`;

    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    return (
        <>
            <HeaderContainer
                currentPath={currentPath}
                setShowNavbar={setShowNavbar}
                width={width ?? 0}
            />

            <MobileMenu
                showNavbar={showNavbar}
                setShowNavbar={setShowNavbar}
                currentPath={currentPath}
                closeNavbar={() => setShowNavbar(false)}
            />
        </>
    );
};

export default Header;