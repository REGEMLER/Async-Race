import { start } from './onRun';

async function race() {
    const cars = [...document.querySelectorAll('.car')] as HTMLDivElement[];
    console.log(cars);
    // cars.forEach((car) => run1(car, Number(car.id), 'started', '.start'));
    const requests = cars.map((car) => start(car));
    const results = await Promise.any(requests);
    console.log(results);
}

export function onRace() {
    const btn = document.getElementById('race');
    if (btn) btn.addEventListener('click', race);
}
