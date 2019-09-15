<template class="LogRow">
    <v-container>
        <v-layout row>
            <v-flex xs5>
                <section class="log" v-if="playerHits.length > 0">
                    <ul>
                        <li v-for="(pHit, pKey) in playerHits" :Key="pKey" class="player-turn">
                            {{ pHit }}
                        </li>
                    </ul>
                </section>
            </v-flex>
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>
            <v-flex xs5>
                <section class="log" v-if="playerHits.length > 0">
                    <ul>
                        <li v-for="(mHit, mKey) in monsterHits" :Key="mKey" class="monster-turn">
                            {{ mHit }}
                        </li>
                    </ul>
                </section>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            playerHits: [],
            monsterHits: []
        }),
        props: {
            turn: String,
            logString: String,
            clearLog: Boolean
        },
        watch: {
            turn: function() {
                var vml = this;
                if(vml.turn == 'player') {
                    vml.monsterHits.unshift(vml.turnInfo);
                } 
                if(vml.turn == 'monster') {
                    vml.playerHits.unshift(vml.turnInfo);
                }
            },
            clearLog: function() {
                var vml = this;

                if(vml.clearLog == true) {
                    vml.playerHits = [];
                    vml.monsterHits = [];
                }
            },
            
        },

    }
</script>

<style scoped>
    .log {
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

    ul {
        list-style: none;
        font-weight: bold;
        text-transform: uppercase;
    }

    ul li {
        margin: 5px;
    }

    .player-turn {
        color: blue;
        background-color: #e4e8ff;
    }

    .monster-turn {
        color: red;
        background-color: #ffc0c1;
    }
</style>