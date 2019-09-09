<template class='monsterGame'>
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
                        {{ playerHealth }}
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
                            :style="{width: monsterHealth + '%'}"
                        >
                        {{ monsterHealth }}
                    </div>
                </div>
            </div>
        </v-flex>
    </v-layout>

    <v-layout row>
         <v-flex>
            <section class="controls"  v-if="!gameOn">
                <div class="small-12 columns">
                 <button id="start-game" @click="newGame()">START NEW GAME</button>
                </div>
            </section>

            <section class="controls" v-else>
                <div class="small-12 columns" v-if="gameOn">
                     <button id="attack"
                        @click="damageDone()"
                    >ATTACK</button>
                    <button id="special-attack" @click="specialAttack = true, damageDone()">SPECIAL ATTACK</button>
                    <button id="heal" @click="heal=true">HEAL</button>
                    <button id="give-up" @click="newGame()">GIVE UP</button>
                </div>
            </section>
        </v-flex>
    </v-layout>

    <v-layout row>
        <v-flex xs12 md6>
            <section class="log" v-if="hits.length > 0">
                <div class="small-12 columns">
                    <ul>
                        <li 
                        v-for="(hit, key) in hits" 
                        :key="key"
                        >
                            <div v-if="key %2 == 0" class="monster-turn">
                                Monster hits Player for {{ hit }}
                            </div>
                            <div v-else class="player-turn">
                                Player hits Monster for {{ hit }}                            
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </v-flex>
            
        <v-flex>
          
            <Modal />
        </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import Modal from './Modal'

export default {
    components: { Modal },

    data: () => ({
        playerHealth: 100,
        monsterHealth: 100,
        specialAttack: false,
        heal: false,
        gameOn: false,
        hits: [],
        logMessage: '',
        modalMessage: '',
        showDialog: false
    }),    
    watch: {
        heal: function() {
            var vm = this;
            if(vm.heal == true) {
                if(vm.playerHealth >= 90) {
                    vm.playerHealth = 100;                    
                } else { vm.playerHealth += 10 }
           }
           vm.heal="false";
        },
        gameOn: function() {
            var vm = this;
            if(!vm.gameOn) {
               vm.showDialog = true;
            }
        }
    },
    methods: {
        newGame: function() {
        
            this.playerHealth  = 100;
            this.monsterHealth = 100;
            this.gameOn = true;
            this.hits = [];
        
        },
        damageDone: function() {
            var vm = this;

            let monsterDamage = Math.floor(Math.random() * 10);
            let playerDamage = Math.floor(Math.random() * 10);

            if(vm.specialAttack == true) {
                monsterDamage += Math.floor(Math.random() * 12); 
                vm.specialAttack = false;
            }

            vm.monsterHealth -= monsterDamage;
            vm.playerHealth -= playerDamage;

            if(vm.monsterHealth <= 0) {
                vm.monsterHealth = 0;
                vm.gameOn = false;
            }

            if(vm.playerHealth <= 0) {
                vm.playerHealth = 0;
                vm.gameOn = false;
            }
            
            vm.hits.unshift(monsterDamage);
            vm.hits.unshift(playerDamage);
        },
    }
};
</script>

<style scoped>
    .text-center {
        text-align: center;
    }

    .healthbar {
        width: 80%;
        height: 40px;
        background-color: #eee;
        margin: auto;
        transition: width 500ms;
    }

    .controls, .log {
        margin-top: 30px;
        text-align: center;
        padding: 10px;
        border: 1px solid #ccc;
        box-shadow: 0px 3px 6px #ccc;
    }

    .turn {
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 22px;
    }

    .log ul {
        list-style: none;
        font-weight: bold;
        text-transform: uppercase;
    }

    .log ul li {
        margin: 5px;
    }

    .log ul .player-turn {
        color: blue;
        background-color: #e4e8ff;
    }

    .log ul .monster-turn {
        color: red;
        background-color: #ffc0c1;
    }

    button {
        font-size: 20px;
        background-color: #eee;
        padding: 12px;
        box-shadow: 0 1px 1px black;
        margin: 10px;
    }

    #start-game {
        background-color: #aaffb0;
    }

    #start-game:hover {
        background-color: #76ff7e;
    }

    #attack {
        background-color: #ff7367;
    }

    #attack:hover {
        background-color: #ff3f43;
    }

    #special-attack {
        background-color: #ffaf4f;
    }

    #special-attack:hover {
        background-color: #ff9a2b;
    }

    #heal {
        background-color: #aaffb0;
    }

    #heal:hover {
        background-color: #76ff7e;
    }

    #give-up {
        background-color: #ffffff;
    }

    #give-up:hover {
        background-color: #c7c7c7;
    }
</style>