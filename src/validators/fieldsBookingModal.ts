import * as yup from 'yup';

import {
    consentCheckbox,
    countGuestField,
    dateField,
    nameField,
    phoneField,
    roomField,
    timeField
} from "@validators/fields";

export const bookingModalSchema = yup.object({
    name: nameField,
    phone: phoneField,
    date: dateField,
    time: timeField,
    countGuest: countGuestField,
    room: roomField,
    consent: consentCheckbox,
});

// Используем более строгий тип для FormData
export interface BookingModalFormData {
    name: string;
    phone: string;
    date: string;
    time: string;
    countGuest: number;
    room: number;
    consent: boolean;
}

export const callModalSchema = yup.object({
    name: nameField,
    phone: phoneField,
    consent: consentCheckbox,
});

// Используем более строгий тип для FormData
export interface CallModalFormData {
    name: string;
    phone: string;
    consent: boolean;
}

