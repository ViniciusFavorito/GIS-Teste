import bcrypt from 'bcryptjs'

interface IUser {
    email: string;
    password: string;
    name: string
}

export const changePasswordService = async (userEmail: string, lastPassword: string, newPassword: string) => {
    const users = JSON.parse(String(localStorage.getItem("@users") || []))
    const user = users.find(({ email }: { email: string }) => {
        return email === userEmail
    })
    const hashCompare = await bcrypt.compare(lastPassword, user.password)
    if (user.email && hashCompare) {
        const hashpass = await bcrypt.hashSync(newPassword, '$2a$10$CwTycUXWue0Thq9StjUM0u')
        const itsUser = { ...user, password: hashpass }
        console.log({ hashpass, itsUser })
        const newUsers = users.map(({ name, email, password }: IUser) => {
            if (email === userEmail) {
                return itsUser
            }
            return { email, password, name }
        })
        console.log({ newUsers })
        localStorage.setItem("@users", JSON.stringify(newUsers))
    }
    return user
}