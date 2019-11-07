const app = new Vue({

    el: '#app',
    data: {
        mensaje: 'Hola soy Bluuweb',
        contador:0,
        fondoBar: 'bg-primary',


    },
    computed: {
        invertido() {
            /* 
                * split('')-> es la funcion permite coger un string y convertirlo en un array
                * reverse()-> es la funcion que cambia de sentido el string, es decir de atras hacia adelante
                * join('') -> permite unir un array, mediante el seprador que se este asignando
            */
            return this.mensaje.split('').reverse().join('');

        }, 
        color(){
            /* 
                Retornamos en un objeto las clases cuando contador este dentro de la condicion que se establece
            */
            return {
                'bg-success':this.contador <= 10,
                'bg-warning':this.contador > 10 && this.contador <= 20,
                'bg-danger':this.contador > 20,
            }
        }
        
    },



})