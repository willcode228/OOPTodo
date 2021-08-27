let data = {
    template: {
        completed: [],
        uncompleted: []
    },
    completeStatus: true
};

if(localStorage.getItem('todos')){
    data = JSON.parse(localStorage.getItem('todos'));
}

export default data;