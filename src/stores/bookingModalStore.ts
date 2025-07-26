import {create} from 'zustand';
import {roomID} from "@myTypes/api/roomsAPI";

export type ModalType =  'booking' | 'call';

// Сделать получение id места с бека
interface BookingModalState {
    isOpen: boolean;
    modalType: ModalType;
    placeId: roomID | undefined;
    openModal: (placeId?: roomID) => void;
    closeModal: () => void;
    setRoomType: (placeId: roomID) => void;
}

export const useBookingModalStore = create<BookingModalState>((set) => ({
    isOpen: false, // Изначально модальное окно закрыто
    modalType: 'booking', // Изначально пустая строка
    placeId: undefined, // Изначально пустая строка
    openModal: (placeId = undefined) =>
        set({isOpen: true, placeId}), // Открывает модал и устанавливает roomType
    closeModal: () =>
        set({isOpen: false, placeId: undefined}), // Закрывает модал и сбрасывает roomType
    setRoomType: (placeId) =>
        set({placeId}), // Устанавливает roomType без изменения isOpen
}));