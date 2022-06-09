<template>
    <div class="todo__wrapper">
       <div class="todo">
           <img :src="$img['MainLogo']" alt="Citi" />
           <div class="todo__listWrapper">
               <h1>Thank you</h1>
               <ToDoList/>
           </div>
       </div>
    </div>
</template>

<script>
import ToDoList from '@/components/To-doList.vue';
export default{
    components: { ToDoList }
}
</script>
