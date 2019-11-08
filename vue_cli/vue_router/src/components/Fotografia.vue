<template>
    <div>
        <h3>Foto desde componente: {{ $route.params.id}}</h3>
    </div>
</template>

<script>
/* 
    Para poder llamar el componente llamos la funcion de route
    $route.params.id
    $routes => funcion establecida por vuejs
    params => se indica que recibe parametros
    id => nombre de la variable que se establecio en el archivo route.js
*/

/* Asignamos el nombre del componente  */
export default {
    name:'Foto',

}
</script>