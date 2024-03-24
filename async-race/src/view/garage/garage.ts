import './garage.css';
import { getCars } from '../../controllers/getCars';
import { addCar } from '../cars/addCar';
import { onCreate } from '../../events/onCreate';

interface Icar {
    id: number;
    name: string;
    color: string;
}

function createFormFuild(): HTMLDivElement {
    const form = document.createElement('div');
    form.classList.add('form');
    const inner = `
        <div class="form-item">
            <input type="text" class="input-text" id="createName"/>
            <input type="color" class="input-color" id="createColor"/>
            <button class="btn" id="create">Create</button>
        </div>
        <div class="form-item">
            <input type="text" class="input-text" id="updateName" disabled/>
            <input type="color" class="input-color" id="updateColor" disabled/>
            <button class="btn" id="update" disabled>Update</button>
        </div>
        <div class="form-item">
            <button class="btn" id="race">Race</button>
            <button class="btn" id="reset">Reset</button>
            <button class="btn" id="generate">Generate Cars</button>
        </div>`;
    form.innerHTML = inner;
    return form;
}

function createTitle(totalCount: string | null): HTMLHeadingElement {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.classList.add('garage-title');
    title.textContent = `Garage ${totalCount}`;
    return title;
}

function createSubtitle(): HTMLHeadingElement {
    const subtitle = document.createElement('h2');
    subtitle.classList.add('subtitle');
    subtitle.textContent = 'Page #1';
    return subtitle;
}

export async function createGaragePage() {
    const main = document.getElementById('main');
    if (main) {
        main.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.classList.add('garage');
        const { cars, totalCount } = await getCars();
        const form = createFormFuild();
        const title = createTitle(totalCount);
        const subtitle = createSubtitle();
        wrapper.append(form);
        wrapper.append(title);
        wrapper.append(subtitle);
        cars.forEach((car: Icar) => {
            console.log(car);
            const carElement = addCar(car.name, car.color, car.id);
            wrapper.append(carElement);
        });
        main.append(wrapper);
        onCreate();
    }
}
