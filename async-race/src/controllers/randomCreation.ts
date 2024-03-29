import { createGaragePage } from '../view/garage/garage';

interface IcarModel {
    name: string;
    type: string[];
}

const CARS: IcarModel[] = [
    {
        name: 'Volvo',
        type: ['S60', 'S60 Cross', 'S90', 'V40 Cross', 'V40', 'V60', 'V60 Polestar', 'V90', 'XC40', 'C40'],
    },
    {
        name: 'Mercedes',
        type: ['AMG GT', 'GLA', 'Maybach', 'S-class', 'A-class', 'AMG', 'CLA', 'GT Liftback', 'E-class', 'V-class'],
    },
    {
        name: 'Ford',
        type: ['Aerostar', 'Aspire', 'Bantam', 'B-MAX', 'Bronco II', 'C-MAX', 'Contour', 'Corcel', 'Focus', 'Bronco I'],
    },
    {
        name: 'Fiat',
        type: ['Cinquecento', 'Doblo', 'Ducato', '130', '500', 'Panda', 'Siena', 'Tipo', 'Uno', 'Ritmo'],
    },
    {
        name: 'BMW',
        type: ['X7', 'X6', 'X5', 'X4', 'X3', 'X2', 'X1', 'XM', 'Long', 'GT'],
    },
    {
        name: 'Toyota',
        type: ['Camry', 'C-HR', 'RAV4', 'Fortuner', 'Alphard', 'Corolla', 'Vitz', 'Harrier', 'Wish', 'Aqua'],
    },
    {
        name: 'Opel',
        type: ['Corsa', 'Astra', 'Insignia', 'Vivaro', 'Zafira', 'Movano', 'Combo', 'Crossland', 'Agila', 'Mokka'],
    },
    {
        name: 'Volkswagen',
        type: ['Caddy', 'Crafter', 'CrossPolo', 'Jetta', 'Multivan', 'Passat', 'Variant', 'Tiguan', 'Golf', 'Polo'],
    },
    {
        name: 'Renault',
        type: ['Logan', 'Sandero', 'Duster', 'Dakar', 'Kaptur', 'Koleos', 'Dokker', 'Master', 'ARKANA', 'STEPWAY'],
    },
    {
        name: 'Skoda',
        type: ['Enyaq', 'Kodiaq', 'Karoq', 'Kamiq', 'Kushaq', 'Superb', 'Octavia', 'Slavia', 'Rapid', 'Scala'],
    },
];

function generateName(): string {
    const firstNumber: number = Math.floor(0 + Math.random() * (9 + 1 - 0));
    const secondNumber: number = Math.floor(0 + Math.random() * (9 + 1 - 0));
    const carName: string = CARS[firstNumber].name;
    const carType: string = CARS[firstNumber].type[secondNumber];
    return `${carName} ${carType}`;
}

function generateColor(): string {
    let color: string = '#';
    const HEX: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < 6; i += 1) {
        const item = HEX.sort(() => Math.random() - 0.5);
        color += item[0];
    }
    return color;
}

export async function generateCars(): Promise<void> {
    const body = [];
    for (let i = 0; i < 99; i += 1) {
        const name: string = generateName();
        const color: string = generateColor();
        body.push({ name, color });
    }
    const requests = body.map((car) =>
        fetch('http://127.0.0.1:3000/garage', {
            method: 'POST',
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: car.name,
                color: car.color,
            }),
        })
    );
    await Promise.all(requests);
    await createGaragePage();
}
