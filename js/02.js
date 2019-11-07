const app = new Vue({
    el:'#app',
    data:{
        titulo: 'Hola mundo con Vue',
        /* frutas:['Manzana','Pera','Mango','Uva','Banano'], */
        frutas:[
            {nombre:'Pera', cantidad:10},
            {nombre:'Manzana', cantidad:0},
            {nombre:'Mango', cantidad:22},
            {nombre:'Uva', cantidad:11},
            {nombre:'Banano', cantidad:0},
        ], 
        nuevaFruta:'',
        cantidadFruta:0,
        total:0,

    },
    
    methods: { //EJECUTA FUNCIONES 
        agregarFruta(){
            this.frutas.push({nombre: this.nuevaFruta, cantidad:0});
            this.nuevaFruta = '';
        },
        otroMetodo(){

        }
    },
    computed: { //PERMITE REALIZAR CALCULOS EN EL COMPUTED, ESTAS DEBEN RETORNAR EL VALOR
        sumarFrutas(){
            this.total = 0;
            for ( fruta of this.frutas) {
                this.total = this.total + fruta.cantidad;
            }
            return this.total
        }
    },
})