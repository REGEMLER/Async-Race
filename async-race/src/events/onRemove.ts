import { deleteCar } from '../controllers/deleteCar';

export function onRemove(btn: HTMLButtonElement, id: number): void {
    btn.addEventListener('click', () => {
        deleteCar(id);
    });
}
