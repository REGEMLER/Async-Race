import { IWinner } from './getWinners';

export async function getWinner(id: number): Promise<IWinner | null> {
    const response: Response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
    });
    if (response.status === 200) {
        const winner: IWinner = await response.json();
        return winner;
    }
    console.log('Error! There is no winner!');
    return null;
}
