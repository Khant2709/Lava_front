'use client'

import React, {useState} from 'react';
import {useRouter, usePathname} from "next/navigation"

import MobileMenu from "./parts/mobileMenu/mobileMenu";
import HeaderContainer from "./parts/headerContainer/headerContainer";

import {useWindowWidth} from "@hooks/UseWidth";


const Header: React.FC = () => {
    const router = useRouter();
    const width: number | undefined = useWindowWidth();
    const pathname = usePathname();
    const currentPath: string = `/${pathname.split('/')[1]}`;

    const [showNavbar, setShowNavbar] = useState<boolean>(false);

    const handleNavigation = (link: string) => {
        if (showNavbar) {
            setShowNavbar(false);
        }
        router.push(link);
    };

    if (!width) return null;

    return (
        <>
            <HeaderContainer
                handleNavigation={handleNavigation}
                currentPath={currentPath}
                setShowNavbar={setShowNavbar}
                width={width}
            />

            <MobileMenu
                showNavbar={showNavbar}
                setShowNavbar={setShowNavbar}
                currentPath={currentPath}
                handleNavigation={handleNavigation}
            />
        </>
    );
};

export default Header;