import {create} from 'zustand';
import {roomID} from "@myTypes/api/roomsAPI";

// Сделать получение id места с бека
interface BookingModalState {
    isOpen: boolean;
    modalType: 'booking' | 'call';
    placeId: roomID;
    openModal: (placeId?: roomID) => void;
    closeModal: () => void;
    setRoomType: (placeId: roomID) => void;
}

export const useBookingModalStore = create<BookingModalState>((set) => ({
    isOpen: false, // Изначально модальное окно закрыто
    modalType: 'booking', // Изначально пустая строка
    placeId: 1, // Изначально пустая строка
    openModal: (placeId = 1) =>
        set({isOpen: true, placeId}), // Открывает модал и устанавливает roomType
    closeModal: () =>
        set({isOpen: false, placeId: 1}), // Закрывает модал и сбрасывает roomType
    setRoomType: (placeId) =>
        set({placeId}), // Устанавливает roomType без изменения isOpen
}));