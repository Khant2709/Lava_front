import React, {useEffect} from 'react';
import {IMaskInput} from "react-imask";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, Resolver, useForm} from "react-hook-form";
import {FaUser, FaPhoneAlt, FaRegCalendarAlt, FaClock} from "react-icons/fa";

import FormButton from "@components/ui/buttons/formButton/formButton";

import {bookingModalSchema, BookingModalFormData} from "@validators/fieldsBookingModal";

import styles from "./formBookingModal.module.scss";


const now = new Date();
const defaultDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;


const defaultTime = () => {
    const hour = Number(now.getHours());

    if (hour === 23) return '23:59';
    if (hour >= 3 && hour <= 11) return '12:00';

    return `${String(hour + 1).padStart(2, '0')}:00`
}

interface Props {
    sendBooking: (data: BookingModalFormData) => void;
    isDisableBtn: boolean;
}

const FormBookingModal: React.FC<Props> = ({sendBooking, isDisableBtn}) => {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
        watch,
        trigger,
    } = useForm<BookingModalFormData>({
        resolver: yupResolver(bookingModalSchema) as Resolver<BookingModalFormData>,
        mode: 'onChange',
        defaultValues: {
            name: '',
            phone: '',
            date: defaultDate,
            time: defaultTime(),
            consent: true,
        },
    });

    const selectedDate = watch('date');

    useEffect(() => {
        if (selectedDate) {
            trigger('time');
        }
    }, [selectedDate, trigger]);

    const onSubmit = (data: BookingModalFormData) => {
        sendBooking(data)
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapperFields}>
                <div className={styles.field}>
                    <label className={styles.labelTop}>
                        <FaUser/>
                        Имя:
                    </label>
                    <input type="text" placeholder="Ваше имя" {...register('name')} />
                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                </div>

                <div className={styles.field}>
                    <label className={styles.labelTop}>
                        <FaPhoneAlt/>
                        Телефон:
                    </label>
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
                    <label className={styles.labelTop}>
                        <FaRegCalendarAlt/>
                        Дата:
                    </label>
                    <input type="date" {...register('date')} />
                    {errors.date && <span className={styles.error}>{errors.date.message}</span>}
                </div>

                <div className={styles.field}>
                    <label className={styles.labelTop}>
                        <FaClock/>
                        Время:
                    </label>
                    <input type="time" {...register('time')} />
                    {errors.time && <span className={styles.error}>{errors.time.message}</span>}
                </div>
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
};

export default FormBookingModal;