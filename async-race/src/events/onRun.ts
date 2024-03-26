import { driveEngine } from '../controllers/driveEngine';
import { runEngine } from '../controllers/runEngine';

function animationForward(car: SVGSVGElement, time: number, end: number): Animation {
    const frames = [
        {
            left: '70px',
        },
        {
            left: '20%',
        },
        {
            left: '40%',
        },
        {
            left: '60%',
        },
        {
            left: `${end}px`,
        },
    ];
    const config: KeyframeAnimationOptions = {
        duration: time,
        easing: 'linear',
        fill: 'both',
    };
    const animation = car.animate(frames, config);
    return animation;
}

function animationBack(car: SVGSVGElement, coordsCar: number): void {
    const frames = [
        {
            left: `${coordsCar}px`,
        },
        {
            left: `70px`,
        },
    ];
    const config: KeyframeAnimationOptions = {
        duration: 500,
        easing: 'ease-in-out',
        fill: 'both',
    };
    car.animate(frames, config);
}

export async function start(car: HTMLDivElement) {
    const btnStart: HTMLButtonElement = car.querySelector(`.start`) as HTMLButtonElement;
    const btnStop: HTMLButtonElement = car.querySelector(`.stop`) as HTMLButtonElement;
    const carIMG: SVGSVGElement = car.querySelector('.car-img') as SVGSVGElement;
    const id = Number(car.id);
    const flag = document.querySelector('.flag') as HTMLElement;
    const coordsFlag = flag.getBoundingClientRect();
    const flagEnd = coordsFlag.x - coordsFlag.width;
    btnStart.disabled = true;
    btnStop.disabled = false;
    const result = await runEngine(id, 'started');
    if (result) {
        const time = result.distance / result.velocity;
        const animation = animationForward(carIMG, time, flagEnd);
        const isDrive = await driveEngine(id);
        if (!isDrive) animation.pause();
        return { time, id };
    }
    return null;
}

export async function stop(car: HTMLDivElement) {
    const btnStart: HTMLButtonElement = car.querySelector(`.start`) as HTMLButtonElement;
    const btnStop: HTMLButtonElement = car.querySelector(`.stop`) as HTMLButtonElement;
    const carIMG: SVGSVGElement = car.querySelector('.car-img') as SVGSVGElement;
    const id = Number(car.id);
    const coordsCar = carIMG.getBoundingClientRect().x - carIMG.getBoundingClientRect().width;
    btnStart.disabled = false;
    btnStop.disabled = true;
    const result = await runEngine(id, 'stopped');
    if (result) {
        animationBack(carIMG, coordsCar);
    }
}

export async function startListenert(car: HTMLDivElement) {
    return async () => {
        start(car);
    };
}

export async function stopListener(car: HTMLDivElement) {
    return async () => {
        stop(car);
    };
}

export async function onStart(car: HTMLDivElement) {
    const btn = car.querySelector('.start');
    if (btn instanceof HTMLButtonElement) btn.addEventListener('click', await startListenert(car));
}

export async function onStop(car: HTMLDivElement) {
    const btn = car.querySelector('.stop');
    if (btn instanceof HTMLButtonElement) btn.addEventListener('click', await stopListener(car));
}
