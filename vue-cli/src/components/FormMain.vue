<template>
<!-- 아래 prevent 는 기본이벤트 발생을 막는다.  -->
  <form v-on:submit.prevent="submitForm"> 
      <div>
          <label for = "username">id: </label>
          <input id="username" type="text" v-model="username">
      </div>
      <div>
          <label for="password">pw: </label>
          <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">Login</button>
  </form>
  <!-- form 의 기본 동작은 새로 고침  -->
</template>

<script>
import axios from 'axios';

export default {
    data: function(){
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        submitForm: function(){
            //event.preventDefault(); // form 의 기본 이벤트(새로고침)를 막는다 
            console.log(this.username, this.password)
            let url = 'https://jsonplaceholder.typicode.com/users';
            var data = {
                username: this.username,
                password: this.password
            }
            axios.post(url, data)
            .then(
                function(response){
                    console.log(response)

                }
            )
            .catch(
                function(error){
                    console.log(error);
                }
            );
        }
    }

}
</script>

<style>

</style>