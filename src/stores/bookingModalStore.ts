import {create} from 'zustand';

// Сделать получение id места с бека
interface BookingModalState {
    isOpen: boolean;
    modalType: 'booking' | 'call';
    placeId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    openModal: (placeId?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) => void;
    closeModal: () => void;
    setRoomType: (placeId: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7) => void;
}

export const useBookingModalStore = create<BookingModalState>((set) => ({
    isOpen: false, // Изначально модальное окно закрыто
    modalType: 'booking', // Изначально пустая строка
    placeId: 0, // Изначально пустая строка
    openModal: (placeId = 0) =>
        set({isOpen: true, placeId}), // Открывает модал и устанавливает roomType
    closeModal: () =>
        set({isOpen: false, placeId: 0}), // Закрывает модал и сбрасывает roomType
    setRoomType: (placeId) =>
        set({placeId}), // Устанавливает roomType без изменения isOpen
}));