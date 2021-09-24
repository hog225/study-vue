import Vue from 'vue'
import Vuex from 'vuex'
import {helloStore} from './modules/hello-store'

// use 는 플러그인이고 Vue 를 사용하는 모든 영역에서 해당 라이브러리에 접근할 때 사용 
Vue.use(Vuex)
const storage = {
    fetch(){
        const arrs = [];
        if (localStorage.length > 0)
        {
            for (let i=0; i < localStorage.length; i++){
                if (localStorage.key(i) != "loglevel:webpack-dev-server")
                    arrs.push(localStorage.key(i))
            }
        }
        return arrs;
    
    }
};
const store = new Vuex.Store({
        modules: {
            [helloStore.namespace]:{
                ...helloStore,
                namespaced: true
            }
        },
        state: {
            headerText: "TODO APP !!!",
            todoItems: storage.fetch(),
        },
        mutations: {
            addOnItem: (state, payload) => {
                console.log(payload)
                state.todoItems.push(payload.item)
                localStorage.setItem(payload.item, payload.item)
            }
        }
    })

export default store