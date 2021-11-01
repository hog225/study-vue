<template>
  <div id="app">
    
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></ToDoFooter>
      <lodash-test></lodash-test>
      <refs-test></refs-test>

  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
import store from './store/index'
import LodashTest from './components/LodashTest.vue'
import RefsTest from './components/RefsTest.vue'

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
        LodashTest,
        RefsTest,
    
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