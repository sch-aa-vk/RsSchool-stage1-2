import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '2abfeab2a9b24960bed230ca2f8aa89a', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
