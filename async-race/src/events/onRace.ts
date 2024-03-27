import { getCar } from '../controllers/getCar';
import { start } from '../controllers/start';
import { createModal } from '../view/modal/modal';
import { IWinner } from '../controllers/getWinners';
import { createWinner } from '../controllers/createWinner';
import { updateWinner } from '../controllers/updateWinner';

async function race() {
    const cars = [...document.querySelectorAll('.car')] as HTMLDivElement[];
    const requests = cars.map((car) => start(car));
    const result = await Promise.any(requests);
    if (result) {
        const winCar = await getCar(result.id);
        const winTime = Math.floor(result.time) / 1000;
        const winMessage = `${winCar!.name} win for ${winTime} seconds`;
        const modalHeader = createModal(winMessage);
        setTimeout(() => {
            modalHeader.remove();
            document.body.style.overflowY = '';
        }, 5000);
        const responseWinners = await fetch(`http://127.0.0.1:3000/winners`);
        const allWinners: IWinner[] = await responseWinners.json();
        const findWinner = allWinners.find((item) => item.id === winCar!.id);
        if (findWinner) {
            const newWins = findWinner.wins + 1;
            const bestTime = findWinner.time <= winTime ? findWinner.time : winTime;
            updateWinner(winCar!.id, newWins, bestTime);
        } else {
            createWinner(winCar!.id, 1, winTime);
        }
    }
}

export function onRace() {
    const btn = document.getElementById('race');
    if (btn) btn.addEventListener('click', race);
}
