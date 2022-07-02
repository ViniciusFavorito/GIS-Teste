
export interface ICreateCall {
    name: string,
    phone: string,
    endereco: string,
    dtCall: string,
    obs: string
}


export const createCallService = async ({ name, dtCall, endereco, obs, phone }: ICreateCall) => {


    const callNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@calls')

    const calls = JSON.parse(String(callNoParse)) || []

    const newCall = [...calls, { name, dtCall, endereco, obs, phone }]
    await localStorage.setItem("@calls", JSON.stringify(newCall))
    return name
}
