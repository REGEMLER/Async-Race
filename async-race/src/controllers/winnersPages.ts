import { getOrder, getSort } from '../events/onSort';
import { createWinnersPage } from '../view/winners/winners';
import { getWinners } from './getWinners';

const MAXCOUNT: number = 10;

export function getWinnersPage(): string {
    const page: string | null = localStorage.getItem('winnerPage');
    if (page) return page;
    return `1`;
}

export async function isLastWinnerpage() {
    const currentPage: string = getWinnersPage();
    const sort: string = getSort();
    const order: string = getOrder();
    const { totalCount } = await getWinners(sort, order);
    const totalPages = Math.ceil(Number(totalCount) / MAXCOUNT);
    if (Number(currentPage) >= totalPages) {
        return true;
    }
    return false;
}

export function isFirstWinnerPage() {
    const currentPage: string = getWinnersPage();
    if (Number(currentPage) <= 1) {
        return true;
    }
    return false;
}

export async function increaseWinnerPage(): Promise<void> {
    const currentPage: string = getWinnersPage();
    const isLast: boolean = await isLastWinnerpage();
    if (isLast) return;
    const newPage: number = Number(currentPage) + 1;
    localStorage.setItem('winnerPage', String(newPage));
    createWinnersPage();
}

export function decreaseWinnerPage(): void {
    const currentPage: string = getWinnersPage();
    const isFirst: boolean = isFirstWinnerPage();
    if (isFirst) return;
    const newPage: number = Number(currentPage) - 1;
    localStorage.setItem('winnerPage', String(newPage));
    createWinnersPage();
}
