import './news.css';
import { INewsAPI } from "../../../types/index";

export class News {
    draw(data: INewsAPI['articles']) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item , idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;

            if (idx % 2) (newsClone.querySelector('.news__item') as Element).classList.add('alt');

            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || "https://t3.ftcdn.net/jpg/03/83/16/20/360_F_383162081_kCoJUSq3HyREDTwwIcDIfmgK2mbZb0FC.jpg"
            })`;
            (newsClone.querySelector('.news__meta-author') as Element).textContent = item.author || item.name;
            (newsClone.querySelector('.news__meta-date') as Element).textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            (newsClone.querySelector('.news__description-title') as Element).textContent = item.title;
            (newsClone.querySelector('.news__description-source') as Element).textContent = item.name;
            (newsClone.querySelector('.news__description-content') as Element).textContent = item.description;
            (newsClone.querySelector('.news__read-more a') as Element).setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        (document.querySelector('.news') as Element).innerHTML = '';
        (document.querySelector('.news') as Element).appendChild(fragment);
    }
}