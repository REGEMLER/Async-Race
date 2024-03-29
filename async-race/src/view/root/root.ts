import './root.css';
import { onGarage } from '../../events/onGarage';
import { onWinners } from '../../events/onWinners';
import { createGaragePage } from '../garage/garage';

export function createRoot(): void {
    const root: HTMLDivElement = document.createElement('div');
    root.id = 'root';
    const header: HTMLElement = document.createElement('header');
    header.id = 'header';
    const headerInner: string = `<button class="btn header-btn" id="garage">Garage</button> <button class="btn header-btn-passive" id="winners">Winners</button>`;
    header.innerHTML = headerInner;
    const main: HTMLElement = document.createElement('main');
    main.id = 'main';
    root.append(header);
    root.append(main);
    document.body.append(root);
    onGarage();
    onWinners();
    createGaragePage();
}
