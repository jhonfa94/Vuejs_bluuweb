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
        ]
    }
})