import { IWinner } from './getWinners';

export async function getWinner(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
    });
    if (response.status === 200) {
        const winner: IWinner = await response.json();
        return winner;
    }
    console.log('404 NOT Found');
    return null;
}
