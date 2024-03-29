import { runEngine } from './runEngine';

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

export async function stop(car: HTMLDivElement) {
    const btnStart: HTMLButtonElement = car.querySelector(`.start`) as HTMLButtonElement;
    const btnStop: HTMLButtonElement = car.querySelector(`.stop`) as HTMLButtonElement;
    const carIMG: SVGSVGElement = car.querySelector('.car-img') as SVGSVGElement;
    const id = Number(car.id);
    const coordsCar: number = carIMG.getBoundingClientRect().x - carIMG.getBoundingClientRect().width;
    btnStart.disabled = false;
    btnStop.disabled = true;
    const result = await runEngine(id, 'stopped');
    if (result) {
        animationBack(carIMG, coordsCar);
    }
}
