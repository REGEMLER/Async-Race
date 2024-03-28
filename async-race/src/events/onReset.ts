import { stop } from '../controllers/stop';

async function reset() {
    const resetBTN = document.getElementById('reset') as HTMLButtonElement;
    resetBTN.disabled = true;
    const raceBTN = document.getElementById('race') as HTMLButtonElement;
    raceBTN.disabled = false;
    const cars = [...document.querySelectorAll('.car')] as HTMLDivElement[];
    console.log(cars);
    const requests = cars.map((car) => stop(car));
    const results = await Promise.all(requests);
    console.log(results);
}

export function onReset() {
    const btn = document.getElementById('reset');
    if (btn) btn.addEventListener('click', reset);
}
