import Block from "./block.js";    
import { task, prefix } from "../utils/templpates.js";

class List extends Block {
    constructor(selector, del, complete, change) {
        super(selector);
        this.del = del;
        this.complete = complete;
        this.change = change;

        this._el.addEventListener('click', this.removeTask.bind(this));
        this._el.addEventListener('click', this.changeTaskStatus.bind(this));
        this._el.addEventListener('click', this.changeTaskText.bind(this));
    }
    
    render(data) {
        data.forEach((obj, index) => {
            this._el.insertAdjacentHTML('beforeend', task(this.checkPrefix(obj.str), index, obj.complete));
        });   
    }

    clearHtml() {
        this._el.innerHTML = '';
    } 

    removeTask(e) {
        let element = e.target;
        if(!element.classList.contains('task__delete')) return;
        this.del(element.closest('li'));
    }

    changeTaskText(e) {
        let element = e.target;
        if(!element.classList.contains('task__change')) return;
        this.change(element.closest('li'));
    }

    changeTaskStatus(e) {
        let element = e.target;
        if(!element.classList.contains('task__checkbox')) return;
        element.closest('li').classList.add('checked');
        setTimeout(() => {
            this.complete(element.closest('li'));
        }, 300);
    }

    checkPrefix(str) {
 
        const link = /^((ftp|http|https):\/\/)|(www\.)/,
            important = /\!/g,
            question = /\?/g;

        let result;

        if (question.test(str)) {
            str = str.replace(question, '');
            result = 'normal';
        }

        if (important.test(str)) {
            str = str.replace(important, '');
            result = 'critical';
        }

        if ((link).test(str)) {
            result = 'link';
        }

        return prefix(str, result);
    }

}

export default List;