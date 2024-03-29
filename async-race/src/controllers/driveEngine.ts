interface iResult {
    success: boolean;
}

export async function driveEngine(id: number): Promise<boolean> {
    const response: Response = await fetch(`http://127.0.0.1:3000/engine/?id=${id}&status=drive`, {
        method: 'PATCH',
    });
    if (response.status === 500) {
        console.log('Your car has been broken down!');
        return false;
    }
    if (response.status === 200) {
        const result: iResult = await response.json();
        return result.success;
    }
    return false;
}
