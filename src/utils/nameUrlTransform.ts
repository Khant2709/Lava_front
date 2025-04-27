/** Преобразуем в формат для чтения пользователя */
export const urlToReadableName = (urlName: string) => {
    const splitName = urlName.split('_');
    return splitName.length > 1 ? splitName.join(' ') : urlName;
}

/** Преобразуем в формат для url */
export const transformNameToUrl = (name: string) => {
    return name.trim().replace(/\s+/g, '_');
}
