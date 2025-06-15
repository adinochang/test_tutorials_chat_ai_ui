<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '../stores/user'
import axios from 'axios'
import { useRouter } from 'vue-router'
import robotImage from '../assets/robot.png'

// reactive references
const name = ref('')
const email = ref('')
const isLoading = ref(false)
const error = ref('')

// user store
const userStore = useUserStore();

// create user function
const createUser = async () => {
    if (!name.value || !email.value) {
        error.value = 'Name and email are required'
        return
    }

    // reset loading and error
    isLoading.value = true
    error.value = ''

    try {
        const formData = {
            name: name.value,
            email: email.value
        }

        // create user using API
        const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/register-user`, formData)

        // persist created user
        userStore.setUser({
            userId: data.userId,
            name: data.name,
        })

        // redirect to chat
        router.push('/chat')
    } catch (err) {
        error.value = 'Something went wrong. Please try again'
    } finally {
        isLoading.value = false
    }
}

// perform page navigation
const router = useRouter();

</script>

<template>
    <div class="h-screen flex items-center justify-center bg-gray-900 text-white">
        <div class="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
            <img
                :src="robotImage"
                alt=""
                class="mx-auto w-24 h-24 mb-4"
            />
            <h1 class="text-2xl font-semibild-mb-4 text-center">
                Welcome to Chat AI
            </h1>

            <input
                type="text"
                class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-non"
                placeholder="Name"
                v-model="name"
            >
            <input
                type="email"
                class="w-full p-2 mb-2 bg-gray-700 text-white rounded-lg focus:outline-non"
                placeholder="Email address"
                v-model="email"
            >
            <button
                class="w-full p-2 bg-blue-500 rounded-lg"
                :disabled="isLoading"
                @click="createUser"
            >
                {{ isLoading ? 'Logging in...' : 'Start Chat' }}
            </button>

            <p
                v-if="error"
                class="text-red-400 text-center mt-2"
            >
                {{ error }}
            </p>
        </div>
    </div>
</template>