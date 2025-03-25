const addForm = document.querySelector('.add-form');
const todoList = document.querySelector('.todo-list');

// Показываем/скрываем сообщение, что задач нет
function emptyTasksMessageManager() {
  const emptyTasks = document.querySelector('.empty-tasks');
  emptyTasks.classList.toggle('hidden', todoList.children.length > 0);
}

// Создание новой задачи
function createTodoItem(text) {
  const template = document.getElementById('task-template');
  const newTodoListItem = template.content.cloneNode(true);
  newTodoListItem.querySelector('span').textContent = text;
  todoList.append(newTodoListItem);
}

// Добавление задачи
addForm.addEventListener('submit', (evt) => {
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