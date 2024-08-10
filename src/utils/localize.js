export const getLocaleFromHeaders = (headers) => {
    const acceptLanguage = headers.get('accept-language');

    if (!acceptLanguage) return 'en'; // Язык по умолчанию

    const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());

    if (languages.includes('ru')) {
        return 'ru';
    } else {
        return 'en';
    }
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

export const getLocale = (request) => {
    // Попробуем получить язык из sessionStorage
    const storedLang = request.headers.get('cookie')?.match(/locale=([^;]+)/)?.[1];

    let lang;
    if (storedLang) {
        lang = storedLang;
    } else {
        lang = getLocaleFromHeaders(request.headers);
    }

    return lang === 'en' ? 'en' : 'ru';
};