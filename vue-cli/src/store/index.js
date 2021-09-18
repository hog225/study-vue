import Vue from 'vue'
import Vuex from 'vuex'
import {helloStore} from './modules/hello-store'

Vue.use(Vuex)

const store = new Vuex.Store(
    {
        modules: {
            [helloStore.namespace]:{
                ...helloStore,
                namespaced: true
            }
        }
    }
)

export default store