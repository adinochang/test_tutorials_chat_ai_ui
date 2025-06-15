<script setup lang="ts">
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

import robotImage from '../assets/robot.png'

// user store
const userStore = useUserStore();

// logout function
const logoutUser = () => {
    userStore.logout()
    router.push('/')
}


// perform page navigation
const router = useRouter();

</script>

<template>
    <div class="py-4 px-6 bg-gray-800 shadown-md flex justify-between items-center">
        <img
            :src="robotImage"
            alt="Chat AI"
            class="w-8 h-8"
        />
        <h1 class="text-2xl font-semibild-mb-4 text-center">
            Welcome to Chat AI
        </h1>
        <button
            class="text-gray-400 hover:text-white"
            @click="logoutUser"
        >
            Logout
        </button>
    </div>
</template>