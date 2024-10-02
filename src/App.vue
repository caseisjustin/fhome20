<template>
  <div>
    <h2>Todo List</h2>
    <input class="" v-model="newTask" @keyup.enter="addTask" placeholder="Add a new task" />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.name }}</span>
        <button @click="toggleComplete(index)">✔</button>
        <button @click="editTask(index)">✎</button>
        <button @click="deleteTask(index)">🗑</button>
      </li>
    </ul>
  </div>
</template>


<!-- OPTIONS API -->
<!-- <script>
export default {
    data() {
      return {
        newTask: '',
        tasks: [
          { name: 'Task 1', completed: false },
          { name: 'Task 2', completed: true }
        ]
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push({ name: this.newTask, completed: false });
          this.newTask = '';
        }
      },
      toggleComplete(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
      editTask(index) {
        const editedTask = prompt('Edit task', this.tasks[index].name);
        if (editedTask !== null && editedTask.trim() !== '') {
          this.tasks[index].name = editedTask;
        }
      },
      deleteTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  };
</script> -->




<!-- COMPOSITION API -->
<!-- <script>
import { ref } from 'vue';

export default {
  setup() {
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

    return { newTask, tasks, addTask, toggleComplete, editTask, deleteTask };
  }
};

</script> -->






<!-- COMPOSITION API SCRIPT SETUP -->
<script setup>
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

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
