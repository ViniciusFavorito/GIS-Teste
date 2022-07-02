export const authService = (userEmail: string, userPassword: string) => {

    const userNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@users')

    const users = JSON.parse(String(userNoParse)) || []

    const user = users.find(({ email, password }: { email: string, password: string }) => {
        return email === userEmail && password === userPassword
    }
    ) || {}

    return user
}
