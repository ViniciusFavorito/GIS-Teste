import bcrypt from 'bcryptjs'
export const createAccountService = async (name: string, email: string, password: string) => {

    const userNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@users')

    const users = JSON.parse(String(userNoParse)) || []

    const hashPassword = await bcrypt.hash(password, '$2a$10$CwTycUXWue0Thq9StjUM0u')

    const newUsers = [...users, { name, email, password: hashPassword }]
    await localStorage.setItem("@users", JSON.stringify(newUsers))
    return name
}
