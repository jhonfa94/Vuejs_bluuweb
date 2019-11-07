/* 
    Para poder enviar la información de un componente a otro, como es el caso del padre al hijo, lo que se debe realizar 
    es en el componente del <hijo numero=5></hijo> que esta en el padre, se debe indicarle el nombre y el valor a pasar.
    Pero para que pueda el hijo recibir este valor que le manda el padre, lo que se utiliza es que el componente del 
    hijo se declara el props en un array, en donde se almacena el nombre de la variable con el valor para ser 
    visualizado en el componente del hijo.
    Los props nos permiten almacenar la información que viene del padre.

    Para poder pasar la data del padre al hijo, se debe especificar un v-bind, el cual se declara con los 
    dos puntos antes del nombre de la variable a mandar del hijo, y posteriormente el valor a mandar va ser 
    igual al nombre de la data o la variable
    <hijo :numero=numeroPadre></hijo>

    Para mandar información del componente hijo al padre, lo podemos hacer mediante un evento, una vez la data
    ya sea leida,el cual es mounted.
    Para recibir el evento que se genero en el componente hijo, se utiliza el @click el cual recibe el nombre del 
    evento del componente hijo que fue nombreHijo
    @nombreHijo="nombrePadre = $event"
    @nombreHijo -> nombre del evento que se genero en el componente hijo
    nombrePadre -> se va a sobreescribir con la información que venga del hijo 
    $event -> evento que se esta recibiendo

*/


Vue.component('padre',{
    template://html
    `
    <div class="p-5 bg-dark text-white">
        <h2>Componente Padre: {{numeroPadre}}</h2>
        <button class="btn btn-danger" @click="numeroPadre++"> + </button>
        <button class="btn btn-warning" @click="numeroPadre++"> - </button>
        <br>
        {{nombrePadre}}
        <hijo :numero=numeroPadre @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data() {
        return {
            numeroPadre: 10,
            nombrePadre: '',

        }
    },
    
})

Vue.component('hijo',{
    template://html
    `
    <div class="py-5 bg-success text-white">
        <h3>Componente Hijo {{numero}}</h3>
        <h4>Nombre: {{nombre}}</h4>
        <button class="btn btn-info" @click="numero++">+</button>
        
    </div>
    `,
    props:['numero'],
    data() {
        return {
            nombre: 'Jhon fabio'
        }
    },
    mounted() {
        /* $emit -> significa que vamos a emitir un evento, en el que se especifica que se pasa el nombre de la 
        variable junto con el valor, esto seprado por una coma */
        this.$emit('nombreHijo', this.nombre)
    },
})

new Vue({
    el:'#app'
})