import { generateCars } from '../controllers/randomCreation';

export function onGenerate(): void {
    const btn = document.getElementById('generate');
    if (btn instanceof HTMLButtonElement) {
        btn.addEventListener('click', generateCars);
    }
}
