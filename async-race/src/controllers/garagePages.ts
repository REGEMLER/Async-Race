import { createGaragePage } from '../view/garage/garage';
import { getCars } from './getCars';

const MAXCOUNT: number = 7;

export function getGaragePage(): string {
    const page: string | null = localStorage.getItem('garagePage');
    if (page) return page;
    return `1`;
}

export async function isLastpage(): Promise<boolean> {
    const currentPage: string = getGaragePage();
    const { totalCount } = await getCars();
    const totalPages: number = Math.ceil(Number(totalCount) / MAXCOUNT);
    if (Number(currentPage) >= totalPages) {
        return true;
    }
    return false;
}

export function isFirstPage(): boolean {
    const currentPage: string = getGaragePage();
    if (Number(currentPage) <= 1) {
        return true;
    }
    return false;
}

export async function increaseGaragePage(): Promise<void> {
    const currentPage: string = getGaragePage();
    const isLast: boolean = await isLastpage();
    if (isLast) return;
    const newPage: number = Number(currentPage) + 1;
    localStorage.setItem('garagePage', String(newPage));
    createGaragePage();
}

export function decreaseGaragePage(): void {
    const currentPage: string = getGaragePage();
    const isFirst: boolean = isFirstPage();
    if (isFirst) return;
    const newPage: number = Number(currentPage) - 1;
    localStorage.setItem('garagePage', String(newPage));
    createGaragePage();
}
