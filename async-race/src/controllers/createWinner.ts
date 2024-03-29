export async function createWinner(id: number, wins: number, time: number): Promise<void> {
    const response: Response = await fetch('http://127.0.0.1:3000/winners', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: id,
            wins: wins,
            time: time,
        }),
    });
    if (response.status === 201) {
        console.log('The winner was succesfully created');
    } else {
        console.log('Error! The winner was not succesfully created');
    }
}
