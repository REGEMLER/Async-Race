import { getCar } from '../controllers/getCar';
import { start } from '../controllers/start';
import { createModal } from '../view/modal/modal';
import { IWinner } from '../controllers/getWinners';
import { createWinner } from '../controllers/createWinner';
import { updateWinner } from '../controllers/updateWinner';

async function race(): Promise<void> {
    localStorage.removeItem('reset');
    const resetBTN = document.getElementById('reset') as HTMLButtonElement;
    resetBTN.disabled = false;
    const raceBTN = document.getElementById('race') as HTMLButtonElement;
    raceBTN.disabled = true;
    const cars = [...document.querySelectorAll('.car')] as HTMLDivElement[];
    const requests = cars.map((car) => start(car));
    const results = await Promise.all(requests);
    const resultsFiltered = results.filter((item) => item?.isDrive);
    const bestResult = resultsFiltered.sort((a, b) => a!.time - b!.time)[0];
    console.log(bestResult);
    if (bestResult && !localStorage.getItem('reset')) {
        const winCar = await getCar(bestResult.id);
        const winTime = Math.floor(bestResult.time) / 1000;
        const winMessage = `${winCar!.name} win for ${winTime} seconds`;
        const modalHeader = createModal(winMessage);
        setTimeout(() => {
            modalHeader.remove();
            document.body.style.overflowY = '';
        }, 3000);
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

export function onRace(): void {
    const btn = document.getElementById('race');
    if (btn) btn.addEventListener('click', race);
}
