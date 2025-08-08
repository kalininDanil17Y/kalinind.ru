// Клиентская система локализации
class LocaleManager {
    constructor() {
        this.currentLocale = 'ru'; // по умолчанию
        this.localeData = {};
        this.observers = [];
        this.init();
    }

    async init() {
        // Загружаем данные локализации
        await this.loadLocaleData();
        
        // Определяем язык
        this.currentLocale = this.detectLanguage();
        
        // Применяем локализацию
        this.applyLocalization();
        
        // Устанавливаем обработчики событий
        this.setupEventListeners();
    }

    async loadLocaleData() {
        try {
            // Загружаем все языки
            const [ruData, enData] = await Promise.all([
                fetch('/locales/ru.json').then(r => r.json()),
                fetch('/locales/en.json').then(r => r.json())
            ]);
            
            this.localeData = {
                ru: ruData,
                en: enData
            };
        } catch (error) {
            console.error('Failed to load locale data:', error);
        }
    }

    detectLanguage() {
        // 1. Проверяем localStorage
        const storedLang = localStorage.getItem('preferred-language');
        if (storedLang && ['ru', 'en'].includes(storedLang)) {
            return storedLang;
        }

        // 2. Проверяем язык браузера
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('ru')) {
            return 'ru';
        }

        // 3. По умолчанию русский
        return 'ru';
    }

    changeLanguage(newLocale) {
        if (!['ru', 'en'].includes(newLocale)) return;
        
        this.currentLocale = newLocale;
        localStorage.setItem('preferred-language', newLocale);
        
        this.applyLocalization();
        this.notifyObservers();
    }

    applyLocalization() {
        if (!this.localeData[this.currentLocale]) return;

        const data = this.localeData[this.currentLocale];
        
        // Обновляем заголовок страницы
        document.title = this.getPageTitle(data);

        // Обновляем навигацию
        this.updateNavigation(data);

        // Обновляем контент страницы
        this.updatePageContent(data);
    }

    getPageTitle(data) {
        const path = window.location.pathname;
        if (path === '/') {
            return data.title;
        } else if (path === '/carier' || path === '/carier/') {
            return `${data.pages.carier.bodyTitle} | ${data.title}`;
        } else if (path === '/projects' || path === '/projects/') {
            return `${data.pages.projects.bodyTitle} | ${data.title}`;
        }
        return data.title;
    }

    updateNavigation(data) {
        // Обновляем заголовок сайта
        const siteTitle = document.querySelector('h2 a');
        if (siteTitle) {
            siteTitle.textContent = data.title;
        }

        // Обновляем навигационные ссылки
        const navLinks = document.querySelectorAll('.internal-links a');
        navLinks.forEach((link, index) => {
            if (data.header[index]) {
                link.textContent = data.header[index].text;
            }
        });
    }

    updatePageContent(data) {
        const path = window.location.pathname;
        
        if (path === '/') {
            this.updateIndexPage(data.pages.index);
        } else if (path === '/carier' || path === '/carier/') {
            this.updateCarierPage(data.pages.carier);
        } else if (path === '/projects' || path === '/projects/') {
            this.updateProjectsPage(data.pages.projects);
        }
    }

    updateIndexPage(pageData) {
        // Обновляем основную страницу
        const elements = {
            'h3': pageData.greeting,
            '[data-localize="introduction"]': pageData.introduction,
            '[data-localize="current_education"]': pageData.current_education,
            '[data-localize="programming_skills"]': pageData.programming_skills,
            '[data-localize="skills_title"]': pageData.skills_title,
            '[data-localize="additional_info"]': pageData.additional_info,
            '[data-localize="additional_info2"]': pageData.additional_info2
        };

        Object.entries(elements).forEach(([selector, text]) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            }
        });

        // Обновляем список навыков
        const skillsList = document.querySelector('[data-localize="skills-list"]');
        if (skillsList) {
            skillsList.innerHTML = '';
            pageData.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                skillsList.appendChild(li);
            });
        }
    }

    updateCarierPage(pageData) {
        // Обновляем заголовок страницы
        const title = document.querySelector('h1');
        if (title) {
            title.textContent = pageData.bodyTitle;
        }

        // Обновляем описание (если есть элемент для него)
        const description = document.querySelector('[data-localize="description"]');
        if (description) {
            description.textContent = pageData.description;
        }

        // Обновляем контент карьеры
        const containers = document.querySelectorAll('.container');
        containers.forEach((container, index) => {
            if (pageData.content[index]) {
                const content = pageData.content[index];
                
                const titleElement = container.querySelector('.title p');
                if (titleElement) {
                    titleElement.textContent = content.title;
                }

                const bodyElement = container.querySelector('.body');
                if (bodyElement) {
                    bodyElement.textContent = content.text;
                }

                const dateElement = container.querySelector('h5');
                if (dateElement) {
                    dateElement.textContent = content.dates;
                }
            }
        });
    }

    updateProjectsPage(pageData) {
        // Обновляем заголовок страницы
        const title = document.querySelector('h1');
        if (title) {
            title.textContent = pageData.bodyTitle;
        }

        // Обновляем контент проектов
        const containers = document.querySelectorAll('.container');
        containers.forEach((container, index) => {
            if (pageData.content[index]) {
                const content = pageData.content[index];
                
                const titleElement = container.querySelector('h4');
                if (titleElement) {
                    titleElement.textContent = content.title;
                }

                const bodyElement = container.querySelector('.body');
                if (bodyElement) {
                    bodyElement.textContent = content.body;
                }
            }
        });
    }

    setupEventListeners() {
        // Обработчики для переключателей языка
        document.querySelectorAll('#lang-toggle, #lang-toggle-footer').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const newLang = this.currentLocale === 'ru' ? 'en' : 'ru';
                this.changeLanguage(newLang);
            });
        });
    }

    // Для подписки на изменения языка
    subscribe(callback) {
        this.observers.push(callback);
    }

    notifyObservers() {
        this.observers.forEach(callback => callback(this.currentLocale));
    }

    getCurrentLocale() {
        return this.currentLocale;
    }

    getText(key) {
        const data = this.localeData[this.currentLocale];
        return this.getNestedValue(data, key);
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }
}

// Создаем глобальный экземпляр
window.localeManager = new LocaleManager();

export default window.localeManager;
