'use client';

import React, {useEffect} from 'react';
import {useForm, Controller, Resolver} from 'react-hook-form';
import {IMaskInput} from 'react-imask';
import {yupResolver} from '@hookform/resolvers/yup';

import {bookingSchema, BookingFormData} from '@validators/bookingValidator';

import styles from '../stylesForm.module.scss';
import FormButton from "@components/ui/buttons/formButton/formButton";
import {BookingModalFormData} from "@validators/fieldsBookingModal";

const now = new Date();
const defaultDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

const defaultTime = () => {
    const hour = Number(now.getHours());

    if (hour === 23) return '23:59';
    if (hour >= 3 && hour <= 11) return '12:00';

    return `${String(hour + 1).padStart(2, '0')}:00`
}

interface Props {
    isDisableBtn: boolean;
    bookingOrder: (data: BookingModalFormData) => void;
}

const FormBooking: React.FC<Props> = ({isDisableBtn, bookingOrder}) => {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
        watch,
        trigger,
        reset,
    } = useForm<BookingFormData>({
        resolver: yupResolver(bookingSchema) as Resolver<BookingFormData>,
        mode: 'onChange',
        defaultValues: {
            name: '',
            phone: '',
            date: defaultDate,
            time: defaultTime(),
            consent: false,
        },
    });

    const selectedDate = watch('date');

    useEffect(() => {
        if (selectedDate) {
            trigger('time');
        }
    }, [selectedDate, trigger]);

    const onSubmit = (data: BookingFormData) => {
        console.log('Данные отправлены:', data);
        bookingOrder(data);
        reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.title}>Быстрое бронирование</p>

            <div className={styles.field}>
                <input type="text" placeholder="Ваше имя" {...register('name')} />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.field}>
                <Controller
                    name="phone"
                    control={control}
                    render={({field: {onChange, onBlur, value, ref}}) => (
                        <IMaskInput
                            type={'tel'}
                            mask="+7 (000) 000-00-00"
                            lazy={false}
                            unmask={true}
                            placeholder="+7 (___) ___-__-__"
                            value={value}
                            inputRef={ref}
                            onAccept={(value: string) => onChange(value)}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
            </div>

            <div className={styles.field}>
                <input type="date" {...register('date')} />
                {errors.date && <span className={styles.error}>{errors.date.message}</span>}
            </div>

            <div className={styles.field}>
                <input type="time" {...register('time')} />
                {errors.time && <span className={styles.error}>{errors.time.message}</span>}
            </div>

            <div className={styles.checkboxField}>
                <label>
                    <input type="checkbox" {...register('consent')} /> Я согласен на обработку данных
                </label>
                {errors.consent && <span className={styles.error}>{errors.consent.message}</span>}
            </div>
            <FormButton text={'Забронировать'} disable={isDisableBtn}/>
        </form>
    );
}

export default FormBooking;