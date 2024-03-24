import { createGaragePage } from '../view/garage/garage';

export async function createCar(name: string, color: string) {
    const response = await fetch('http://127.0.0.1:3000/garage', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            color: color,
        }),
    });
    if (response.status === 201) {
        createGaragePage();
    } else {
        console.error('404 NOT Found');
    }
}
