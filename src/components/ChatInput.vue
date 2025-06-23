<script setup lang="ts">
import { ref } from 'vue'

const message = ref('')

// message has to be sent up, use emit for this 
const emit = defineEmits(['send'])

const sendMessage = () => {
    if (!message.value.trim()) {
        return 
    }

    emit('send', message.value)
    message.value = ''
}
</script>

<template>
    <div class="p-4 bg-gray-800 flex">
        <input type="text" v-model="message" placeholder="Send a message" @keyup.enter="sendMessage" class="flex-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none">
        <button @click="sendMessage" class="ml-2 px-4 py-2 bg-blue-500 rounded-lg">
            Send
        </button>
    </div>
</template>

