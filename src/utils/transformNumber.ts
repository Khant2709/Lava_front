// Функция для форматирования номера в вид +7 (XXX) XXX-XX-XX
export const formatPhoneNumberWithMask = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');

    return `+7 (${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 8)}-${cleaned.slice(8, 10)}`;
};

// Функция для преобразования номера в вид 7989XXXXXXX
export const formatPhoneNumberWithoutMask = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');

    return `7${cleaned.slice(1)}`;
};