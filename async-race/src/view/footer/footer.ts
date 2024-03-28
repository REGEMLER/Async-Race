import './footer.css';

export async function createFooter(isFirst: () => boolean, isLast: () => Promise<boolean>) {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const prevBTN = document.createElement('button');
    prevBTN.classList.add('btn');
    prevBTN.classList.add('prev');
    prevBTN.textContent = 'Prev';
    prevBTN.disabled = isFirst();
    const nextBTN = document.createElement('button');
    nextBTN.classList.add('btn');
    nextBTN.classList.add('next');
    nextBTN.textContent = 'Next';
    const isNextDisabled = await isLast();
    nextBTN.disabled = isNextDisabled;
    footer.append(prevBTN);
    footer.append(nextBTN);
    return footer;
}
