import React from 'react';
import {IMaskInput} from "react-imask";
import {Controller, Resolver, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {FaPhoneAlt, FaUser} from "react-icons/fa";

import FormButton from "@components/ui/buttons/formButton/formButton";

import {CallModalFormData, callModalSchema} from "@validators/fieldsBookingModal";

import styles from './formCallModal.module.scss';

const FormCallModal: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<CallModalFormData>({
        resolver: yupResolver(callModalSchema) as Resolver<CallModalFormData>,
        mode: 'onChange',
        defaultValues: {
            name: '',
            phone: '',
            consent: false,
        },
    });

    const onSubmit = (data: CallModalFormData) => {
        console.log('Данные отправлены:', data);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

            <div className={styles.checkboxField}>
                <label>
                    <input type="checkbox" {...register('consent')} /> Я согласен на обработку данных
                </label>
                {errors.consent && <span className={styles.error}>{errors.consent.message}</span>}
            </div>

            <FormButton text={'Оставить заявку'}/>
        </form>
    );
};

export default FormCallModal;