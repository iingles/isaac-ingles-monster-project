<template class="LogRow">
    <v-container>
        <v-layout row>
            <v-flex xs5>
                <section class="log" v-if="playerHits.length > 0">
                    <ul>
                        <li v-for="(pHit, pKey) in playerHits" :Key="pKey">
                            {{pHit.text}}
                        </li>
                    </ul>
                </section>
            </v-flex>
            <div class="flex-grow-1"></div>
            <div class="flex-grow-1"></div>
            <v-flex xs5>
                <section class="log" v-if="playerHits.length > 0">
                    <ul>
                        <li v-for="(mHit, mKey) in monsterHits" :Key="mKey">
                            {{ mHit.text }}
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
            turnState: String,
            turnInfo: String,
            clearLog: Boolean
        },
        watch: {
            turnState: function() {
                console.log(this.turnState);
                var vm = this;
                if(vm.turnState == 'player') {
                        vm.monsterHits.unshift({
                        isPlayer: true,
                        text: vm.turnInfo
                    });
                } 
                else {
                    vm.playerHits.unshift({
                        isPlayer: false,
                        text: vm.turnInfo
                    });
                 }
            },
            clearLog: function() {
                var vm = this;

                if(vm.clearLog == true) {
                    vm.hits = [];
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
</style>