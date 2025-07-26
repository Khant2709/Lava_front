'use client'

import React, {useMemo, useState} from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import SelectedButton from "@components/ui/buttons/selectedButton/selectedButton";

import RoomInformation from "./roomInformation/roomInformation";

import styles from './wrapperGalleryRooms.module.scss'
import {useBookingModalStore} from "@stores/bookingModalStore";
import {roomID, RoomModel} from "@myTypes/api/roomsAPI";
import {useClearSessionError} from "@hooks/useClearSessionError";
import {usePreloaderStop} from "@hooks/usePreloaderStop";

interface Props {
    rooms: RoomModel[]
}

const WrapperGalleryRooms: React.FC<Props> = ({rooms}) => {
    usePreloaderStop();
    useClearSessionError('rooms');
    const {openModal} = useBookingModalStore();
    const [activeRoom, setActiveRoom] = useState<roomID>(1);

    const toggleRoom = (id: roomID) => {
        if (activeRoom !== id) {
            setActiveRoom(id)
        }
    }

    const currentRoom = useMemo(() => {
        return rooms.find(room => room.id === activeRoom)
    }, [activeRoom, rooms])

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Наши комнаты'}/>
            <section className={styles.sectionContainer}>
                {rooms.map((room) => {
                    return <SelectedButton
                        key={room.title}
                        text={room.title}
                        isActive={room.id === activeRoom}
                        handleClick={() => toggleRoom(room.id)}
                    />
                })}
            </section>
            <RoomInformation roomData={currentRoom} openModal={openModal}/>
        </SectionWrapper>
    );
};

export default WrapperGalleryRooms;