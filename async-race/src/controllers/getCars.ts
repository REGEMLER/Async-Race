import { getGaragePage } from './garagePages';

export interface Icar {
    id: number;
    name: string;
    color: string;
}

interface getCarResult {
    cars: Icar[];
    totalCount: string;
}

export async function getCars(): Promise<getCarResult> {
    const page: string = getGaragePage();
    const response: Response = await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`);
    const cars: Icar[] = await response.json();
    let totalCount: string = '0';
    if (response.headers.has('X-Total-Count')) {
        const totalCountHeader: string | null = response.headers.get('X-Total-Count');
        if (totalCountHeader) {
            totalCount = totalCountHeader;
        }
    }
    return { cars, totalCount };
}
