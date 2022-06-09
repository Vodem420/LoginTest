<template>
  <div>
    <div class="todo__list">
        <h2>
            <span v-for="todos in todo" :key="todos.id">
            {{ todos.text }} 
            </span>
        </h2>
    </div>
    <div class="todo__list">
        <!-- <input v-model="addTodo"> -->
        <VInput v-model="addTodo" placeholder="Enter To-do"  />
        <button class="btn btn__main" @click="addNew()">Add</button>
    </div>
  </div>
</template>

<script>
import VInput from './V-Input.vue'; 
  export default {
    components: { VInput },
    data() {
        return {
            addTodo: "",
            todo: [
                {
                    text: "TODO: HTML/CSS",
                    completed: false,
                    id: 1
                },
                {
                    text: "TODO: VUE",
                    completed: false,
                    id: 2
                },
                {
                    text: "TODO: GIT",
                    completed: false,
                    id: 3
                }
            ]
        };
    },
    methods: {
        addNew() {
          if(this.addTodo == ""){
            return false;
          } else{
            this.todo.push({
                text: 'TODO: ' + this.addTodo
            });
            this.addTodo = "";
          }
        }
    },
};
</script>