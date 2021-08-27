export function form() {
    return (`
        <input class="form__input" type="text" name="str" placeholder="New task">
        <button class="form__btn" type="submit"> Add new</button>
    `);
}

export function task(str, num, status) {
    let attribute = status ? 'data-completed' : 'data-uncompleted',
        klass = status ? 'list__task-comp' : 'list__task-uncomp';

    return (`
        <li ${attribute}="${num}" class="list__task ${klass}">

            <label for="${klass}checkbox${num}">
                <div class="circle-outside">
                    <div class="circle-inside"></div>
                </div>
            </label>
            <input class="task__checkbox" type="checkbox" ${status ? 'checked' : ''} id="${klass}checkbox${num}">
            ${str}
            <div class="task__btngroup">
                <button class="task__change">&#9998;</button>
                <button class="task__delete">&#10006;</button>
            </div> 
        </li>
    `);
}

export function panel(status, amount) {
    status = status ? 'Hide' : 'Show';
    amount = amount > 1 ? `${amount} tasks` : `${amount} task`;

    return (`
        <h1>You’ve got <span class="accent">${amount}</span> for today</h1>
        <button class="todo__show-btn" data-type="${status}">${status}</button>
    `); 
}

export function prefix(str, type='minor') {
    return type == 'link' 
            ? (`<span><a class="${type}" href="${str}" target="_blank">${str}</a></span>`)
            : (`<span class="${type}">${str}</span>`);
}