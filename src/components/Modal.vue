<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{on}">

        </template>
        <v-card>
            <v-card-title>
                <h1>test</h1>
            </v-card-title>
            <v-card-text>
                Test content
            </v-card-text>
            <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>    
</template>

<script>
export default {
    props: {
        showModal: Boolean,
        modalMessage: String
    },
}
</script>