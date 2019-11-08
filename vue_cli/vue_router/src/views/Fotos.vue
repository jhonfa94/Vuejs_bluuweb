<template>
    <div>
        <h1>Galería de fotos  </h1>

        <router-link :to="{ name:'fotos', params:{id : item}}"
             v-for="(item,index) of fotosArreglo" :key="index">
            <button>Foto {{item}}</button>
        </router-link>        

        <Foto/>


        <button @click="anterior">Anterior</button>
        <button @click="home">Home</button>
        <button @click="siguiente">Siguiente</button>

    </div>
</template>

<script>
/* 
    - Con el @ podemos irnos a la raiz del proyecto
 Foto es el nombre del componente

 - Cuando utilizamos el route-link toma por defecto la ruta donde se encuentra alojado, es decir en este caso en fotos

 - Podemos crear metodos en los cuales le asignamos navegacion hacia una ruta en especifica o tambien acceder al historial de navegación.

 - Dentro del metodo se debe especificar el this.$router.push('/')
 donde:
    this => indicamos que accedemos en el mismo archivo,
    $router => funcion de vue para las rutas
    push   => el metodo para que se vaya a una ruta en especifico una vez se le indique
    (/) => especificamos el nombre de la ruta a donde queremos que se vaya cuando cuando de clic, en este caso a la raiz del proyecto que es el home

 - Para navegar en el historial se hace mediante el this.$router.go(numero de historial), donde: 
    this => indicamos que accedemos en el mismo archivo,
    $router => funcion de vue para las rutas
    go => especificamos para que se vaya a un numero especial del historial para que navegue puede ser mayo o menor
    (-1) => indicamos que se vaya a un registro atras en el historial
    (1) => indicamos que se vaya al siguiente registro del historial.
    
*/
import Foto from '@/components/Fotografia'
export default {
    components:{
        Foto,
    }, 
    data() {
        return {
            fotosArreglo:[1,2,3,4]
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)

        },
    }
}
</script>

