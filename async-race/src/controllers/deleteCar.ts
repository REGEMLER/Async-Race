import { createGaragePage } from '../view/garage/garage';
import { deleteWinner } from './deleteWinner';

export async function deleteCar(id: number): Promise<void> {
    const response: Response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' },
    });
    if (response.status === 200) {
        await response.json();
        await deleteWinner(id);
        createGaragePage();
    } else {
        console.log('Error! Car was not deleted!');
    }
}
