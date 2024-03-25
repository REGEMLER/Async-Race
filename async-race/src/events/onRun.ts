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

export async function run(btn: HTMLButtonElement, id: number, status: 'started' | 'stopped', car: SVGSVGElement) {
    return async () => {
        const flag = document.querySelector('.flag') as HTMLElement;
        const coordsFlag = flag.getBoundingClientRect();
        const flagEnd = coordsFlag.x - coordsFlag.width;
        const coordsCar = car.getBoundingClientRect().x - car.getBoundingClientRect().width;
        const thisBtn = btn;
        thisBtn.disabled = true;
        const result = await runEngine(id, status);
        console.log(result);
        if (result) {
            if (status === 'started') {
                const time = result.distance / result.velocity;
                console.log(time);
                const animation = animationForward(car, time, flagEnd);
                const isDrive = await driveEngine(id);
                console.log(isDrive);
                if (!isDrive) animation.pause();
            } else {
                animationBack(car, coordsCar);
            }
        }
        thisBtn.disabled = false;
    };
}

export async function onRun(btn: HTMLButtonElement, id: number, status: 'started' | 'stopped', car: SVGSVGElement) {
    btn.addEventListener('click', await run(btn, id, status, car));
}
