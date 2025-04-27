import * as yup from 'yup';

import {consentCheckbox, dateField, nameField, phoneField, timeField} from "@validators/fields";

export const bookingSchema = yup.object({
    name: nameField,
    phone: phoneField,
    date: dateField,
    time: timeField,
    consent: consentCheckbox,
});

// Используем более строгий тип для FormData
export interface BookingFormData {
    name: string;
    phone: string;
    date: string;
    time: string;
    consent: boolean;
}

// export type BookingFormData = yup.InferType<typeof bookingSchema>;