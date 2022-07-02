
interface IUser {
    email: string;
    password: string;
}

export const changePasswordService = (userEmail: string, userPassword: string, newPassword: string) => {

    const users = JSON.parse(String(localStorage.getItem("@users") || []))

    const user = users.find(({ email, password }: IUser) => email === userEmail && password === userPassword
    ) || {}
    if (user.email) {
        const newUser = user.map(({ email, password }: IUser) => {
            if (email === userEmail && password === userPassword) {
                return {
                    email,
                    password: newPassword
                }
            }
        })
        localStorage.setItem("@users", JSON.stringify(newUser))
    }
    return user
}