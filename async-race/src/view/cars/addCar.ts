import './cars.css';
import { onRemove } from '../../events/onRemove';
import { onSelect } from '../../events/onSelect';
import { onStart, onStop } from '../../events/onRun';
import { createCarImg } from './createCarImg';

export function addCar(name: string, color: string, id: number): HTMLDivElement {
    const car: HTMLDivElement = document.createElement('div');
    car.id = id.toString();
    const flag: string = `<svg height="70px" width="80px" class="flag" version="1.1"" 
    viewBox="0 0 206.505 206.505" xml:space="preserve">
    <g>
   <path style="fill:#FF0000;" d="M167.069,16.354c-0.426,0.186-43.29,18.671-70.274-4.481c-31.021-26.619-60.722-0.2-61.012,0.072
       L34.623,13l-0.179,193.494l7.108,0.011l0.115-122.594c5.157-4.091,27.11-19.086,50.498,0.988
       c30.356,26.047,75.839,6.438,77.765,5.59l2.133-0.938V14.153L167.069,16.354z M164.943,84.824
       c-8.997,3.389-44.603,14.874-68.148-5.322c-10.375-8.904-20.6-11.871-29.629-11.871c-10.815,0-19.923,4.266-25.489,7.702
       l0.047-59.101c5.264-4.169,27.142-18.961,50.44,1.034c24.855,21.323,59.863,12.043,72.78,7.516V84.824z"/>
    </g>
</svg>`;
    car.classList.add('car');
    const carIMG: string = createCarImg(color, '200', '80', 'car-img');
    const inner: string = `
    <div class="line1">
        <button class="btn car-btn select">Select</button>
        <button class="btn car-btn remove">Remove</button>
        <h3 class="car-title">${name}</h3>
    </div>
    <div class="line2">
        <button class="btn engine-btn start">A</button>
        <button class="btn engine-btn stop" disabled>B</button>
        ${carIMG};
        ${flag};
    </div>
    `;
    car.innerHTML = inner;
    const removeBtn: Element | null = car.querySelector('.remove');
    if (removeBtn instanceof HTMLButtonElement) onRemove(removeBtn, id);
    const selectBtn: Element | null = car.querySelector('.select');
    if (selectBtn instanceof HTMLButtonElement) onSelect(selectBtn, id);
    onStart(car);
    onStop(car);
    return car;
}
