import { products } from './data/products.js';
import { item, swiperItem } from './templates/product-item.js';

const productsList = document.querySelector('.js_products__list');
const swiperList = document.querySelector('.js_swiper__list');

products.forEach(product => {
    productsList.insertAdjacentHTML('beforeend',item(product));
    swiperList.insertAdjacentHTML('beforeend',swiperItem(product));
})
