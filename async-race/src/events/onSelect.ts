import { getCar } from '../controllers/getCar';
import { onUpdate } from './onUpdate';

export async function onSelect(btn: HTMLButtonElement, id: number) {
    const car = await getCar(id);
    btn.addEventListener('click', () => {
        const updateName = document.getElementById('updateName');
        const updateColor = document.getElementById('updateColor');
        const updateBTN = document.getElementById('update');
        const newUpdateBTN = document.createElement('button');
        newUpdateBTN.classList.add('btn');
        newUpdateBTN.id = 'update';
        newUpdateBTN.textContent = 'Update';
        if (updateName instanceof HTMLInputElement) {
            updateName.disabled = false;
            updateName.value = car.name;
        }
        if (updateColor instanceof HTMLInputElement) {
            updateColor.disabled = false;
            updateColor.value = car.color;
        }
        if (updateBTN instanceof HTMLButtonElement) {
            updateBTN.replaceWith(newUpdateBTN);
            newUpdateBTN.addEventListener('click', onUpdate(car.id));
        }
    });
}
