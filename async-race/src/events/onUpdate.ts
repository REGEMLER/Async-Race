import { updateCar } from '../controllers/updateCar';

export function onUpdate(id: number) {
    return () => {
        const updateName = document.getElementById('updateName');
        const updateColor = document.getElementById('updateColor');
        let name = '';
        let color = '';
        if (updateName instanceof HTMLInputElement) name = updateName.value;
        if (updateColor instanceof HTMLInputElement) color = updateColor.value;
        if (name && color) {
            updateCar(id, name, color);
        }
    };
}
