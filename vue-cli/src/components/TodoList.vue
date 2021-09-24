<template>
  <div>
      <ul>
          <li v-for="(todoitem, index) in this.$store.state.todoItems" v-bind:key="todoitem">
              
              <!-- <input type="checkbox" class="checkBtn" v-on:click="toggleComp"> -->
              {{ todoitem }}
              <button v-on:click="deleteTodo(todoitem, index)">Del</button>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
   
    data: function() {
        return {
            todoItems: []
        }
    },
     // 라이프 사이클 훅 
    // created: function() {
    //     if (localStorage.length > 0)
    //     {
    //         for (let i=0; i < localStorage.length; i++){
    //             if (localStorage.key(i) != "loglevel:webpack-dev-server")
    //                 this.todoItems.push(localStorage.key(i))
    //         }
    //     }
    // },
    methods:{
        deleteTodo: function(todoitem, index) {
            console.log(todoitem, index)
            localStorage.removeItem(todoitem)
            // 배열 내용 삭제 
            this.todoItems.splice(index, 1);

        },
        // toggleCom: function(){
        //     console.log('toogle  ')
        // }
    }
}
</script>

<style>

</style>