import workSchedule from './components/components.js';
import {worktime} from './components/worktime.js';

const headerTopline = document.querySelector('.header__work-info');
const workList = new worktime(workSchedule);
headerTopline.append(workList.elem);