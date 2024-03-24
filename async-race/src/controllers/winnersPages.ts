export function getWinnersPage() {
    const page = localStorage.getItem('winnerPage');
    if (page) return page;
    return 1;
}
