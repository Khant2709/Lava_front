// Функция для форматирования номера в вид +7 (XXX) XXX-XX-XX
export const formatPhoneNumberWithMask = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');

    return `+7 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7, 9)}-${cleaned.slice(9, 11)}`;
};

// Функция для преобразования номера в вид 7989XXXXXXX
export const formatPhoneNumberWithoutMask = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');

    return `7${cleaned.slice(1)}`;
};