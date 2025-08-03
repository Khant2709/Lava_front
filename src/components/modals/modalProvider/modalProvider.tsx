'use client';

import React from 'react';

import dynamic from 'next/dynamic';
import {ToastContainer} from "react-toastify";

const AgeWarning = dynamic(() => import("../ageWarning/ageWarning"), {ssr: false});
const BookingModal = dynamic(() => import("../booking/bookingModal"), {ssr: false});
const DevelopmentModal = dynamic(() => import("../development/developmentModal"), {ssr: false});


const ModalProvider: React.FC = () => {
    return (
        <>
            <ToastContainer toastClassName="custom-toast"/>
            <AgeWarning/>
            <BookingModal/>
            <DevelopmentModal/>
        </>
    );
};

export default ModalProvider;