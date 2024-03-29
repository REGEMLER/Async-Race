import { createGaragePage } from '../view/garage/garage';

export async function updateCar(id: number, name: string, color: string): Promise<void> {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'PUT',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            color: color,
        }),
    });
    if (response.status === 200) {
        createGaragePage();
    } else {
        console.log('Error! Car was not updated!');
    }
}
