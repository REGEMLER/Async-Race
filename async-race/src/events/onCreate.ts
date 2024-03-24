import { createCar } from '../controllers/createCar';

export function onCreate() {
    const btn = document.getElementById('create');
    if (btn instanceof HTMLButtonElement) {
        btn.addEventListener('click', () => {
            const inputName = document.getElementById('createName');
            const inputColor = document.getElementById('createColor');
            let name = '';
            let color = '';
            if (inputName instanceof HTMLInputElement) name = inputName.value;
            if (inputColor instanceof HTMLInputElement) color = inputColor.value;
            if (color && name) createCar(name, color);
        });
    }
}
