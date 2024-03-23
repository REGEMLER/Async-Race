export function createCarImg(color: string) {
    const car = `<svg class="car-img" width="200px" height="80px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1">
    <defs><style>.cls-1{fill:#${color};stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs>
    <circle class="cls-1" cx="6.27" cy="15.84" r="1.91"/>
    <circle class="cls-1" cx="17.73" cy="15.84" r="1.91"/>
    <line class="cls-1" x1="15.82" y1="15.84" x2="8.18" y2="15.84"/>
    <path class="cls-1" d="M4.36,15.84H1.5V13a1.9,1.9,0,0,1,1.91-1.91h1L5.48,8.83A2.87,2.87,0,0,1,8,7.25h7.3A2.84,2.84,0,0,1,17.63,8.4l2,2.67h.95A1.9,1.9,0,0,1,22.5,13v2.86H19.64"/>
    <line class="cls-1" x1="4.36" y1="11.07" x2="19.64" y2="11.07"/><line class="cls-1" x1="11.05" y1="7.25" x2="11.05" y2="11.07"/>
    </svg>`;
    return car;
}
