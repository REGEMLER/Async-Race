import { createGaragePage } from '../view/garage/garage';
import { getCars } from './getCars';

const MAXCOUNT: number = 7;

export function getGaragePage() {
    const page = localStorage.getItem('garagePage');
    if (page) return page;
    return 1;
}

export async function isLastpage() {
    const currentPage = getGaragePage();
    const { totalCount } = await getCars();
    const totalPages = Math.ceil(Number(totalCount) / MAXCOUNT);
    if (Number(currentPage) >= totalPages) {
        return true;
    }
    return false;
}

export function isFirstPage() {
    const currentPage = getGaragePage();
    if (Number(currentPage) <= 1) {
        return true;
    }
    return false;
}

export async function increaseGaragePage() {
    const currentPage = getGaragePage();
    const isLast = await isLastpage();
    if (isLast) return;
    const newPage = Number(currentPage) + 1;
    localStorage.setItem('garagePage', String(newPage));
    createGaragePage();
}

export function decreaseGaragePage() {
    const currentPage = getGaragePage();
    const isFirst = isFirstPage();
    if (isFirst) return;
    const newPage = Number(currentPage) - 1;
    localStorage.setItem('garagePage', String(newPage));
    createGaragePage();
}
