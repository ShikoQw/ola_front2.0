import {ru_locale} from '../locale/ru'
import Cookies from 'js-cookie';

export default function localize(key) {
    if (!key) return;
    if(Cookies.get('locale') === 'ru' ){
        return ru_locale.get(key);
    }else return key
}
