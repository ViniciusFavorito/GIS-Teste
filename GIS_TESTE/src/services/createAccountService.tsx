export const createAccountService = async (name: string, email: string, password: string) => {


    const userNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@users')

    const users = JSON.parse(String(userNoParse)) || []

    const newUsers = [...users, { name, email, password }]
    await localStorage.setItem("@users", JSON.stringify(newUsers))
    return name
}
