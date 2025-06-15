import { defineStore } from 'pinia'

type UserData = {
  userId: string;
  name: string;
};

export const useUserStore = defineStore('user', {
    // return an object to store state data
    state: () => ({
        userId: null as string | null, // can be null or string
        name: null as string | null, // can be null or string
    }),
    // functions to manipulate the state
    actions: {
        setUser(data: UserData) {
            this.userId = data.userId
            this.name = data.name
        },
        logout() {
            this.userId = null
            this.name = null
        }
    }, 
    // persists data across page reloads
    persist: true
})