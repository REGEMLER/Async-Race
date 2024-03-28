export function onNext(cb: () => Promise<void>) {
    const footer = document.querySelector('footer');
    if (footer) {
        const nextBTN = footer.querySelector('.next');
        if (nextBTN instanceof HTMLButtonElement) {
            nextBTN.addEventListener('click', cb);
        }
    }
}
