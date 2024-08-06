import Loader from './loader';

class AppLoader extends Loader {
    constructor(api_url: string, api_key: string) {
        super(api_url, {
            apiKey: api_key,
        });
    }
}

export default AppLoader;
