import {createI18n} from 'vue-i18n';

// Define translations
const messages = {
    en: {
        welcome: 'Welcome',
        login: 'Login',
        switch_lang: 'Switch to Arabic'
    },
    ar: {
        welcome: 'مرحبا',
        login: 'تسجيل الدخول',
        switch_lang: 'التبديل إلى الإنجليزية'
    }
};

const i18n = createI18n({
    locale: 'en', // Default language
    fallbackLocale: 'en',
    messages
});

export default i18n;
