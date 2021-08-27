import List from "./list.js";
import Form from "./form.js";
import Panel from "./panel.js";
import { elementInfo, update } from "../utils/pureFunctions.js"

class App {
    constructor(data) {
        this.data = data;
    }

    init() {

        const addNewTask = value => {
            let newTask = {str: value, complete: false};
            this.data.template.uncompleted.push(newTask);
            update(this.data, list, panel);
        }
        
        const removeTask = element => {
            let [elementIndex, elementName] = elementInfo(element);
            this.data.template[elementName].splice(elementIndex, 1);
            update(this.data, list, panel);
        }

        const changeTaskStatus = element => {
            let [elementIndex, elementName, reverseName] = elementInfo(element);

            let tmp = this.data.template[elementName].splice(elementIndex, 1)[0];
            tmp.complete = !tmp.complete;

            reverseName == 'completed' ? this.data.template[reverseName].push(tmp)
                                       : this.data.template[reverseName].unshift(tmp);

            update(this.data, list, panel);
        }

        const changeCompleteTaskVisible = () => {
            this.data.completeStatus = !this.data.completeStatus;
            update(this.data, list, panel);
        }

        const changeTaskText = element => {
            let newTaskText = prompt('', element.querySelector('span').textContent);
            newTaskText = newTaskText.trim();
            if(!newTaskText) return;

            let [elementIndex, elementName] = elementInfo(element);

            this.data.template[elementName][elementIndex].str = newTaskText;
            update(this.data, list, panel);
        }

        const list = new List('.todo__list', removeTask, changeTaskStatus, changeTaskText);
        const panel = new Panel('.todo__show', changeCompleteTaskVisible);
        new Form('.todo__form', addNewTask);

        update(this.data, list, panel);
    }

}

export default App;