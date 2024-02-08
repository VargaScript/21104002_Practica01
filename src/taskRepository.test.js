const tasksRepository = require("./taskRepository");

describe("pruebas", () => {
  test("Get all tasks", () => {
    //Arrange
    let tasks = [];

    // Act
    tasks = tasksRepository.getAll();

    // Assert
    expect(tasks.length).toBe(2);
    expect(tasks.length == 2).toBe(true);
  });
});

describe("createTask", () => {
  test("Create a new task", () => {
    // Arrange
    const newTask = { title: "New Task", description: "Do something new" };

    // Act
    tasksRepository.createTask(newTask);

    // Assert
    expect(tasksRepository.getAll().length).toBe(3);
    expect(tasksRepository.getById(3)).toEqual({ id: 3, ...newTask });
  });
});

describe("updateTask", () => {
  test("Update existing task", () => {
    // Arrange
    const taskId = 1;
    const updatedTask = {
      title: "Updated Task",
      description: "Updated description",
    };

    // Act
    const updatedTaskResult = tasksRepository.updateTask(taskId, updatedTask);

    // Assert
    expect(updatedTaskResult).toEqual({ id: 1, ...updatedTask });
    expect(tasksRepository.getById(taskId)).toEqual(updatedTaskResult);
  });
});
