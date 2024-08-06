import AppController from '../controller/controller';
import { Info, InfoArt } from '../types';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    constructor(apiUrl: string, apiKey: string) {
        this.controller = new AppController(apiUrl, apiKey);
        this.view = new AppView();
    }

    start() {
        const views = this.view;
        document
            .querySelector('.sources')
            .addEventListener('click', (e) => this.controller.getNews(e, (data: InfoArt) => this.view.drawNews(data)));
        document.querySelectorAll('.categories__el').forEach((el) => {
            el.addEventListener('click', function (this: HTMLElement) {
                views.drawSources(JSON.parse(sessionStorage.getItem('sources') || '[]'), this.innerText);
            });
        });
        this.controller.getSources((data: Info) => this.view.drawSources(data));
    }
}

export default App;
