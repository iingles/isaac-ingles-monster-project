<template class="ControlRow">
    <v-container>
        <v-layout row>
            <v-flex>

                <section class="controls" v-if="gameOver">
                    <div class="small-12 columns">
                    <button id="start-game" @click="startGame()">START NEW GAME</button>
                    </div>
                </section>

                <section class="controls" v-else>
                    <div class="small-12 columns">
                        <button id="attack" @click="attack()">ATTACK</button>
                        <button id="special-attack" @click="specialAttack()">MAGIC ATTACK</button>
                        <button id="heal" @click="heal()">HEAL SPELL</button>
                        <button id="give-up" @click="giveUp()">GIVE UP</button>
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