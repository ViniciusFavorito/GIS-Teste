import bcrypt from 'bcryptjs'

export const authService = async (userEmail: string, userPassword: string) => {

    const userNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@users')

    const users = JSON.parse(String(userNoParse)) || []
    const user = users.find(({ email }: { email: string }) => {
        return email === userEmail
    })
    const hashCompare = await bcrypt.compare(userPassword, user.password)
    return hashCompare ? user : {}
}
