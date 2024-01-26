<template>
    <h1>Olá Vue!</h1>
    <p>Meu nome é {{nome}}</p>
</template>

<script>
    export default{ 
    name:'primeiroComponente',
    data(){
        return{
            nome:'matheus'
            }
        }  
    }
</script>