import './index.css';
import { createRoot } from './view/root/root';

createRoot();

window.addEventListener('beforeunload', () => {
    localStorage.clear();
});
