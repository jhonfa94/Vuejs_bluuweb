/* 
    Es importante que el componente este dentro de el para que se pueda visualizar correctamente en el navegador

    El componente esta conformado por: 
    el nombre en el cual se va a llamar y podra ser visualizado desde el html
    template, el cual almacenara todo el html que se va a modularizar en esta sección. 

    Al momento de que se quiere trabajar en el template este debe tener un div principal, de lo contrario no se podra  mostrar correctamente la información.

    Es recomendable utilizar que para el template se pueda tener las comillas invertidas, las cuales permiten tener comillas simples y dobles en los atributos de las etiquetas

    Cuando se trabaja el data en los componentes, estos trabajan como funcion, el cual debe retornar

*/
Vue.component('saludo',{
    template: //html
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>{{hola}}</h3>
    </div>
    `, 
    data() {
        return {
            'saludo': 'Saludos desde Vue en el componente Saludo',
            'hola': 'Hola desde Vuejs',

        }
    },
})


Vue.component('contador',{
    template://html
    `   
    <div>
        <h3>{{numero}}</h3>
        <button @click="numero++">+</button>
    </div>

    `,
    data() {
        return {
           numero: 0,

        }
    },
})

new Vue({
    el: '#app',
    /* data:{
        saludo:'Hola desde Vue',
    }, */
})