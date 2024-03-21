import { getWinners } from '../../controllers/getWinners';
import './winners.css';

export async function createWinnersPage() {
    const totalCount = await getWinners();
    const inner = `<div class="winners"><h1 class="title winners-title">Winners ${totalCount}</h1>
    <h2 class="subtitle">Page #1</h2>
    </div>`;
    const main = document.getElementById('main');
    if (main) main.innerHTML = inner;
}
