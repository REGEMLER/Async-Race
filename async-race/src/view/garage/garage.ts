import './garage.css';
import { getCars, Icar } from '../../controllers/getCars';
import { addCar } from '../cars/addCar';
import { onCreate } from '../../events/onCreate';
import { createFooter } from '../footer/footer';
import {
    decreaseGaragePage,
    getGaragePage,
    increaseGaragePage,
    isFirstPage,
    isLastpage,
} from '../../controllers/garagePages';
import { onPrev } from '../../events/onPrev';
import { onNext } from '../../events/onNext';
import { onGenerate } from '../../events/onGenerate';
import { onRace } from '../../events/onRace';
import { onReset } from '../../events/onReset';

function createFormFuild(): HTMLDivElement {
    const form: HTMLDivElement = document.createElement('div');
    form.classList.add('form');
    const inner: string = `
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
            <button class="btn" id="reset" disabled>Reset</button>
            <button class="btn" id="generate">Generate Cars</button>
        </div>`;
    form.innerHTML = inner;
    return form;
}

function createTitle(totalCount: string): HTMLHeadingElement {
    const title: HTMLHeadingElement = document.createElement('h1');
    title.classList.add('title');
    title.classList.add('garage-title');
    title.textContent = `Garage (${totalCount})`;
    return title;
}

function createSubtitle(): HTMLHeadingElement {
    const page: string = getGaragePage();
    const subtitle: HTMLHeadingElement = document.createElement('h2');
    subtitle.classList.add('subtitle');
    subtitle.textContent = `Page #${page}`;
    return subtitle;
}

export async function createGaragePage(): Promise<void> {
    const main: HTMLElement | null = document.getElementById('main');
    if (main) {
        main.innerHTML = '';
        const wrapper: HTMLDivElement = document.createElement('div');
        wrapper.classList.add('garage');
        const { cars, totalCount } = await getCars();
        const form: HTMLDivElement = createFormFuild();
        const title: HTMLHeadingElement = createTitle(totalCount);
        const subtitle: HTMLHeadingElement = createSubtitle();
        const footer: HTMLElement = await createFooter(isFirstPage, isLastpage);
        wrapper.append(form, title, subtitle);
        cars.forEach((car: Icar) => {
            const carElement: HTMLDivElement = addCar(car.name, car.color, car.id);
            wrapper.append(carElement);
        });
        wrapper.append(footer);
        main.append(wrapper);
        onCreate();
        onPrev(decreaseGaragePage);
        onNext(increaseGaragePage);
        onGenerate();
        onRace();
        onReset();
    }
}
