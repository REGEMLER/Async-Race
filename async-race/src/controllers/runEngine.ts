interface iResult {
    distance: number;
    velocity: number;
}

export async function runEngine(id: number, status: string): Promise<iResult | null> {
    const response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=${status}`, {
        method: 'PATCH',
    });
    if (response.status === 200) {
        const result: iResult = await response.json();
        return result;
    }
    return null;
}
