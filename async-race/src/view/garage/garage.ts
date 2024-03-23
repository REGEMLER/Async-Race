import './garage.css';
import { getCars } from '../../controllers/getCars';
import { createCar } from '../cars/createCar';

function createFormFuild(): HTMLDivElement {
    const form = document.createElement('div');
    form.classList.add('form');
    const inner = `
        <div class="form-item">
            <input type="text" class="input-text"/>
            <input type="color" class="input-color"/>
            <button class="btn" id="create">Create</button>
        </div>
        <div class="form-item">
            <input type="text" class="input-text"/>
            <input type="color" class="input-color"/>
            <button class="btn" id="update">Update</button>
        </div>
        <div class="form-item">
            <button class="btn" id="race">Race</button>
            <button class="btn" id="reset">Reset</button>
            <button class="btn" id="generate">Generate Cars</button>
        </div>`;
    form.innerHTML = inner;
    return form;
}

async function createTitle(): Promise<HTMLHeadingElement> {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.classList.add('garage-title');
    const totalCount = await getCars();
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
        const form = createFormFuild();
        const title = await createTitle();
        const subtitle = createSubtitle();
        const car = createCar();
        const car2 = createCar();
        const car3 = createCar();
        const car4 = createCar();
        wrapper.append(form);
        wrapper.append(title);
        wrapper.append(subtitle);
        wrapper.append(car);
        wrapper.append(car2);
        wrapper.append(car3);
        wrapper.append(car4);
        main.append(wrapper);
    }
}
