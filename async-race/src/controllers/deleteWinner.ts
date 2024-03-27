export async function deleteWinner(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/winners/${id}`, {
        method: 'DELETE',
        headers: { Accept: 'application/json' },
    });
    if (response.status === 200) {
        console.log('The winner was successfully deleted');
    } else {
        console.log('The winner was not successfully deleted');
    }
}
