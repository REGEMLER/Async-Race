import './footer.css';

export async function createFooter(isFirst: () => boolean, isLast: () => Promise<boolean>): Promise<HTMLElement> {
    const footer: HTMLElement = document.createElement('footer');
    footer.classList.add('footer');
    const prevBTN: HTMLButtonElement = document.createElement('button');
    prevBTN.classList.add('btn');
    prevBTN.classList.add('prev');
    prevBTN.textContent = 'Prev';
    prevBTN.disabled = isFirst();
    const nextBTN: HTMLButtonElement = document.createElement('button');
    nextBTN.classList.add('btn');
    nextBTN.classList.add('next');
    nextBTN.textContent = 'Next';
    const isNextDisabled = await isLast();
    nextBTN.disabled = isNextDisabled;
    footer.append(prevBTN);
    footer.append(nextBTN);
    return footer;
}
