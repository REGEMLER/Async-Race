import { isFirstPage, isLastpage } from '../../controllers/garagePages';
import { onGarage } from '../../events/onGarage';
import { onWinners } from '../../events/onWinners';
import { createGaragePage } from '../garage/garage';
import './root.css';

export async function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const prevBTN = document.createElement('button');
    prevBTN.classList.add('btn');
    prevBTN.classList.add('prev');
    prevBTN.textContent = 'Prev';
    prevBTN.disabled = isFirstPage();
    const nextBTN = document.createElement('button');
    nextBTN.classList.add('btn');
    nextBTN.classList.add('next');
    nextBTN.textContent = 'Next';
    const isNextDisabled = await isLastpage();
    nextBTN.disabled = isNextDisabled;
    footer.append(prevBTN);
    footer.append(nextBTN);
    return footer;
}

export function createRoot() {
    const root = document.createElement('div');
    root.id = 'root';
    const header = document.createElement('header');
    header.id = 'header';
    const headerInner = `<button class="btn header-btn" id="garage">Garage</button> <button class="btn header-btn-passive" id="winners">Winners</button>`;
    header.innerHTML = headerInner;
    const main = document.createElement('main');
    main.id = 'main';
    root.append(header);
    root.append(main);
    document.body.append(root);
    onGarage();
    onWinners();
    createGaragePage();
}
