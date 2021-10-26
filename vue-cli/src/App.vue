<template>
  <div id="app">
    
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></ToDoFooter>

  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import store from './store/index'

// var my_comp = {
//     template: '<div>my Component </div>'
// };



export default {
    store,
    components:{
        'TodoHeader': TodoHeader,
        'TodoInput': TodoInput,
        'TodoList': TodoList,
        'TodoFooter': TodoFooter,
    
    }

}
</script>

<style>
body {
    text-align: center;
    background-color: aliceblue;
}

input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
    
}
</style>