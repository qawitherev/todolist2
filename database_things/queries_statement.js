const queries = {
    //-->CRUD
    createTodo: '',
    getTodo: 'SELECT * FROM todos WHERE id = ?',
    getAllTodo: 'SELECT * FROM todos',
    updateTodo: '',
    deleteTodo: ''
};

module.exports = {
    queries
};