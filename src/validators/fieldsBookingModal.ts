import * as yup from 'yup';

import {
    consentCheckbox,
    dateField,
    nameField,
    phoneField,
    timeField
} from "@validators/fields";

export const bookingModalSchema = yup.object({
    name: nameField,
    phone: phoneField,
    date: dateField,
    time: timeField,
    consent: consentCheckbox,
});

// Используем более строгий тип для FormData
export interface BookingModalFormData {
    name: string;
    phone: string;
    date: string;
    time: string;
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

