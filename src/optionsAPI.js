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