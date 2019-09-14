<template>
  <v-app>
    <v-content>
      <HealthBars 
      HealthBars 
      :newGame="this.newGame"
      :turnDamage="this.turnDamage"
      :heal="heal"
      :turn="turn"
      :createNewGame="gameOver"
      @playerLost="this.playerLost"
      @playerWon="this.playerWon"
      />      
      <ControlBar 
      ControlRow
       @attack="damageDone" 
       @specialAttack="damageDone(Math.floor(Math.random() * 10))" 
       @heal="playerHeal" 
       @giveUp="giveUpConfirm"
       @startGame="newGame"
       :gameOver="this.gameOver"
       />
      <GameLog LogRow 
      :turnInfo="this.logString"
      />
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
    HealthBars,
    ControlBar,
    GameLog
    },   
    data: () => ({
      gameOver: true,
      turn: '',
      turnDamage: 0,
      heal: 0,
      logString: ''
    }),    
    watch: {
      gameOver: function() {

      },
      turn: function() {
        if(this.gameOver == false) {
          //this.heal = 0;
        }
      }
    },
    methods: {
      newGame: function() {
        this.gameOver = false;
        this.turn = 'player';
      },
      damageDone: function(modifier) {
        //universal, random damage generation plus an optional modifier
        let damage = 0;

        //calculate the damage done plus modifier; don't let the damage == 0
        while(damage == 0) {
           if(modifier) {
          damage = Math.floor(Math.random() * 10) + modifier;
          } else {
            damage = Math.floor(Math.random() * 10);
          }  
        }        
        this.turnDamage = damage;
        this.turnState();
      },
      playerHeal: function() {
        this.heal = 10;
      },
      giveUpConfirm: function() {
        this.gameOver = true;
      },
      turnState: function() {
        if(this.turn === 'player') {
          this.logString = 'Player hits monster for ' + this.turnDamage + ' HP';
          this.turn = 'monster'          
        } else {           
          this.logString = 'Monster hits player for ' + this.turnDamage + ' HP';
          this.turn = 'player' 
        }
        console.log(this.logString);
      },
      playerLost: function() {
        this.gameOver = true;
      },
      playerWon: function() {
        this.gameOver = true;
      }
    }
  };
</script>

<style scoped>

</style>