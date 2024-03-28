import './winners.css';
import { getWinners } from '../../controllers/getWinners';
import {
    decreaseWinnerPage,
    getWinnersPage,
    increaseWinnerPage,
    isFirstWinnerPage,
    isLastWinnerpage,
} from '../../controllers/winnersPages';
import { createCarImg } from '../cars/createCarImg';
import { createFooter } from '../footer/footer';
import { IWinner } from '../../controllers/getWinners';
import { getCar } from '../../controllers/getCar';
import { onPrev } from '../../events/onPrev';
import { onNext } from '../../events/onNext';
import { getOrder, getSort, onSort } from '../../events/onSort';

function createTitle(totalCount: string | null): HTMLHeadingElement {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.classList.add('winners-title');
    title.textContent = `Winners (${totalCount})`;
    return title;
}

function createSubtitle(): HTMLHeadingElement {
    const page = getWinnersPage();
    const subtitle = document.createElement('h2');
    subtitle.classList.add('subtitle');
    subtitle.textContent = `Page #${page}`;
    return subtitle;
}

function createTable(firstSort: string, secondSort: string, thirdSort: string) {
    const winnersTable = document.createElement('div');
    winnersTable.classList.add('winners-table');
    const tableHeader = document.createElement('div');
    tableHeader.classList.add('table-header');
    const headerInner = `
    <div class="winner-item1 num">№ ${firstSort}</div>
    <div class="winner-item2">Car</div>
    <div class="winner-item3">Name</div>
    <div class="winner-item4 wins">Wins ${secondSort}</div>
    <div class="winner-item5 time">Best time(sec) ${thirdSort}</div>
    `;
    tableHeader.innerHTML = headerInner;
    winnersTable.append(tableHeader);
    return winnersTable;
}

function createWinnerItem(num: number, img: string, car: string, wins: number, time: number) {
    const winnersTable = document.querySelector('.winners-table');
    const winnersItem = document.createElement('div');
    winnersItem.classList.add('table-item');
    const inner = `
    <div class="winner-item1">${num}</div>
    <div class="winner-item2">${img}</div>
    <div class="winner-item3">${car}</div>
    <div class="winner-item4">${wins}</div>
    <div class="winner-item5">${time}</div>
    `;
    winnersItem.innerHTML = inner;
    if (winnersTable) winnersTable.append(winnersItem);
}

export async function createWinnersPage() {
    const main = document.getElementById('main');
    if (main) {
        main.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.classList.add('winners');
        const sort = getSort();
        const order = getOrder();
        const arrow = order === 'DESC' ? '↑' : '↓';
        const firstArrow = sort === 'id' ? arrow : '';
        const secondArrow = sort === 'wins' ? arrow : '';
        const thirdArrow = sort === 'time' ? arrow : '';
        const { winners, totalCount } = await getWinners(sort, order);
        const title = createTitle(totalCount);
        const subtitle = createSubtitle();
        const winnersContent = createTable(firstArrow, secondArrow, thirdArrow);
        const footer = await createFooter(isFirstWinnerPage, isLastWinnerpage);
        wrapper.append(title);
        wrapper.append(subtitle);
        wrapper.append(winnersContent);
        wrapper.append(footer);
        main.append(wrapper);
        const currentWinnersArr = winners.map((winner) => getCar(winner.id));
        const currentWinners = await Promise.all(currentWinnersArr);
        winners.forEach((winner: IWinner, index) => {
            createWinnerItem(
                winner.id,
                createCarImg(`${currentWinners[index]!.color}`, '70', '30', ''),
                currentWinners[index]!.name,
                winner.wins,
                winner.time
            );
        });
    }
    onPrev(decreaseWinnerPage);
    onNext(increaseWinnerPage);
    onSort();
}
