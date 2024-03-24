import { deleteCar } from '../controllers/deleteCar';

export function onRemove(btn: HTMLButtonElement, id: number) {
    btn.addEventListener('click', () => {
        deleteCar(id);
    });
}
