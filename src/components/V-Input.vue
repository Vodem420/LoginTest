<template>
    <div class="v-input" :class="{ errorInput : error}">
        <label for=""> {{label}}</label>
        <input 
            :type="type" 
            :value="value"
            @input="input"
            :placeholder="placeholder"
        >
        <div v-if="error" class="errorContainer">
            {{error}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: [String, Number],
                default: null
            },
            type: {
                type: String,
                default: 'text'
            },
            label: {
                type: String,
                default: null
            },
            error: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                dafault: null
            }
        },
        data(){
            return{}
        },
        methods: {
            input(e) {
                let value = e.target.value;
                this.$emit('input', value)
            }
        }
    }
</script>