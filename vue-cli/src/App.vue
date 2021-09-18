<template>
  <div>
    {{ str }}
    <app-header 
      v-bind:propsdata="headerStr"
      v-on:renew="renewStr"
      ></app-header>
      <br />
      <p>----------------------------------------------------</p>
    <form-main></form-main>
  </div>

</template>

<script>
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
      headerStr: 'header'
    }
  },
  components: {
    'app-header': AppHeader,
    'form-main': FormMain
  },
  methods: {
    renewStr: function(){
      this.headerStr = "power"
    }
  }


}
</script>

<style>

</style>