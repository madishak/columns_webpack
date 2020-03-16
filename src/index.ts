import './css__reset.css';
import { appContainer } from './SorterControllers/sortersController';

const app = document.getElementById('app');
if (app === null) {
  throw new Error('App container is not found');
}
app.append(appContainer());
