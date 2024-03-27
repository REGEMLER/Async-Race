import { driveEngine } from './driveEngine';
import { runEngine } from './runEngine';

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
        return { time, id, isDrive };
    }
    return null;
}
