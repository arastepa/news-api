import { Info, InfoArt } from '../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: InfoArt) {
        const values: InfoArt['articles'] | [] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: Info, category: string = 'All') {
        const values: Info['sources'] | [] = data?.sources
            ? ((category !== 'All'
                  ? data?.sources.filter((el) => el.category === category.toLowerCase())
                  : data?.sources) as Info['sources'])
            : [];
        this.sources.draw(values);
    }
}

export default AppView;
