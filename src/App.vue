<template>
  <v-app>
    <v-content>
      <Monster monsterGame/>
    </v-content>
  </v-app>
</template>

<script>
import Monster from './components/Monster';

export default {
  name: 'App',
  components: {
    Monster,
  },
  data: () => ({
    
  }),

};


</script>
