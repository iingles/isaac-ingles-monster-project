<template class="ControlRow">
    <v-container>
        <v-layout row>
            <v-flex>

                <section class="controls" v-if="gameOver">
                    <div class="small-12 columns">
                       <v-btn color="red primary" id="start-game" @click="startGame()">START NEW GAME</v-btn>
                    </div>
                </section>

                <section class="controls" v-else>
                    <div class="small-12 columns">
                        <v-btn class="ma-2" id="attack" color="red" @click="attack()">ATTACK</v-btn>
                        <v-btn class="ma-2" id="special-attack" color="orange" @click="specialAttack()">MAGIC ATTACK</v-btn>
                        <v-btn class="ma-2" id="heal" color="blue" @click="heal()">HEAL SPELL</v-btn>
                        <v-btn class="ma-2" id="give-up" color="black"  @click="giveUp()">GIVE UP</v-btn>
                    </div>
                </section>

            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: {
            gameOver: Boolean
        },
        data: () => ({
            
        }),
        methods: {
            attack: function() {
                this.$emit('attack');
            },

            specialAttack: function() {
                //generate a random modifier for the special damage
                //let modifier = Math.floor(Math.random() * 10);
                this.$emit('specialAttack');
            },
            heal: function() {
                this.$emit('heal');
            },
            giveUp: function() {
                this.$emit('giveUp');
            },
            startGame: function() {
                this.$emit('startGame');
            }
        }
    }
</script>

<style scoped>
    .controls {
        margin-top: 30px;
        text-align: center;
        padding: 10px;
        border: 1px solid #ccc;
        box-shadow: 0px 3px 6px #ccc;
    }

    .action-button {
        font-size: 20px;
        padding: 12px;
   
    }

    #start-game {
        background-color: #aaffb0;
    }

    #start-game:hover {
        background-color: #76ff7e;
    }

    #attack {
        background-color: #ff7367;
        color: #fff;
    }

    #attack:hover {
        background-color: #ff3f43;
    }

    #special-attack {
       color: #fff;
    }

    #special-attack:hover {
        background-color: #ff9a2b;
    }

    #heal {
        color: #fff;
    }

    #heal:hover {
        background-color: #76ff7e;
    }

    #give-up {
        color: #fff;
    }

    #give-up:hover {
        background-color: #c7c7c7;
    }
</style>