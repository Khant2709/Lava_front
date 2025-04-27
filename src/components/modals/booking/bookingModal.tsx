'use client'

import React, {useState} from 'react';
import Image from "next/image";
import {FaTimes, FaCalendarAlt, FaPhone} from "react-icons/fa";

import {useBookingModalStore} from "../../../stores/bookingModalStore";

import FormBookingModal from "@components/forms/formBookingModal/formBookingModal";
import FormCallModal from "@components/forms/formCallModal/formCallModal";

import logo from '@assets/logo.png';

import styles from './bookingModal.module.scss';

interface HeaderModalProps {
    closeModal: () => void;
}

const BookingModal: React.FC = () => {
    const {isOpen, modalType, closeModal, placeId} = useBookingModalStore();
    const [typeForm, setTypeForm] = useState<'booking' | 'call'>(modalType);

    const handleChangeType = (type: 'booking' | 'call') => {
        if (typeForm !== type) {
            setTypeForm(type)
        }
    }
    if (!isOpen) return null;

    return (
        <section className={styles.window}>
            <div className={styles.containerModal}>
                <HeaderModal closeModal={closeModal}/>
                <ContainerButtonsTypeForm
                    typeForm={typeForm}
                    selectedBookingForm={() => handleChangeType('booking')}
                    selectedCallForm={() => handleChangeType('call')}
                />
                {typeForm === 'booking'
                    ? <FormBookingModal placeId={placeId}/>
                    : <FormCallModal/>
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