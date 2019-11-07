const app = new Vue({
    el: '#app',
    data: {
        texto: 'Hola'
    },
    methods: {
        destruir() {
            /* Cuando se destruye, deja de funcionar todo, es decir que si damos en cambiar la palabra hola una vez hemos destruido primoero no se va tener en cuenta el cambio por la razon de que se destruyo todo el elemento. */
            this.$destroy();
        }
    },
    beforeCreate() {
        //SE EJECUTA ANTES LEER EL VUE, ES DECIR DE LEER EL DIV CON ID APP
        console.log('beforeCreate');
        console.log(this.texto);//No se visualiza en consola porque no se ha podido crear
    },
    created() {
        //AL CREAR LOS ÉTODOS, OBSEVADORES Y EVENTOS, PERO AÚN NO ACCEDE AL DOM
        // AUN NO SE PUEDE ACCEDER A 'el'
        console.log('Create');
        console.log(this.texto);
    },
    beforeMount() {
        /* SE EJECUTA ANTES DE INSERTAR EN EL DOM */
        console.log('beforeMount');
    },
    mounted() {
        /*Es cuando ya se mostro, es decir para este caso el hola  */
        console.log("Mounted");
    },
    beforeUpdate() {
        /* Al dectecar un cambio */
        console.log("beforeUpdate");
    },
    updated() {
        /* Al realizar los cambios */
        console.log('Update');
    },
    beforeDestroy() {
        /* Andres de destruir la instancia */
        console.log("beforeDestroy");
    },
    destroyed() {
        /* Cuando la instancia se destruyo */
        console.log('destroyed');
    },

    methods:{
        destruir(){
            this.$destroy();
        }
    }


})