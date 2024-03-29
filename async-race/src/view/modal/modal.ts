import './modal.css';

export function createModal(winMessage: string): HTMLElement {
    const root: HTMLElement | null = document.getElementById('root');
    const modal: HTMLElement = document.createElement('DIV');
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
