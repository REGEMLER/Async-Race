import { getGaragePage } from './garagePages';

export async function getCars() {
    const page = getGaragePage();
    const response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`);
    const cars = await response.json();
    let totalCount: string | null = '0';
    if (response.headers.has('X-Total-Count')) {
        totalCount = response.headers.get('X-Total-Count');
    }
    return { cars, totalCount };
}
