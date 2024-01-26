<template>
    <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default{
    name: 'LifeCycle',
    data(){
        return{
            nome:'ainda não sei'
        }
    },created(){
        setTimeout(() => {
            this.nome = "Matheus"
        }, 1000);
    },mounted(){
        this.nome = 'Pedro'
    }
}
</script>