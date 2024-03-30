import { stop } from '../controllers/stop';

async function reset(): Promise<void> {
    const resetBTN = document.getElementById('reset') as HTMLButtonElement;
    resetBTN.disabled = true;
    const raceBTN = document.getElementById('race') as HTMLButtonElement;
    raceBTN.disabled = false;
    const cars = [...document.querySelectorAll('.car')] as HTMLDivElement[];
    const requests = cars.map((car) => stop(car));
    await Promise.all(requests);
    localStorage.setItem('reset', 'on');
}

export function onReset(): void {
    const btn = document.getElementById('reset');
    if (btn) btn.addEventListener('click', reset);
}
