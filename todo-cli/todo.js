/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    return all.filter(
      (todos) => todos.dueDate < new Date().toISOString().slice(0, 10)
    );
  };

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    return all.filter(
      (todos) => new Date().toISOString().slice(0, 10) === todos.dueDate
    );
  };

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    return all.filter(
      (todos) => new Date().toISOString().slice(0, 10) < todos.dueDate
    );
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    let r = "";
    for (const t of list) {
      const complete = t.completed ? "x" : " ";
      const dueDate = t.dueDate === today ? " " : `${t.dueDate}`;
      r = r + `[${complete}] ${t.title} ${dueDate}\n`;
    }
    return r.trim();
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
