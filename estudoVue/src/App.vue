<template>
  <primeiroComponente/>
  <LifeCycle/>
  <pessoaTeste/>
  <formularioTeste/>
  </template>

<script>
  import primeiroComponente from './components/primeiroComponenete.vue';
  import LifeCycle from './components/LifeCycle.vue';
  import pessoaTeste from './components/pessoaTeste.vue';
  import formularioTeste from './components/formularioTeste.vue'

  export default{ 
    name:'App',
    components: { 
      primeiroComponente,
      LifeCycle,
      pessoaTeste,
      formularioTeste
    }

  }
</script>