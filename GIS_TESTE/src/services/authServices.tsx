

export const authService = (userEmail: string, userPassword: string) => {


    const userNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@users')

    const users = JSON.parse(String(userNoParse)) || []
    console.log(users)

    const user = users.find(({ email, password }: { email: string, password: string }) => {
        console.log(email, userEmail, password, userPassword)
        return email === userEmail && password === userPassword

    }
    ) || {}
    console.log(user)

    return user
}
