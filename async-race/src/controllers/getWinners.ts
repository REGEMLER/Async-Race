import { getWinnersPage } from './winnersPages';

export interface IWinner {
    id: number;
    wins: number;
    time: number;
}

export async function getWinners() {
    const page = getWinnersPage();
    const response = await fetch(`http://127.0.0.1:3000/winners?_page=${page}&_limit=10`);
    const winners: IWinner[] = await response.json();
    let totalCount: string | null = '0';
    if (response.headers.has('X-Total-Count')) {
        totalCount = response.headers.get('X-Total-Count');
    }
    return { winners, totalCount };
}
