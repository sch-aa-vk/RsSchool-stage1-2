import './sources.css';
import { INewsAPI } from '../../../types/index';

export class Sources {
    draw(data: INewsAPI['sources']) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

            (sourceClone.querySelector('.source__item-name') as Element).textContent = item.name;
            (sourceClone.querySelector('.source__item') as Element).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (document.querySelector('.sources') as Element).append(fragment);
    }
}

export default Sources;