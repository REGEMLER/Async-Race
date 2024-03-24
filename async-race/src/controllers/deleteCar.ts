import { createGaragePage } from '../view/garage/garage';

export async function deleteCar(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' },
    });
    if (response.status === 200) {
        createGaragePage();
    } else {
        console.error('404 NOT Found');
    }
}
