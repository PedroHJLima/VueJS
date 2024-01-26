<template>
    <h2>Essa é a descrição da pessoa: {{nome}}</h2>
    <infoVue/>
</template>

<script>
    import infoVue from './infoVue.vue';
    export default{
        nome:'pessoa',
        components: {
            infoVue
        },
        data(){
            return{
            nome:'matheus'
            }
            }    
        
    }
</script>