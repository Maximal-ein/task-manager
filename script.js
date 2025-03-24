const addFormButton = document.querySelector('.add-form-button');
const todoList = document.querySelector('.todo-list');

// Показываем/скрываем сообщение, что задач нет
function emptyTasksMessageManager() {
  const emptyTasks = document.querySelector('.empty-tasks');
  emptyTasks.classList.toggle('hidden', todoList.children.length > 0);
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

// Удаляем задачи из DOM, если checked
todoList.addEventListener('change', (evt) => {
  if (evt.target.classList.contains('todo-list-input')) {
    const todoListItem = evt.target.closest('.todo-list-item');
    if (todoListItem) {
      todoListItem.remove();
      emptyTasksMessageManager();
    }
  }
});

emptyTasksMessageManager(); // Проверка при загрузке страницы