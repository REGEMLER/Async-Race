import { getWinners } from '../../controllers/getWinners';
import { getWinnersPage } from '../../controllers/winnersPages';
import { createCarImg } from '../cars/createCarImg';
import { createFooter } from '../root/root';
import './winners.css';

interface IWinner {
    id: number;
    wins: number;
    time: number;
}

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

function createTable() {
    const winnersTable = document.createElement('div');
    winnersTable.classList.add('winners-table');
    const tableHeader = document.createElement('div');
    tableHeader.classList.add('table-header');
    const headerInner = `
    <div class="winner-item1">№</div>
    <div class="winner-item2">Car</div>
    <div class="winner-item3">Name</div>
    <div class="winner-item4">Wins</div>
    <div class="winner-item5">Best time(sec)</div>
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
        const { winners, totalCount } = await getWinners();
        const title = createTitle(totalCount);
        const subtitle = createSubtitle();
        const winnersContent = createTable();
        const footer = await createFooter();
        wrapper.append(title);
        wrapper.append(subtitle);
        wrapper.append(winnersContent);
        wrapper.append(footer);
        main.append(wrapper);
        winners.forEach((winner: IWinner) => {
            console.log(winner);
            createWinnerItem(winner.id, createCarImg('#FF0000', '70', '30', ''), 'TESLA', winner.wins, winner.time);
        });
        winners.forEach((winner: IWinner) => {
            console.log(winner);
            createWinnerItem(winner.id, createCarImg('#FF00EE', '70', '30', ''), 'TESLA', winner.wins, winner.time);
        });
        winners.forEach((winner: IWinner) => {
            console.log(winner);
            createWinnerItem(winner.id, createCarImg('#FF0022', '70', '30', ''), 'TESLA', winner.wins, winner.time);
        });
    }
}
