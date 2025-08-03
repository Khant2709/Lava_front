'use client'
import React, {useState} from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import FormBooking from "@components/forms/formBooking/formBooking";

import {BookingModalFormData} from "@validators/fieldsBookingModal";

import {notifyShowToast} from "@utils/showToast";
import {formatDateRU} from "@utils/transformDate";
import {singleRequest} from "@utils/axios/request";
import {orderAPI} from "@api/api";


const ContainerFormBooking: React.FC = () => {
    const [isDisableBtn, setIsDisableBtn] = useState<boolean>(false);

    const bookingOrder = async (data: BookingModalFormData) => {
        setIsDisableBtn(true);
        notifyShowToast('info', `${data.name}, ваша заявка отправлена, дождитесь ответа это займет меньше 1мин.`);

        const dataBooking = {
            name: data.name,
            phone: data.phone,
            date: formatDateRU(data.date),
            time: data.time,
        }

        const result = await singleRequest(() => orderAPI.createBooking(dataBooking));

        if (result.status === 200) {
            notifyShowToast('success', result.message || `${data.name}, Ваша заявка принята, в ближайшее время вам позвонят для подтверждения.`);
        } else {
            notifyShowToast('error', result.message || `${data.name}, произошла ошибка, попробуйте позднее или позвоните по номеру указанному на сайте.`);
        }

        setIsDisableBtn(false);
    }


    return (
        <SectionWrapper>
            <FormBooking isDisableBtn={isDisableBtn} bookingOrder={bookingOrder}/>
        </SectionWrapper>
    );
};

export default ContainerFormBooking;