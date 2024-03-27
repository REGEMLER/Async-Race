export async function updateWinner(id: number, wins: number, time: number) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
        method: 'PUT',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            wins: wins,
            time: time,
        }),
    });
    if (response.status === 200) {
        console.log('The winner was successfully updated');
    } else {
        console.log('The winner was not successfully updated');
    }
}
