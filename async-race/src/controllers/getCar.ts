interface ICar {
    id: number;
    color: string;
    name: string;
}
export async function getCar(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
    });
    if (response.status === 200) {
        const car: ICar = await response.json();
        return car;
    }
    console.log('404 NOT Found');
    return null;
}
