import { createGaragePage } from '../view/garage/garage';

export function onGarage() {
    const btn = document.getElementById('garage');
    if (btn instanceof HTMLButtonElement) {
        btn.addEventListener('click', createGaragePage);
    }
}
