export const useAuthStore = defineStore(
  'auth',
  () => {
    const API_URL = useAPI()
    const token = ref<string | undefined>()
    const userEmail = ref<string | undefined>()

    async function login(email: string, password: string): Promise<void> {
      const data = await $fetch<{ token: string; user: UserInterface }>(API_URL + '/auth/login', {
        method: 'POST',
        body: { email, password }
      })

      token.value = data.token
      userEmail.value = data.user.email

      navigateTo({ name: 'account' })
    }

    function clearToken(): void {
      token.value = undefined
    }

    return { token, login, clearToken, userEmail }
  },
  { persist: true }
)
