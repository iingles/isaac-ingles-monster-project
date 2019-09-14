<template class="LogRow">
    <v-container>
        <v-layout row>
            <v-flex sm12>
                <section class="log" v-if="hits.length > 0">
                    <div class="small-12 columns">
                        <ul>

                            <li v-for="(hit,hitKey) in hits"
                                :class="{'player-turn': isPlayer, 'monster-turn': !isPlayer}"
                                :key="hitKey"
                            >
                                {{ hit.text }}
                            </li>
                            <!-- <li 
                            v-for="(hit, key) in this.hits" 
                            :key="key"
                            >
                                <div v-if="key %2 != 0" class="monster-turn">
                                    {{hit}}
                                </div>
                                <div v-else class="player-turn">
                                    {{hit}}
                                </div>
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
            isPlayer: ''
        }),
        props: {
            turnState: String,
            turnInfo: String,
            clearLog: Boolean
        },
        watch: {
            turnInfo: function() {
                var vm = this;

            this.hits.unshift({
                text: vm.turnInfo
            });

               //vm.hits.unshift(vm.turnInfo);
            },
            turnState: function() {
                var vm = this;
                if(vm.turnState === 'player') {
                    vm.isPlayer == true;
                } else { vm.isPlayer == false; }
            }
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