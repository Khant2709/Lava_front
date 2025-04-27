import * as yup from 'yup';
import {hasInjection} from '@utils/validateXSS';

const preventInjection = (fieldName: string) =>
    yup
        .string()
        .test('no-injection', `${fieldName} содержит недопустимые символы`, (value) => {
            if (!value) return true;
            return !hasInjection(value);
        });

export const nameField = yup
    .string()
    .trim()
    .required('Имя обязательно')
    .min(2, 'Слишком короткое имя')
    .max(50, 'Слишком длинное имя')
    .matches(/^(?!\s*$).+/, 'Имя не может состоять только из пробелов')
    .concat(preventInjection('Имя'));

export const companyField = yup
    .string()
    .trim()
    .required('Название компании обязательно')
    .min(2, 'Слишком короткое название')
    .max(100, 'Слишком длинное название')
    .concat(preventInjection('Компания'));

export const phoneField = yup
    .string()
    .trim()
    .required('Номер обязателен')
    .matches(/^\+?[0-9\s\-()]{10}$/, 'Некорректный номер телефона')
    .concat(preventInjection('Телефон'));

export const emailField = yup
    .string()
    .trim()
    .required('Почта обязательна')
    .email('Некорректный email')
    .concat(preventInjection('Email'));

export const offerField = yup
    .string()
    .trim()
    .required('Нужно описать ваше предложение')
    .min(10, 'Описание слишком короткое')
    .max(1000, 'Описание слишком длинное')
    .concat(preventInjection('Предложение'));

export const consentCheckbox = yup
    .boolean()
    .oneOf([true], 'Необходимо согласие на обработку данных')
    .required();

/** Выподающие списки */
const validGuestValues = [1, 2, 3, 4, 5, 6];
const validRoomValues = [0, 1, 2, 3, 4, 5, 6, 7];

export const countGuestField = yup
    .number()
    .required('Пожалуйста, выберите количество гостей')
    .oneOf(validGuestValues, 'Некорректное количество гостей');

export const roomField = yup
    .number()
    .required('Пожалуйста, выберите комнату')
    .oneOf(validRoomValues, 'Некорректная комната');

/** Валидация для полей даты и времени */

const getTodayDate = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today;
};

const isWorkTime = (selectedTime: string) => {
    const [hours] = selectedTime.split(':').map(Number);
    const isClose = hours >= 4 && hours < 12;
    return !isClose;
};

const isClosed = (selectedTime: string) => {
    const [hours] = selectedTime.split(':').map(Number);
    return hours !== 3;
};

const validateTime = (selectedTime: string, selectedDate: string) => {
    const date = new Date(selectedDate);
    date.setHours(0, 0, 0, 0);
    const today = getTodayDate();
    if (date.getTime() === today.getTime()) {
        const [hours, minutes] = selectedTime.split(':').map(Number);
        const selectedTimeDate = new Date(); // Переименовали selectedTime на selectedTimeDate
        selectedTimeDate.setHours(hours, minutes, 0, 0);

        const now = new Date();
        return selectedTimeDate > now;
    }
    return true;
};

export const dateField = yup
    .string()
    .required('Выберите дату')
    .test('is-not-past', 'Дата не может быть в прошлом', (value) => {
        if (!value) return false;
        const selectedDate = new Date(value);
        return selectedDate >= getTodayDate();
    });

export const timeField = yup
    .string()
    .required('Выберите время')
    .test('dont-work', 'Заведение работает с 12:00 до 04:00', function (value) {
        return isWorkTime(value!);
    })
    .test('to-be-close', 'Нельзя забронировать через сайт за час и менее до закрытия.', function (value) {
        return isClosed(value!);
    })
    .test('is-not-past-if-today', 'Нельзя выбрать прошедшее время.', function (value) {
        const {date} = this.parent;
        if (!value || !date) return false;
        return validateTime(value, date);
    });