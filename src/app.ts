import { ProjectInput } from './components/project-input';
import { ProjectList } from './components/project-list';

new ProjectInput()

const projectListContainer = document.getElementById('active-finished-projects')!;

const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');

projectListContainer.appendChild(activePrjList.element);
projectListContainer.appendChild(finishedPrjList.element);



