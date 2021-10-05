<template>
  <div id="app">
    {{ str }}
    <app-header 
      v-bind:propsdata="headerStr"
      v-on:renew="renewStr"
      ></app-header>
      <br />
      <p>----------------------------------------------------</p>
    <form-main></form-main>
    <p>{{ HELLO.helloKey }}</p>
    <button v-on:click="updateStore">Store Test</button>
    <router-view></router-view>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import AppHeader from './components/AppHeader.vue'
import FormMain from './components/FormMain.vue'
import router from './router'
import store from './store'


export default {
  store,
  router,
  data: function(){
    return {
      str: 'hi',
      headerStr: 'header',
      storeVal: store.state.HELLO.helloKey
    }
  },
  components: {
    'app-header': AppHeader,
    'form-main': FormMain
  },
  methods: {
    renewStr: function(){
      this.headerStr = "power"
    },
    updateStore: function() {
      console.log(store)
      store.commit('HELLO/setHelloKey', 'fef');
      //store.dispatch('HELLO/getHelloKey')
    }
  },
  computed: {
    ...mapState(["HELLO"])
  }


}
</script>

<style>

</style>