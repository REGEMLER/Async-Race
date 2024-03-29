import { Icar } from './getCars';

export async function getCar(id: number): Promise<Icar | null> {
    const response: Response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
    });
    if (response.status === 200) {
        const car: Icar = await response.json();
        return car;
    }
    console.log('Error! There is no car!');
    return null;
}
