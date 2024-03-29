import { start } from '../controllers/start';
import { stop } from '../controllers/stop';

export async function startListenert(car: HTMLDivElement): Promise<() => Promise<void>> {
    return async () => {
        start(car);
    };
}

export async function stopListener(car: HTMLDivElement): Promise<() => Promise<void>> {
    return async () => {
        stop(car);
    };
}

export async function onStart(car: HTMLDivElement): Promise<void> {
    const btn = car.querySelector('.start');
    if (btn instanceof HTMLButtonElement) btn.addEventListener('click', await startListenert(car));
}

export async function onStop(car: HTMLDivElement): Promise<void> {
    const btn = car.querySelector('.stop');
    if (btn instanceof HTMLButtonElement) btn.addEventListener('click', await stopListener(car));
}
