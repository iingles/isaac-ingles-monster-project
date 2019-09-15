<template class="HealthBars">
    <v-container>
        <v-layout row >

            <v-flex xs1 mt-12 mr-1>

                <v-img 
                    class="img-center" 
                    src="../assets/design_images/smiley.png"
                    max-width="50"
                    max-height="50"
                ></v-img>
            </v-flex>
            <v-flex xs4 justify-left>
                <div class="small-5 columns">
                    <h1 class="text-center">YOU</h1>
                    <div class="healthbar" >
                        <div
                                id="playerHealthBar"
                                class="healthbar text-center"
                                style="background-color: green; margin: 0; color: white;"
                                :style="{width: playerHealth + '%'}">
                            {{ playerHealth }} / 100
                        </div>
                    </div>
                    <!-- <h1 class="text-center">MAGIC</h1>
                    <div class="healthbar">                        
                        <div
                                class="magicbar text-center"
                                style="background-color: blue; margin: 0; color: white;"
                                :style="{width: playerMagic + '%'}">
                            {{ playerMagic }} / 100
                        </div>
                    </div> -->
                </div>
            </v-flex>
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>
            <v-flex xs4 justify-right>
                <div class="small-4 columns">
                    <h1 class="text-center">MONSTER</h1>
                    <div class="healthbar">
                        <div
                                id="monsterHealthBar"
                                class="healthbar text-center"
                                style="background-color: green; margin: 0; color: white;"
                                :style="{ width: monsterHealth + '%'}">
                            {{ monsterHealth }} / 100
                        </div>
                  </div>
                </div>
            </v-flex>

            <v-flex xs1 mt-12 ml-1>
                <v-img 
                    class="img-center"
                    src="../assets/design_images/monster.png"
                    max-width="50"
                    max-height="50"
                ></v-img>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            playerHealth: 100,
            //playerMagic: 100,
            monsterHealth: 100
        }),
        props: {
            turnDamage: Number,
            turn: String,
            heal: Boolean,
            createNewGame: Boolean
            
        },
        watch: {
            turnDamage: function() {
                var vmh = this;

                if(vmh.playerHealth <= 0) {
                    vmh.playerHealth = 0;
                    this.$emit('playerLost');

                } else if(vmh.monsterHealth <= 0) {
                    vmh.monsterHealth = 0;
                    vmh.$emit('playerWon');
                }

                if(vmh.turnDamage > 0) {
                    vmh.charDamage();
                }

            },
            heal: function() {
                var vmh = this;
                if(vmh.heal == true) {
                    if (this.playerHealth <= 90) {
                        this.playerHealth += 10;
                        //this.playerMagic -=10;
                     } else {
                        this.playerHealth = 100;
                        //this.playerMagic -=10;
                    }
                    this.$emit('playerHealed');
                }
            },
            createNewGame: function() {
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.playerMagic = 100;
            },
            playerHealth: function() {
                if(this.playerHealth < 25) {
                    document.getElementById('playerHealthBar').style.backgroundColor ="red";
                } else if(this.playerHealth > 25) { 
                    document.getElementById('playerHealthBar').style.backgroundColor ="green"; 
                }
                
            },
            monsterHealth: function() {
                if(this.monsterHealth < 25) {
                    document.getElementById('monsterHealthBar').style.backgroundColor ="red";
                } else if(this.monsterHealth > 25) { 
                    document.getElementById('monsterHealthBar').style.backgroundColor ="green"; 
                }
            }      
        },
        methods: {
            charDamage: function() {
                var vmh = this;
               
               if(vmh.turn === 'player') {
                    vmh.monsterHealth -= vmh.turnDamage;
                    this.$emit('changeTurn');              
                } 
               if(vmh.turn === 'monster') { 
                   vmh.playerHealth -= vmh.turnDamage;
                   vmh.$emit('changeTurn');
                }
                vmh.$emit('vmh.playerHealth', 'vmh.monsterHealth');
            },
        }
    }
</script>

<style scoped>
    .healthbar, .magicbar {
        width: 100%;
        height: 50px;
        background-color: #ccc;
        margin: auto;
        transition: width 500ms;
    }

    .img-center {
        margin: 0 auto;
    }
</style>