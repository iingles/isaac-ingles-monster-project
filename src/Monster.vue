<template>
  <v-app>
    <v-content>
      <HealthBars 
      HealthBars 

      :turnDamage="this.turnDamage"
      :heal="heal"
      :turn="turn"
      />      
      <ControlBar 
      ControlRow
       @attack="damageDone" 
       @specialAttack="damageDone" 
       @heal="playerHeal" 
       @giveUp="giveUpConfirm"
       @startGame="newGame"
       :gameOver="this.gameOver"
       />
      <GameLog LogRow />
    </v-content>
  </v-app>
</template>

<script>
  import HealthBars from './components/HealthBars.vue';
  import ControlBar from './components/ControlBar';
  import GameLog from './components/GameLog';

  export default {
    //Max said I didn't need to use a 'name'... is a name necessary?
    components: {
    //should I use the Vue version of registration, or just the ES6 version as I've done here?
    HealthBars,
    ControlBar,
    GameLog
    },   
    data: () => ({
      gameOver: true,
      turn: '',
      turnDamage: 0,
      heal: 0
    }),    
    watch: {
      gameOver: function() {

      },
      turn: function() {
        if(this.gameOver == false) {
          //this.turnDamage = 0;
          this.heal = 0;
        }
      }
    },
    methods: {
      newGame: function() {
        this.gameOver = false;
        this.turn = 'player';
        //reset everything
    
        // this.playerHealth  = 100;
        // this.monsterHealth = 100;
        // this.hits = [];
      
      },
      damageDone: function(turnDamage) {
        //universal, random damage generation plus an optional modifier
        let damage = 0;

        //calculate the damage done plus modifier
        damage = Math.floor(Math.random() * 10);

        console.log("damage: " + damage);
        this.turnDamage = damage;
        this.turnState();
      },
      playerHeal: function() {
        this.heal = 10;
        console.log("healed for " + this.heal);
      },
      giveUpConfirm: function() {

      },
      turnState: function() {
        if(this.turn == 'player') {
          this.turn = 'monster'
        } else { this.turn = 'player' }
        console.log("turn: " + this.turn);
      }
    }
  };
</script>

<style scoped>

</style>