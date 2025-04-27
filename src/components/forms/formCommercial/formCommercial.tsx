'use client'

import React from 'react';
import {Controller, Resolver, useForm} from "react-hook-form";
import {IMaskInput} from "react-imask";

import {yupResolver} from "@hookform/resolvers/yup";
import {CommercialFormData, commercialFormSchema} from "@validators/fieldsCommercialFormValidator";

import styles from "@components/forms/stylesForm.module.scss";
import FormButton from "@components/ui/buttons/formButton/formButton";

const FormCommercial: React.FC = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors},
    } = useForm<CommercialFormData>({
        resolver: yupResolver(commercialFormSchema) as Resolver<CommercialFormData>,
        mode: 'onChange',
        defaultValues: {
            name: '',
            company: '',
            phone: '',
            email: '',
            offer: '',
            consent: false,
        },
    });

    const onSubmit = (data: CommercialFormData) => {
        console.log('Данные отправлены:', data);
    };


    return (
        <form className={`${styles.form} ${styles.large}`} onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.title}>Коммерческое предложение</p>

            <div className={styles.field}>
                <input type="text" placeholder="Ваше имя" {...register('name')} />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.field}>
                <input type="text" placeholder="Название компании" {...register('company')} />
                {errors.company && <span className={styles.error}>{errors.company.message}</span>}
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
                            onAccept={(value: string) => onChange(value || '')}
                            onBlur={onBlur}
                        />
                    )}
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
            </div>

            <div className={styles.field}>
                <input type="text" placeholder="example@gmail.com" {...register('email')} />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.field}>
                <textarea placeholder="Опишите ваше предложение..." {...register('offer')} />
                {errors.offer && <span className={styles.error}>{errors.offer.message}</span>}
            </div>

            <div className={styles.checkboxField}>
                <label>
                    <input type="checkbox" {...register('consent')} /> Я согласен на обработку данных
                </label>
                {errors.consent && <span className={styles.error}>{errors.consent.message}</span>}
            </div>
            <FormButton text={'Отправить'}/>
        </form>
    );
};

export default FormCommercial;