export async function getWinners() {
    const response = await fetch('http://127.0.0.1:3000/winners?_limit=7');
    if (response.headers.has('X-Total-Count')) {
        return response.headers.get('X-Total-Count');
    }
    return 0;
}
