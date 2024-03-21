import './garage.css';
import { getCars } from '../../controllers/getCars';

export async function createGaragePage() {
    const totalCount = await getCars();
    const inner = `<div class="garage"><h1 class="title garage-title">Garage ${totalCount}</h1>
    <h2 class="subtitle">Page #1</h2>
    </div>`;
    const main = document.getElementById('main');
    if (main) main.innerHTML = inner;
}
