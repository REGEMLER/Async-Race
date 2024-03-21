import { createGaragePage } from '../view/garage/garage';

export function onGarage() {
    const btn = document.getElementById('garage') as HTMLButtonElement;
    btn.addEventListener('click', createGaragePage);
}
