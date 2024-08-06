import { Info } from '../../types';
import './sources.css';

class Sources {
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
    draw(data: Info['sources'] | []) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = this.getExistingElement<HTMLTemplateElement>('#sourceItemTemp');
        data.forEach((item) => {
            const sourceClone = this.cloneNode<HTMLElement>(sourceItemTemp);

            this.getExistingElement<HTMLElement>('.source__item-name', sourceClone).textContent = item.name;
            this.getExistingElement<HTMLElement>('.source__item', sourceClone).setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        this.getExistingElement<HTMLElement>('.sources').innerHTML = '';
        if (this.getExistingElement<HTMLElement>('.sources').innerHTML === '')
            this.getExistingElement<HTMLElement>('.sources').innerHTML === `No news in this category`;
        this.getExistingElement<HTMLElement>('.sources').append(fragment);
    }
}

export default Sources;
