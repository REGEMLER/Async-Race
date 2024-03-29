import { createWinnersPage } from '../view/winners/winners';

export function getSort(): string {
    const sortType = localStorage.getItem('sort');
    if (sortType) return sortType;
    return 'id';
}

export function getOrder(): string {
    const order = localStorage.getItem('order');
    if (order) return order;
    return 'ASC';
}

function sort(event: Event): void {
    const target = event.target;
    const currentOrder: string = getOrder();
    const newOrder: 'ASC' | 'DESC' = currentOrder === 'ASC' ? 'DESC' : 'ASC';
    if (target instanceof HTMLDivElement) {
        if (target.classList.contains('wins')) {
            localStorage.setItem('sort', 'wins');
        } else if (target.classList.contains('time')) {
            localStorage.setItem('sort', 'time');
        } else {
            localStorage.setItem('sort', 'id');
        }
        localStorage.setItem('order', newOrder);
        createWinnersPage();
    }
}

export function onSort(): void {
    const fuild = document.querySelector('.table-header');
    if (fuild) {
        fuild.addEventListener('click', sort);
    }
}
