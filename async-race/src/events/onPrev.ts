import { decreaseGaragePage } from '../controllers/garagePages';

export function onPrev() {
    const footer = document.querySelector('footer');
    if (footer) {
        const prevBTN = footer.querySelector('.prev');
        if (prevBTN instanceof HTMLButtonElement) {
            prevBTN.addEventListener('click', decreaseGaragePage);
        }
    }
}
