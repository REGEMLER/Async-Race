import { increaseGaragePage } from '../controllers/garagePages';

export function onNext() {
    const footer = document.querySelector('footer');
    if (footer) {
        const nextBTN = footer.querySelector('.next');
        if (nextBTN instanceof HTMLButtonElement) {
            nextBTN.addEventListener('click', increaseGaragePage);
        }
    }
}
