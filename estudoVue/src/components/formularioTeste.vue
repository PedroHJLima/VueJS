<template>
    <form action="">
        <InputText/>
        <InputText/>
        <submitTeste/>
    </form>
</template>

<script>
    import submitTeste from './form/submitTeste.vue';
    import InputText from './form/inputText.vue';
    export default{
    name: 'formTeste',
    components: { submitTeste, InputText }
    }
</script>