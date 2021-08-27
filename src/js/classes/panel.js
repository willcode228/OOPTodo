import Block from "./block.js";
import { panel } from "../utils/templpates.js";

class Panel extends Block {
    constructor(selector, callback) {
        super(selector);
        this.change = callback;

        this._el.addEventListener('click', this.changeCompleteStatus.bind(this));
    }

    render(status, amount) {
        this._el.innerHTML = '';
        this._el.insertAdjacentHTML('afterbegin', panel(status, amount));
    }

    changeCompleteStatus(e) {
        if(!e.target.classList.contains('todo__show-btn')) return;
        this.change();
    }
}

export default Panel;