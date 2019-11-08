import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre:'Manzana',cantidad:0},
      {nombre:'Pera',cantidad:0},
      {nombre:'Naranja',cantidad:0},
    ]
  },
  mutations: {
    /* Nesitamos el parametro index para que se pueda dectectar el elemento */
    aumentar(state, index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      state.frutas.forEach(elemento => {
        elemento.cantidad = 0
      })
    },

  },
  actions: {
  },
  modules: {
  }
})
