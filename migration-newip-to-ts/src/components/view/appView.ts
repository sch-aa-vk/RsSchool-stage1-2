import News from './news/news';
import Sources from './sources/sources';
import { INewsAPI } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INewsAPI) {
        const values = data?.articles ? data?.articles : [{}] as INewsAPI['articles'];
        this.news.draw(values);
    }

    drawSources(data: INewsAPI) {
        const values = data?.sources ? data?.sources : [{}] as INewsAPI['sources'];
        this.sources.draw(values);
    }
}

export default AppView;
