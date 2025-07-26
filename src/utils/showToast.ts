import { toast, ToastOptions } from 'react-toastify';

// Типы уведомлений
const TOAST_TYPES = {
    success: toast.success,
    error: toast.error,
    info: toast.info,
    warn: toast.warn,
} as const;

type ToastType = keyof typeof TOAST_TYPES;

// Конфигурация toast по умолчанию
const DEFAULT_TOAST_OPTIONS: ToastOptions = {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
};

export const notifyShowToast = (
    type: ToastType,
    message: string,
    options: ToastOptions = {}
): void => {
    const toastFunction = TOAST_TYPES[type];

    if (!toastFunction) {
        console.error(`Unknown toast type: ${type}. Available types: ${Object.keys(TOAST_TYPES).join(', ')}`);
        return;
    }

    const toastOptions: ToastOptions = { ...DEFAULT_TOAST_OPTIONS, ...options };

    toastFunction(message, toastOptions);
};
