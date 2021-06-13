import {ru_locale} from '../locale/ru'
import {en_locale} from '../locale/en'

export default function localize(key) {
    if (!key) return;
    if(Cookies.locale === 'ru' ){
        return ru_locale.get(key);
    }else if(Cookies.locale ='en'){
        return en_locale.get(key);
    }else{
        return key
    }
}
