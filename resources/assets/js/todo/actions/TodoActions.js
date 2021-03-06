var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

export default {

    /**
     * @param  {string} text
     */
    create(text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text:       text
        });
    },

    /**
     * @param  {string} id The ID of the ToDo item
     * @param  {string} text
     */
    updateText(id, text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_UPDATE_TEXT,
            id:         id,
            text:       text
        });
    },

    /**
     * Toggle whether a single ToDo is complete
     * @param  {object} todo
     */
    toggleComplete(todo) {
        var id = todo.id;
        var actionType = todo.complete ? TodoConstants.TODO_UNDO_COMPLETE
            : TodoConstants.TODO_COMPLETE;

        AppDispatcher.dispatch({
            actionType: actionType,
            id:         id
        });
    },

    /**
     * Mark all ToDos as complete
     */
    toggleCompleteAll() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_TOGGLE_COMPLETE_ALL
        });
    },

    /**
     * @param  {string} id
     */
    destroy(id) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY,
            id:         id
        });
    },

    /**
     * Delete all the completed ToDos
     */
    destroyCompleted() {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_DESTROY_COMPLETED
        });
    }

};