import { createWinnersPage } from '../view/winners/winners';
import { getWinners } from './getWinners';

export function getWinnersPage() {
    const page = localStorage.getItem('winnerPage');
    if (page) return page;
    return 1;
}

export async function isLastWinnerpage() {
    const currentPage = getWinnersPage();
    const { totalCount } = await getWinners();
    const totalPages = Math.ceil(Number(totalCount) / 10);
    if (Number(currentPage) >= totalPages) {
        return true;
    }
    return false;
}

export function isFirstWinnerPage() {
    const currentPage = getWinnersPage();
    if (Number(currentPage) <= 1) {
        return true;
    }
    return false;
}

export async function increaseWinnerPage() {
    const currentPage = getWinnersPage();
    const isLast = await isLastWinnerpage();
    if (isLast) return;
    const newPage = Number(currentPage) + 1;
    localStorage.setItem('winnerPage', String(newPage));
    createWinnersPage();
}

export function decreaseWinnerPage() {
    const currentPage = getWinnersPage();
    const isFirst = isFirstWinnerPage();
    if (isFirst) return;
    const newPage = Number(currentPage) - 1;
    localStorage.setItem('winnerPage', String(newPage));
    createWinnersPage();
}
