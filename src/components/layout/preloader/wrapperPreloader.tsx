'use client'

import React from 'react';
import Preloader from "@components/layout/preloader/preloader";
import {usePreloaderStore} from "@stores/usePreloaderStore";

const WrapperPreloader: React.FC = () => {
    const {isLoading} = usePreloaderStore();

    if (!isLoading) return null;

    return (
        <Preloader/>
    );
};

export default WrapperPreloader;