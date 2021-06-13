import {ru_locale} from '../locale/ru'
import {en_locale} from '../locale/en'
import Cookies from 'js-cookie';

export default function localize(key) {
    if (!key) return;
    if(Cookies.get('locale') === 'ru' ){
        return ru_locale.get(key);
    }else if(Cookies.get('locale') === 'en'){
        return en_locale.get(key);
    }else return key
}
