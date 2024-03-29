import { getWinnersPage } from './winnersPages';

export interface IWinner {
    id: number;
    wins: number;
    time: number;
}

interface getWinnerResult {
    winners: IWinner[];
    totalCount: string;
}

export async function getWinners(sort: string, order: string): Promise<getWinnerResult> {
    const page: string = getWinnersPage();
    const response = await fetch(`http://127.0.0.1:3000/winners?_page=${page}&_limit=10&_sort=${sort}&_order=${order}`);
    const winners: IWinner[] = await response.json();
    let totalCount: string = '0';
    if (response.headers.has('X-Total-Count')) {
        const totalCountHeader: string | null = response.headers.get('X-Total-Count');
        if (totalCountHeader) {
            totalCount = totalCountHeader;
        }
    }
    return { winners, totalCount };
}
