const routes = {
    //--> CRUD
    init: '/todolist',
    createTodo: '/todolist/create',
    getTodo: '/todolist/get/:id',
    getAllTodo: '/todolist/get',
    updateTodo: '/todolist/update/:id',
    deleteTodo: '/todolist/delete/:id',
};

module.exports = {
    routes
};