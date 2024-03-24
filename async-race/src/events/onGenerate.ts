import { generateCars } from '../controllers/randomCreation';

export function onGenerate() {
    const btn = document.getElementById('generate');
    if (btn instanceof HTMLButtonElement) {
        btn.addEventListener('click', generateCars);
    }
}
