<template class="LogRow">
    <v-container>
        <v-layout row>
            <v-flex sm12>
                <section class="log" v-if="hits.length > 0">
                    <div class="small-12 columns">
                        <ul>
                            <li v-for="(hit,hitKey) in hits"
                                
                                :key="hitKey"
                            >
                                {{ hit.text }}
                            </li>
                            <!-- <li v-for="(hit,hitKey) in hits" :key="hitKey">
                                <div v-if="turnState == 'player'" class="player-turn">
                                    {{ hit.text }} turn: {{ turnState }}
                                </div>
                                <div v-else class="monster-turn">
                                     {{ hit.text }} turn: {{ turnState }}
                                </div>
                                    :class="{'player-turn': hit.isPlayer, 'monster-turn': !hit.isPlayer}"

                            </li> -->
                        </ul>
                    </div>
                </section>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            hits: [],
        }),
        props: {
            turnState: String,
            turnInfo: String,
            clearLog: Boolean
        },
        watch: {
            turnInfo: function() {
                var vm = this;

            },
            turnState: function() {
                var vm = this;
                if(vm.turnState === 'player') {
                        vm.hits.unshift({
                        isPlayer: true,
                        text: vm.turnInfo
                    });
                } 
                else {
                    vm.hits.unshift({
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