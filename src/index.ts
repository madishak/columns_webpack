import './css__reset.css';
import { appContainer } from './SorterControllers/sortersController';

const app = document.getElementById('app') as HTMLElement;
app.append(appContainer());
