// TARGET ELEMENT
const form = document.querySelector('#form');
const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const filter = document.querySelector('#filter');
const todoList = document.querySelector('#todo-list');
const clearBtn = document.querySelector('#clear-btn');

// Load all EventListeners
allEventListeners();

// Set All EventListeners
function allEventListeners() {
  // Add Goal
  form.addEventListener('submit', addGoal);
  // Remove Goal
  todoList.addEventListener('click', removeGoal);
  // All Goal Clear
  clearBtn.addEventListener('click', allGoalClear);
  // Filter Goal
  filter.addEventListener('keyUp', filterGoal);
}

// Add Goal
function addGoal(e) {
  if (todoInput.value === '') {
    alert('Please Add Your Goal');
  }

  // Create li
  const li = document.createElement('li');
  // Add class
  li.className = 'todo-item';
  // Append and add textnode
  li.appendChild(document.createTextNode(todoInput.value));
  // Create link
  const link = document.createElement('a');
  // Add class
  link.className = 'remove-item';
  // Add innerHTML
  link.innerHTML = '<i class="fas fa-times"></i>';
  // Append link in li
  li.appendChild(link);
  // Append li in ul
  todoList.appendChild(li);

  // Clear input value
  todoInput.value = '';

  e.preventDefault();
}

// Remove Goal
function removeGoal(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

// All Goal Clear
function allGoalClear(e) {
  // todoList.innerHTML = '';

  // Another way
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
    if (todoList.firstChild) {
      confirm('Are You Sure ?');
    }
  }
}

// Filter All Goal
function filterGoal(e) {
  const text = e.target.value.tolowercase;

  console.log(text);
}