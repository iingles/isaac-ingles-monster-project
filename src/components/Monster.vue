<template class='monsterGame'>
  <v-container>
    <v-layout row>
        
    </v-layout>
  </v-container>
</template>

<script>

    export default {
        name: 'Monster',
        
        data: () => ({
            gameOver: true,
            turn: 'player'
        }),    
        watch: {
            gameOver: function() {

            },
            turn: function() {

            }
        },
        methods: {
            newGame: function() {

                //reset everything
            
                // this.playerHealth  = 100;
                // this.monsterHealth = 100;
                // this.gameOver = false;
                // this.hits = [];
            
            },
            damageDone: function(modifier) {
                //universal, random damage generation
        
                let damage = 0;

                //calculate the damage done plus modifier
                damage = Math.floor(Math.random() * 10) + modifier;

                //reset modifier (just in case something wierd happens)
                modifier = 0;
                return damage; 
            },
        }
    };
</script>

<style scoped>

</style>