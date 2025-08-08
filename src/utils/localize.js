// Для статической сборки используем русский язык по умолчанию
export const getLocale = () => {
    return 'ru';
};

export const getLocaleTexts = async (locale) => {
    try {
        if (locale === 'ru') {
            return await import('../locales/ru.json');
        } else {
            return await import('../locales/en.json');
        }
    } catch (error) {
        console.error('Error loading localization file', error);
        return {};
    }
};
