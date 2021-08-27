const render = (elem, data) => {
    if(!data.completeStatus) {
        elem.clearHtml();
        elem.render(data.template.uncompleted);
    } else {
        elem.clearHtml();
        elem.render(data.template.uncompleted);
        elem.render(data.template.completed);
    }
}

const storageUpdate = data => {
    localStorage.setItem('todos', JSON.stringify(data));
}

export const update = (data, list, panel) => {
    render(list, data);
    storageUpdate(data);
    panel.render(data.completeStatus, data.template.uncompleted.length);
}

export const elementInfo = element => {
    let elementIndex = element.attributes[0].value,
        elementName = element.attributes[0].name.replace(/data-/g, ''),
        reverseName = elementName == 'uncompleted' ? 'completed' : 'uncompleted';
        
    return [elementIndex, elementName, reverseName];
}