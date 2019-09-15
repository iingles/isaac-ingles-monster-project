<template>
  <v-app>
    <v-content>
      <HealthBars 
      HealthBars 
      :newGame="this.newGame"
      :turnDamage="this.turnDamage"
      :heal="this.heal"
      :turn="turn"
      :gameOver="this.gameOver"
      @playerLost="this.playerLost"
      @playerWon="this.playerWon"
      @changeTurn="turnState"
      @playerHealed="this.playerHealed"
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
        :turnState="this.turn"
        :clearLog="this.gameOver"
      />
      <Modal 
        :showModal="this.showModal"
        :modalMessage="this.modalString"
        :modalTitle="this.modalTitle"
        @modalYes="this.noNewGame" 
        @modalNo="this.noNewGame"       
      />
    </v-content>
  </v-app>
</template>

<script>
  import HealthBars from './components/HealthBars.vue';
  import ControlBar from './components/ControlBar';
  import GameLog from './components/GameLog';
  import Modal from './components/Modal';

  export default {
    //Max said I didn't need to use a 'name'... is a name necessary?
      components: {
      HealthBars,
      ControlBar,
      GameLog,
      Modal
    },   
    data: () => ({
      gameOver: true,
      turn: '',
      turnDamage: 0,
      heal: false,
      logString: '',
      showModal: false,
      modalString: '',
      modalTitle: ''
    }),    
    watch: {
 
    },
    methods: {
      noNewGame: function() {
        this.gameOver = true;
        this.showModal = false;
      },
      newGame: function() {  
        this.gameOver = false;        
        this.showModal = false;      
        this.turn = 'player';
        this.logString = ''
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
      },
      playerHeal: function() {
        this.heal = true;
      },
      playerHealed: function() {        
        this.turnState();
      },
      giveUpConfirm: function() {
        this.modalTitle = "Run Away!";
        this.modalString = "Do you really want to give up?"
        this.showModal = true;
        this.gameOver = true;
      },
      turnState: function() {
        var vm = this;
        if(vm.turn === 'player') {
          if(vm.heal == true) {
            vm.logString = 'Player heals for 10 HP';
            vm.heal = false;            
            vm.turn = 'monster'
            vm.damageDone();
          } else {
            vm.logString = 'Player hits monster for ' + vm.turnDamage + ' HP';
            vm.turn = 'monster' 
            vm.damageDone(); 
          }                 
        } else {           
          vm.logString = 'Monster hits player for ' + vm.turnDamage + ' HP';
          vm.turn = 'player' 
        }
        console.log(vm.turn);
      },
      playerLost: function() {
        this.modalTitle = "A Tragic Defeat!";
        this.modalString = "You have lost!  New game?";
        this.showModal = true;
      },
      playerWon: function() {
        this.modalTitle = "A Glorious Victory!";
        this.modalString = "You won!  New game?"
        this.showModal = true;
      }
    }
  };
</script>

<style scoped>

</style>