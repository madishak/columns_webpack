// import sorterInput from './ui/sorter/sorterInput';
import './css__reset.css';
import { appContainer } from './ui/bubbleSortStateCommunication';

const app = document.getElementById('app') as HTMLElement;
app.append(appContainer());
