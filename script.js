const addFormButton = document.querySelector('.add-form-button');
const todoList = document.querySelector('.todo-list');

// Показываем/скрываем сообщение, что задач нет
function emptyTasksMessageManager() {
  const emptyTasks = document.querySelector('.empty-tasks');
  const remainingItems = document.querySelectorAll('.todo-list-item');
  remainingItems.length === 0
    ? emptyTasks.classList.remove('hidden')
    : emptyTasks.classList.add('hidden');
}

// Создание новой задачи
function createTodoItem(text) {
  const newTodoListItem = document.createElement('li');
  newTodoListItem.classList.add('todo-list-item');

  const label = document.createElement('label');
  const todoListInput = document.createElement('input');
  todoListInput.classList.add('todo-list-input');
  todoListInput.type = 'checkbox';

  const span = document.createElement('span');
  span.textContent = text;

  label.append(todoListInput, span);
  newTodoListItem.append(label);
  todoList.append(newTodoListItem);

  // Удаляем новую задачу если checked
  todoListInput.addEventListener('change', () => removeTask(newTodoListItem));
}

// Добавление задачи
addFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const addFormInput = document.querySelector('.add-form-input');
  if (addFormInput.value.trim() !== '') {
    createTodoItem(addFormInput.value.trim());
    addFormInput.value = '';
    emptyTasksMessageManager();
  }
});

// Удаляем задачи, если checked
const todoListItems = document.querySelectorAll('.todo-list-item');
todoListItems.forEach((todoListItem) => {
  const checkbox = todoListItem.querySelector('.todo-list-input');
  checkbox.addEventListener('change', () => removeTask(todoListItem));
});

// Удаляем задачу из DOM
function removeTask (task) {
  task.remove();
  emptyTasksMessageManager();
}

emptyTasksMessageManager(); // Проверка при загрузке страницы