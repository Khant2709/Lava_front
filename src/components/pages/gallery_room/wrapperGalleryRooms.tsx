'use client'

import React, {useMemo, useState} from 'react';

import SectionWrapper from "@components/layout/sectionWrapper/sectionWrapper";
import Title from "@components/ui/title/title";
import SelectedButton from "@components/ui/buttons/selectedButton/selectedButton";

import RoomInformation from "./roomInformation/roomInformation";

import {roomsData} from "@components/pages/gallery_room/devData";

import styles from './wrapperGalleryRooms.module.scss'
import {useBookingModalStore} from "../../../stores/bookingModalStore";

const WrapperGalleryRooms: React.FC = () => {
    const {openModal} = useBookingModalStore();
    const [activeRoom, setActiveRoom] = useState<1 | 2 | 3 | 4 | 5 | 6 | 7>(1)

    const toggleRoom = (id: 1 | 2 | 3 | 4 | 5 | 6 | 7) => {
        if (activeRoom !== id) {
            setActiveRoom(id)
        }
    }

    const currentRoom = useMemo(() => {
        return roomsData.find(room => room.id === activeRoom)
    }, [activeRoom])

    return (
        <SectionWrapper needMarginTop={true}>
            <Title Tag={'h1'} text={'Наши комнаты'}/>
            <section className={styles.sectionContainer}>
                {roomsData.map(room => {
                    return <SelectedButton
                        key={room.name}
                        text={room.name}
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