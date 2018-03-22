import enUS from './en_US';
import zhTW from './zh_TW';

module.exports = {
    getLocaleLanguage() {
        const language = navigator.language || navigator.userLanguage;
        const tag = language.split('-')[0];
        switch (tag) {
            case 'en':
                return enUS;
            case 'zh':
                return zhTW;
            default:
                return enUS;
        }
    }
};
