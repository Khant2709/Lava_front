export const MODE: string = process.env.NEXT_PUBLIC_MODE!;

export const EMAIL_COMPANY: string = process.env.NEXT_PUBLIC_EMAIL!;
export const PHONE_COMPANY: string = process.env.NEXT_PUBLIC_PHONE!;
export const TG_COMPANY: string = process.env.NEXT_PUBLIC_TG!;

export const ADDRESS_COMPANY: string = process.env.NEXT_PUBLIC_ADDRESS!;
export const YA_LINK_COMPANY: string = process.env.NEXT_PUBLIC_YA_LINK!;

export const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;
export const API_URL_IMAGES: string = process.env.NEXT_PUBLIC_API_URL_IMAGES!;

export const SESSION_ERROR_KEY: string = process.env.NEXT_PUBLIC_SESSION_ERROR_KEY!;

export const MAX_ATTEMPTS_RELOAD = 3
export const TIME_CASH = {
    "60": {
        PAGE: 60 * 60,
        API: 60 * 60 * 1000,
    },
    "30": {
        PAGE: 30 * 60,
        API: 30 * 60 * 1000,
    },
    "15": {
        PAGE: 15 * 60,
        API: 15 * 60 * 1000,
    },
    "5": {
        PAGE: 5 * 60,
        API: 5 * 60 * 1000,
    }
};

export const FOLDER_D = 'desktop';
export const FOLDER_M = 'mobile';