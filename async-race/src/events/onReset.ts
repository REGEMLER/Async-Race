import { stop } from '../controllers/stop';

async function reset() {
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
