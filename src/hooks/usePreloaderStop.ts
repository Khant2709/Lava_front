'use client'

import {useEffect} from "react";
import {usePreloaderStore} from "@stores/usePreloaderStore";


export const usePreloaderStop = () => {
    const {setLoading} = usePreloaderStore();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 100);

        return () => clearTimeout(timeout);
    }, [setLoading]);
};