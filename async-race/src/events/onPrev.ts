export function onPrev(cb: () => void) {
    const footer = document.querySelector('footer');
    if (footer) {
        const prevBTN = footer.querySelector('.prev');
        if (prevBTN instanceof HTMLButtonElement) {
            prevBTN.addEventListener('click', cb);
        }
    }
}
