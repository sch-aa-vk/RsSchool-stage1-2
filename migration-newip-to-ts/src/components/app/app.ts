import { INewsAPI } from '../../types/index';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

export class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        (document
            .querySelector('.sources') as Element)
            .addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as INewsAPI)));
        this.controller.getSources((data) => this.view.drawSources(data as INewsAPI));
    }
}

export default App;
