import { onGarage } from '../../events/onGarage';
import { onWinners } from '../../events/onWinners';
import { createGaragePage } from '../garage/garage';
import './root.css';

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
