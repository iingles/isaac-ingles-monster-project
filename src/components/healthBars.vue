<template class="healthBars">
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
        name: 'healthBars',

        data: () => ({
            playerHealth: 100,
            playerMagic: 100,
            monsterHealth: 100
        })
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