/* eslint-disable no-undef */
const todoList = require("../todo");
const thisDay = new Date();
const inDay = 60 * 60 * 24 * 1000;

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("TodoList Test Suite", () => {
  beforeAll(() => {
    [
      {
        title: "Buy milk",
        completed: false,
        dueDate: new Date(thisDay.getTime() - 2 * inDay)
          .toISOString()
          .slice(0, 10),
      },
      {
        title: "Pay Rent",
        completed: false,
        dueDate: new Date().toISOString().slice(0, 10),
      },
      {
        title: "Submit Assignment",
        completed: false,
        dueDate: new Date(thisDay.getTime() + 2 * inDay)
          .toISOString()
          .slice(0, 10),
      },
    ].forEach(add);
  });

  test("Should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toEqual(todoItemCount + 1);
  });

  test("Should mark a todo as complete", () => {
    const todoItemCount = all.length;
    add({
      title: "test todo completed",
      completed: false,
      dueDate: new Date(thisDay.getTime() - 2 * inDay)
        .toISOString()
        .slice(0, 10),
    });
    expect(all[todoItemCount].completed).toBe(false);
    markAsComplete(todoItemCount);
    expect(all[todoItemCount].completed).toBe(true);
  });

  test("retrieving overdue items", () => {
    const overdueItem = overdue().length;
    add({
      title: "test overdue",
      completed: false,
      dueDate: new Date(thisDay.getTime() - 2 * inDay)
        .toISOString()
        .slice(0, 10),
    });
    expect(overdue().length).toEqual(overdueItem + 1);
  });

  test("retrieving dueToday items", () => {
    const dueTodayItem = dueToday().length;
    add({
      title: "test dueToday",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(dueToday().length).toEqual(dueTodayItem + 1);
  });

  test("retrieving dueLater items", () => {
    const dueLaterItem = dueLater().length;
    add({
      title: "test dueToday",
      completed: false,
      dueDate: new Date(thisDay.getTime() + 2 * inDay)
        .toISOString()
        .slice(0, 10),
    });
    expect(dueLater().length).toEqual(dueLaterItem + 1);
  });
});
