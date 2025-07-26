'use client'

import React, {useState} from 'react';
import Image from "next/image";
import {FaTimes, FaCalendarAlt, FaPhone} from "react-icons/fa";

import {ModalType, useBookingModalStore} from "@stores/bookingModalStore";

import FormBookingModal from "@components/forms/formBookingModal/formBookingModal";
import FormCallModal from "@components/forms/formCallModal/formCallModal";

import {orderAPI} from '@api/api';
import {singleRequest} from "@utils/axios/request";

import logo from '@assets/logo.png';

import styles from './bookingModal.module.scss';
import {BookingModalFormData, CallModalFormData} from "@validators/fieldsBookingModal";
import {formatDateRU} from "@utils/transformDate";
import {notifyShowToast} from "@utils/showToast";

interface HeaderModalProps {
    closeModal: () => void;
}

const BookingModal: React.FC = () => {
    const {isOpen, modalType, closeModal, placeId} = useBookingModalStore();
    const [typeForm, setTypeForm] = useState<ModalType>(modalType);
    const [isDisableBtn, setIsDisableBtn] = useState<boolean>(false);

    const handleChangeType = (type: 'booking' | 'call') => {
        if (typeForm !== type) {
            setTypeForm(type)
        }
    }
    if (!isOpen) return null;

    const sendOrder = async (data: BookingModalFormData | CallModalFormData) => {
        setIsDisableBtn(true);
        notifyShowToast('info', `${data.name}, ваша заявка отправлена, дождитесь ответа это займет меньше 1мин.`);
        let result;

        if (typeForm === 'booking') {
            result = await bookingOrder(data as BookingModalFormData);
        }

        if (typeForm === 'call') {
            result = await callOrder(data as CallModalFormData);
        }

        if (result && result.status === 200) {
            notifyShowToast('success', result.message || `${data.name}, Ваша заявка принята, в ближайшее время вам позвонят для подтверждения.`);
            closeModal()
        } else {
            notifyShowToast('error', result?.message || `${data.name}, произошла ошибка, попробуйте позднее или позвоните по номеру указанному на сайте.`);
        }

        setIsDisableBtn(false);
    }

    const bookingOrder = async (data: BookingModalFormData) => {
        const dataBooking = {
            name: data.name,
            phone: data.phone,
            date: formatDateRU(data.date),
            time: data.time,
            roomId: placeId ?? undefined

        }

        return await singleRequest(() => orderAPI.createBooking(dataBooking));
    };

    const callOrder = async (data: CallModalFormData) => {
        return await singleRequest(() => orderAPI.orderCall({name: data.name, phone: data.phone}));
    }

    return (
        <section className={styles.window}>
            <div className={styles.containerModal}>
                <HeaderModal closeModal={closeModal}/>
                <ContainerButtonsTypeForm
                    typeForm={typeForm}
                    selectedBookingForm={() => handleChangeType('booking')}
                    selectedCallForm={() => handleChangeType('call')}
                />
                {typeForm === 'call'
                    ? <FormCallModal sendOrder={sendOrder}/>
                    : <FormBookingModal sendBooking={sendOrder} isDisableBtn={isDisableBtn}/>
                }
            </div>
        </section>
    );
};

export default BookingModal;

const HeaderModal: React.FC<HeaderModalProps> = ({closeModal}) => (
    <div className={styles.header}>
        <div className={styles.boxLogo}>
            <Image src={logo} alt={'logo'} className={styles.logo}/>
            <h2 className={styles.title}>Lava <span>Lounge</span></h2>
        </div>
        <FaTimes className={styles.iconClose} onClick={closeModal}/>
    </div>
);

interface ButtonsProps {
    typeForm: string;
    selectedBookingForm: () => void;
    selectedCallForm: () => void;
}

const ContainerButtonsTypeForm: React.FC<ButtonsProps> = ({typeForm, selectedBookingForm, selectedCallForm}) => (
    <div className={styles.containerButtons}>
        <button
            onClick={selectedBookingForm}
            className={`${styles.defaultButton} ${typeForm === 'booking' ? styles.activeButton : ''}`}
        >
            <FaCalendarAlt size={16}/>
            Бронирование
        </button>
        <button
            onClick={selectedCallForm}
            className={`${styles.defaultButton} ${typeForm === 'call' ? styles.activeButton : ''}`}
        >
            <FaPhone size={16}/>
            Звонок
        </button>
    </div>
)