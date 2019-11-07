/* Componente Pardre*/
Vue.component('titulo',{
    template://html
    `
    <div>
        <h1>numero {{$store.state.numero}}</h1>
        <button @click="disminuir(2)"> - </button>
        <hijo></hijo>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero'])
        /* numero(){
            // El signo pesos se llama cuando se trabaja en propiedades computadas 
            return store.state.numero
        } */
    },
    methods: {
        ...Vuex.mapMutations(['disminuir'])
    },
})

/* Componente Hijo */
Vue.component('hijo',{
    template://html
    `
    <div>
        <button @click="aumentar">+</button>        
        <button @click="disminuir">-</button> 
        <button @click="obtenerCursos">Obtener Cursos</button> 

        <!-- 
            <button @click="$store.commit('aumentar')">+</button>
            <h1>{{$store.state.numero}}</h1> 
        -->
        <h1>{{numero}}</h1>
        <ul v-for="item of cursos">
            <li>{{item.nombre}}</li>
        <ul>
    </div>
    `,
    computed: {
        ...Vuex.mapState(['numero','cursos'])        
    },
    methods: {
        ...Vuex.mapMutations(['aumentar',['disminuir']]),
        ...Vuex.mapActions(['obtenerCursos'])
    },
})

/* Creamos constante para almacenar los valores
Dentro del vuex creamos una variable de objeto llamada state, la cual va almacenar los datos.
Para llamar valor en el componente, lo hacemos con las dobles llaves y con el signo $, ya que esto esta definido por
vue, luego el state y finalmente el valor a mostrar, el cual es es numero
$store.state.numero
Con esto ya podemos invocar el dato en cualquier componente que este a nuestro alcance.

Para generar metodos en vuex lo hacemos a traves de las mutaciones (mutations)
Para ejecutar la mutacion  o la funcion en el boton se realiza mendiante el commit,se realizaria de la siguiente manera
@click="$store.commit('aumentear')"

Podemos simplificar para llamar a los state y las mutaciones, una de ellas es ir al componente y crear una 
propiedad computada la cual retorna la información.

Vuex nos permite mapiar nuestros state, mutations y actions.
Esto nos ayuda a simplificar el llamado.


Cuando se trabaje con el vuecli se debe importar el mapstate

Cuando hacemos propiedades computadas, tenemos un objeto, pero el mapState nos devuelve varios objetos, 
para ello trabajamos con los tres puntos ...
No podemos menter un objeto dentro de un objeto, en caso si no es un array, 

Para las mutaciones aplicamos lo mismo que los state
*/
const store = new Vuex.Store({
    state:{
       numero:10, 
       cursos:[]
    },
    mutations:{
        aumentar(state){
           /*  $store.state.numero++ */
            state.numero++
        },
        //Asignamos un parametro el cual se le restara en donde se invoque la funcion
        disminuir(state,n){ 
            state.numero -= n
        },
        llenarCursos(state,cursosAccion){
            state.cursos = cursosAccion
        }
    }, 
    actions:{
        obtenerCursos: async function ({commit}){
            const data = await fetch('js/09.json');
            const cursos = await data.json();
            commit('llenarCursos',cursos)

        }
    }

})


new Vue({
    el:'#app',
    store:store,

   

})