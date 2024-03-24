import { createWinnersPage } from '../view/winners/winners';

export function onWinners() {
    const btn = document.getElementById('winners');
    if (btn instanceof HTMLButtonElement) {
        btn.addEventListener('click', createWinnersPage);
    }
}
