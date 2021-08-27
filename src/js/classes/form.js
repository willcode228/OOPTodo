import Block from "./block.js";
import { form } from "../utils/templpates.js";

class Form extends Block {
    constructor(selector, callback) {
        super(selector);
        this.add = callback;

        this.init();
    }

    init() {
        this._el.insertAdjacentHTML('afterbegin', this.template);
        this._el.addEventListener('submit', this.addTask.bind(this));
    }

    addTask(e) {
        e.preventDefault();

        const inputElement = e.target.str,
            inputValue = inputElement.value.trim();

        if(!inputValue) return;
        this.add(inputValue);

        inputElement.value = '';
    }

    get template() {
        return form();
    }
}

export default Form;