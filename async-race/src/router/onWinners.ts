import { createWinnersPage } from '../view/winners/winners';

export function onWinners() {
    const btn = document.getElementById('winners') as HTMLButtonElement;
    btn.addEventListener('click', createWinnersPage);
}
