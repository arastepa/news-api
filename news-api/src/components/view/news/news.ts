import { InfoArt } from '../../types';
import './news.css';

class News {
    getExistingElement<T extends HTMLElement>(selector: string, root: Document | HTMLElement = document): T {
        const element = root.querySelector<T>(selector);
        if (!element) {
            throw new Error(`Element not found for selector: ${selector}`);
        }
        return element;
    }
    cloneNode<T extends Node>(node: HTMLTemplateElement): T {
        return <T>node.content.cloneNode(true);
    }
    draw(data: InfoArt['articles'] | []) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = this.getExistingElement<HTMLTemplateElement>('#newsItemTemp', document);
        news.forEach((item, idx) => {
            const newsClone = this.cloneNode<HTMLElement>(newsItemTemp);
            if (newsClone) {
                if (idx % 2) this.getExistingElement<HTMLElement>('.news__item', newsClone).classList.add('alt');
                this.getExistingElement<HTMLElement>('.news__meta-photo', newsClone).style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                this.getExistingElement<HTMLElement>('.news__meta-author', newsClone).textContent =
                    item.author || item.source.name;
                this.getExistingElement<HTMLElement>('.news__meta-date', newsClone).textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');
                this.getExistingElement<HTMLElement>('.news__description-title', newsClone).textContent = item.title;
                this.getExistingElement<HTMLElement>('.news__description-source', newsClone).textContent =
                    item.source.name;
                this.getExistingElement<HTMLElement>('.news__description-content', newsClone).textContent = item.descr;
                this.getExistingElement<HTMLElement>('.news__read-more a', newsClone).setAttribute('href', item.url);
                fragment.append(newsClone);
            }
        });
        this.getExistingElement<HTMLElement>('.news').innerHTML = '';
        this.getExistingElement<HTMLElement>('.news').appendChild(fragment);
    }
}

export default News;
