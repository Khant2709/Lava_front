'use client'

import {useEffect} from "react";
import {SESSION_ERROR_KEY} from "@constants/envData";

export const useClearSessionError = (page: string) => {
    useEffect(() => {
        sessionStorage.removeItem(`${SESSION_ERROR_KEY}_${page}`);
    }, [page]);
};
