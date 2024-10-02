import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([
  { name: 'Task 1', completed: false },
  { name: 'Task 2', completed: true }
]);

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push({ name: newTask.value, completed: false });
    newTask.value = '';
  }
};

const toggleComplete = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

const editTask = (index) => {
  const editedTask = prompt('Edit task', tasks.value[index].name);
  if (editedTask !== null && editedTask.trim() !== '') {
    tasks.value[index].name = editedTask;
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
