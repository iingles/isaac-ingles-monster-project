<template>
  <v-app>
    <v-content>
      <Monster monsterGame/>
      <healthBars healthBars />      
      <controlBar controlRow/>
      <gameLog logRow />
    </v-content>
  </v-app>
</template>

<script>
  import Monster from './components/Monster';
  import healthBars from './components/healthBars.vue';
  import controlBar from './components/controlBar';
  import gameLog from './components/gameLog';


  export default {
    name: 'App',
    components: {
      Monster,
      healthBars,
      controlBar,
      gameLog
    },
    data: () => ({
      
    }),

  };
</script>
