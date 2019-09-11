<template class="HealthBars">
    <v-container>
        <v-layout row>
            <v-flex xs12 md6>
                <div class="small-6 columns">
                    <h1 class="text-center">YOU</h1>
                    <div class="healthbar">
                        <div
                                class="healthbar text-center"
                                style="background-color: green; margin: 0; color: white;"
                                :style="{width: playerHealth + '%'}">
                            {{ playerHealth }} / 100
                        </div>
                    </div>
                    <h1 class="text-center">MAGIC</h1>
                    <div class="healthbar">                        
                        <div
                                class="magicbar text-center"
                                style="background-color: blue; margin: 0; color: white;"
                                :style="{width: playerMagic + '%'}">
                            {{ playerMagic }} / 100
                        </div>
                    </div>
                </div>
            </v-flex>
            <v-flex xs12 md6>
                <div class="small-6 columns">
                    <h1 class="text-center">MONSTER</h1>
                    <div class="healthbar">
                        <div
                                class="healthbar text-center"
                                style="background-color: green; margin: 0; color: white;"
                                :style="{ width: monsterHealth + '%'}">
                            {{ monsterHealth }} / 100
                        </div>
                    </div>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            playerHealth: 100,
            playerMagic: 100,
            monsterHealth: 100
        }),
        props: {
            turnDamage: Number,
            turn: String,
            heal: Number
        },
        watch: {
            turn: function() {
                var vmh = this;

                if(vmh.playerHealth <= 0) {
                    vmh.playerHealth = 0;
                    console.log('player lost');
                    this.$emit('playerLost');

                } else if(vmh.monsterHealth <= 0) {
                    vmh.monsterHealth = 0;
                    console.log('player won');
                    this.emit('playerWon');
                }

                if(vmh.turnDamage > 0) {
                    this.charDamage();
                }

            },
            heal: function() {
                if(this.playerMagic >= 10) {
                    
                    this.healMe();
                } else { 
                    this.playerMagic = 0;
                    console.log('out of magic');
                }
            }
            
        },
        methods: {
            charDamage: function() {
                var vmh = this;
               
               if(vmh.turn === 'player') {
                    vmh.monsterHealth -= vmh.turnDamage;
                } else { vmh.playerHealth -= vmh.turnDamage}
                this.$emit('vmh.playerHealth', 'vmh.monsterHealth');
            },
            healMe: function() {
                var vmh = this;
                if(vmh.playerHealth >=90){
                    vmh.playerHealth = 100
                } else { vmh.playerHealth += vmh.heal; }

                vmh.playerMagic -= 10;
                console.log('heal');
               // this.$emit('playerHealed');
            }
        }
    }
</script>

<style scoped>
    .healthbar, .magicbar {
        width: 100%;
        height: 40px;
        background-color: #eee;
        margin: auto;
        transition: width 500ms;
    }
</style>