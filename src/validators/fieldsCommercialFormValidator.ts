import * as yup from 'yup';
import {nameField, companyField, phoneField, emailField, offerField, consentCheckbox} from './fields';

export const commercialFormSchema = yup.object({
    name: nameField,
    company: companyField,
    phone: phoneField,
    email: emailField,
    offer: offerField,
    consent: consentCheckbox
});

export type CommercialFormData = yup.InferType<typeof commercialFormSchema>;