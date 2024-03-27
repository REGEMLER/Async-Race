import './modal.css';
export function createModal(winMessage: string) {
    const root: HTMLElement | null = document.getElementById('root');
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
        <div class="modal_inner">${winMessage}</div>
        `;
    if (root) {
        root.append(modal);
        document.body.style.overflowY = 'hidden';
    }
    return modal;
}
