export const emailValidadeService = (userEmail: string) => {

    const userNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@users')

    const users = JSON.parse(String(userNoParse)) || []

    const user = users.find(({ email }: { email: string }) => {
        return email === userEmail
    }
    ) || {}

    return user.email || ""
}
