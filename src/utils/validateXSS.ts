export const hasInjection = (value: string): boolean => {
    const pattern = /(<script.*?>.*?<\/script>)|(<[^>]+>)|(;|--|\b(SELECT|INSERT|DELETE|UPDATE|DROP|UNION|EXEC|TRUNCATE|ALTER)\b)/gi;
    return pattern.test(value);
};